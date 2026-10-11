#!/usr/bin/env python3
"""Read the photo folder on Google Drive and write scan.json for build_site.py.

Run on the computer that has the Drive folder (standard library only):
    python3 scan_drive.py "<photo folder>" "<scan.json>"

A project is any folder (up to 3 levels down) that holds a project.txt card.
Its 06_website folder holds the photos for the site, named NN[a][_g|_gN]_<camera>.jpg.
Folders named in SKIP and anything matching "3. website/private_rules.txt" are never read.
"""
import datetime, json, os, re, sys, unicodedata

SKIP = {"0. inbox", "9. private", "_template", "3. website"}
NAME = re.compile(r"^(\d{2})([a-z]?)(?:_g(\d*))?_(.+)\.jpe?g$", re.I)
CATEGORY = {"1. commercial": "commercial", "2. personal": "personal"}


def nfc(s):
    return unicodedata.normalize("NFC", s)


def read_lines(path):
    if not os.path.isfile(path):
        return []
    with open(path, encoding="utf-8-sig") as f:
        return [l.strip() for l in f if l.strip() and not l.strip().startswith("#")]


def read_card(path):
    card = {}
    for line in read_lines(path):
        if ":" in line:
            k, v = line.split(":", 1)
            card[k.strip().lower()] = v.strip()
    return card


def find_cards(root, depth=3):
    found = []
    def walk(rel, level):
        here = os.path.join(root, rel)
        try:
            names = sorted(os.listdir(here))
        except OSError:
            return
        if rel and "project.txt" in names:
            found.append(rel)
            return
        if level == depth:
            return
        for n in names:
            if n.startswith(".") or (level == 0 and nfc(n) in SKIP):
                continue
            if os.path.isdir(os.path.join(here, n)):
                walk(os.path.join(rel, n), level + 1)
    walk("", 0)
    return found


def main(root, out):
    web_dir = os.path.join(root, "3. website")
    rules = [r.casefold() for r in read_lines(os.path.join(web_dir, "private_rules.txt"))]
    order = read_lines(os.path.join(web_dir, "order.txt"))
    info = {"text": "", "contact": []}
    for line in read_lines(os.path.join(web_dir, "info.txt")):
        k, _, v = line.partition(":")
        k, v = k.strip().lower(), v.strip()
        if k == "text":
            info["text"] = v
        elif k == "contact" and "|" in v:
            label, url = (x.strip() for x in v.split("|", 1))
            info["contact"].append({"label": label, "url": url})

    projects, warnings, private = [], [], 0
    for rel in find_cards(root):
        rel_n = nfc(rel)
        if any(r in rel_n.casefold() for r in rules):
            private += 1
            continue
        card = read_card(os.path.join(root, rel, "project.txt"))
        p = {
            "id": card.get("id", ""),
            "title": card.get("title", ""),
            "credit": card.get("credit", ""),
            "year": card.get("year", ""),
            "type": card.get("type", ""),
            "web": card.get("web", "no").lower(),
            "caption": [c.strip() for c in card.get("caption", "").split(",") if c.strip()],
            "category": CATEGORY.get(rel_n.split(os.sep)[0], "other"),
            "dir": rel_n,
            "photos": [], "candidates": [], "ignored": [],
        }
        if not re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", p["id"]):
            warnings.append(f"{rel_n}: id is missing or not lowercase-with-hyphens")
        site = os.path.join(root, rel, "06_website")
        names = sorted(os.listdir(site)) if os.path.isdir(site) else []
        for n in names:
            n_n = nfc(n)
            path = os.path.join(site, n)
            if n.startswith(".") or not os.path.isfile(path) or n_n.endswith(".txt"):
                continue
            m = NAME.match(n_n)
            if m:
                st = os.stat(path)
                p["photos"].append({
                    "name": n_n, "nn": int(m.group(1)), "sub": m.group(2).lower(),
                    "grid": m.group(3) is not None,
                    "gn": int(m.group(3)) if m.group(3) else None,
                    "camera": m.group(4), "bytes": st.st_size,
                    "rel": os.path.join(rel_n, "06_website", n_n),
                })
            elif n_n.lower().endswith((".jpg", ".jpeg")):
                p["candidates"].append(n_n)
            else:
                p["ignored"].append(n_n)
        p["photos"].sort(key=lambda f: (f["nn"], f["sub"]))
        cams = [f["camera"] for f in p["photos"]]
        for c in sorted({c for c in cams if cams.count(c) > 1}):
            warnings.append(f"{p['id']}: {c} appears twice in 06_website")
        projects.append(p)

    ids = [p["id"] for p in projects]
    for i in sorted({i for i in ids if ids.count(i) > 1}):
        warnings.append(f"id {i} is used by more than one project.txt")
    scan = {
        "scanned": datetime.datetime.now().isoformat(timespec="seconds"),
        "order": order, "info": info, "projects": projects,
        "private_skipped": private, "warnings": warnings,
    }
    with open(out, "w", encoding="utf-8") as f:
        json.dump(scan, f, ensure_ascii=False, indent=1)
    web = [p for p in projects if p["web"] == "yes"]
    print(f"{len(projects)} projects ({len(web)} web: yes), "
          f"{sum(len(p['photos']) for p in web)} numbered photos, "
          f"{sum(len(p['candidates']) for p in projects)} candidates, "
          f"{private} private skipped, {len(warnings)} warnings")
    for w in warnings:
        print("warning:", w)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
