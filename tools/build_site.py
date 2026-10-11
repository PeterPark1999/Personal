#!/usr/bin/env python3
"""Turn scan.json (from scan_drive.py) into photos.js.

    python3 tools/build_site.py <scan.json>            check only: print the plan
    python3 tools/build_site.py <scan.json> --write    also write photos.js (and --csv <file>)

Rules (the same ones the 06_website guide on Drive gives):
- Projects come in order.txt order; web: yes projects missing from it go last.
- A project's slideshow is every numbered photo, by number (03a goes after 03).
- Photos with g are also on the home grid, in slideshow order; g1, g2... come first, in that order.
- caption: lists camera names that get the grey caption; empty means the first grid photo.
- img names come from tools/ledger.json so they never change once published.
  A photo not in the ledger, or whose file size changed, needs export_img.py first.
"""
import csv, json, os, re, sys
from PIL import Image

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LEDGER = os.path.join(REPO, "tools", "ledger.json")
TYPES = {"commercial": "Commercial Work/Photography", "personal": "Personal work/Photography"}


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def js(s):
    return json.dumps(s, ensure_ascii=False)


def plan(scan, ledger):
    web = [p for p in scan["projects"] if p["web"] == "yes"]
    by_id = {p["id"]: p for p in web}
    order = [i for i in scan["order"] if i in by_id]
    missing = [i for i in scan["order"] if i not in by_id]
    rest = sorted(i for i in by_id if i not in order)
    projects, grid, exports, notes = [], [], [], []
    if missing:
        notes.append("order.txt names projects that are not web: yes: " + ", ".join(missing))
    if rest:
        notes.append("web: yes projects not in order.txt, placed last: " + ", ".join(rest))
    for pid in order + rest:
        p = by_id[pid]
        photos = []
        for f in p["photos"]:
            key = f"{pid}/{f['camera']}"
            known = ledger.get(key)
            img = known["img"] if known else slug(f"{pid}-{f['camera']}")
            if not known or known["bytes"] != f["bytes"] or not os.path.isfile(os.path.join(REPO, "img", img + "-s.jpg")):
                exports.append({"key": key, "img": img, "bytes": f["bytes"], "rel": f["rel"],
                                "why": "new" if not known else "changed"})
            photos.append(dict(f, img=img))
        on_grid = [f for f in photos if f["grid"]]
        on_grid.sort(key=lambda f: (f["gn"] is None, f["gn"] or 0))
        caps = set(p["caption"]) or ({on_grid[0]["camera"]} if on_grid else set())
        for c in caps - {f["camera"] for f in photos}:
            notes.append(f"{pid}: caption names {c}, which is not a numbered photo")
        for f in on_grid:
            grid.append({"file": f["img"], "project": pid, "caption": f["camera"] in caps, "camera": f["camera"]})
        slides = [f["img"] for f in photos]
        projects.append({
            "id": pid, "title": p["title"], "credit": p["credit"], "year": p["year"],
            "type": p["type"] or TYPES.get(p["category"], TYPES["personal"]),
            "slides": slides if slides != [f["img"] for f in on_grid] else None,
            "photos": photos, "grid": on_grid, "caps": caps,
        })
    return projects, grid, exports, notes


def size_of(img):
    with Image.open(os.path.join(REPO, "img", img + "-s.jpg")) as im:
        return im.size


def render(projects, grid, info):
    out = ["// 사이트에 나오는 모든 내용. Drive 사진 폴더를 읽어 tools/build_site.py가 만들어요.",
           "// 고칠 때는 이 파일 대신 각 프로젝트의 project.txt와 06_website, order.txt·info.txt를 고쳐요.",
           "",
           "// 프로젝트 목록 (Index 화면 순서)",
           "// title: 프로젝트 이름, credit: 설계자 (예: \"atelier ah\", 비워두면 생략)",
           "// slides: 사진을 눌렀을 때 넘겨 보는 순서 (그리드에 없는 사진도 넣을 수 있어요). 없으면 그리드 순서",
           "window.PROJECTS = ["]
    rows = []
    for p in projects:
        head = (f"  {{ id: {js(p['id'])}, title: {js(p['title'])}, credit: {js(p['credit'])}, "
                f"type: {js(p['type'])}, year: {js(p['year'])}")
        if p["slides"]:
            body = ",\n".join(f"      {js(s)}" for s in p["slides"])
            rows.append(f"{head},\n    slides: [\n{body}\n    ] }}")
        else:
            rows.append(f"{head} }}")
    out += [",\n".join(rows), "];", "",
            "// 첫 화면 그리드에 나오는 사진, 왼쪽 위부터 순서대로 (한 줄에 8장)",
            "// file: img/ 안의 파일 이름 (file.jpg 큰 사진, file-s.jpg 작은 사진)",
            "// w, h: 작은 사진의 가로·세로 픽셀 (비율만 맞으면 돼요)",
            "// caption: true면 사진 아래에 회색 캡션이 붙어요",
            "window.PHOTOS = ["]
    rows = []
    for g in grid:
        w, h = size_of(g["file"])
        cap = ", caption: true" if g["caption"] else ""
        rows.append(f"  {{ file: {js(g['file'])}, project: {js(g['project'])}, w: {w}, h: {h}{cap} }}")
    out += [",\n".join(rows), "];", "", "// Information 화면", "window.INFO = {",
            f"  text: {js(info['text'])},"]
    if info["contact"]:
        body = ",\n".join(f"    {{ label: {js(c['label'])}, url: {js(c['url'])} }}" for c in info["contact"])
        out.append(f"  contact: [\n{body}\n  ]")
    else:
        out.append("  contact: []   // 예: [{ label: \"Instagram\", url: \"https://instagram.com/...\" }, "
                   "{ label: \"Email\", url: \"mailto:...\" }]")
    out.append("};")
    return "\n".join(out) + "\n"


def write_csv(path, projects):
    with open(path, "w", newline="", encoding="utf-8-sig") as f:
        w = csv.writer(f)
        w.writerow(["프로젝트", "분류", "슬라이드 순서", "그리드 순서", "캡션", "사이트 파일", "원본 (2. photo 기준)"])
        n = 0
        for p in projects:
            grid_pos = {}
            for g in p["grid"]:
                n += 1
                grid_pos[g["camera"]] = n
            for i, f in enumerate(p["photos"], 1):
                w.writerow([p["title"], p["type"], i, grid_pos.get(f["camera"], "(슬라이드만)"),
                            "O" if f["camera"] in p["caps"] and f["camera"] in grid_pos else "",
                            f"img/{f['img']}.jpg", f["rel"]])


def main():
    args = sys.argv[1:]
    scan = json.load(open(args[0], encoding="utf-8"))
    ledger = json.load(open(LEDGER, encoding="utf-8")) if os.path.exists(LEDGER) else {}
    projects, grid, exports, notes = plan(scan, ledger)
    print(f"{len(projects)} projects, {sum(len(p['photos']) for p in projects)} photos, {len(grid)} on the grid")
    for w in scan.get("warnings", []) + notes:
        print("note:", w)
    for e in exports:
        print(f"export ({e['why']}): {e['key']} -> img/{e['img']}.jpg")
    used = {f["img"] for p in projects for f in p["photos"]}
    on_disk = {n[:-4] for n in os.listdir(os.path.join(REPO, "img")) if n.endswith(".jpg") and not n.endswith("-s.jpg")}
    for n in sorted(on_disk - used):
        print(f"unused: img/{n}.jpg")
    if "--write" in args:
        if exports:
            sys.exit("not written: export the photos above first (tools/export_img.py)")
        with open(os.path.join(REPO, "photos.js"), "w", encoding="utf-8") as f:
            f.write(render(projects, grid, scan["info"]))
        print("wrote photos.js")
        if "--csv" in args:
            write_csv(args[args.index("--csv") + 1], projects)


if __name__ == "__main__":
    main()
