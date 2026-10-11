#!/usr/bin/env python3
"""Make the two site sizes of a photo and record it in tools/ledger.json.

    python3 tools/export_img.py <scan.json> <staged 06_website folder>

For every photo build_site.py lists under "export", reads the staged copy of its
06_website file and writes img/<name>.jpg (long side 2400px, quality 82) and
img/<name>-s.jpg (900px, quality 80). Converts to sRGB and drops all metadata
(camera, GPS from the drone) by saving only the pixels.
"""
import io, json, os, sys
from PIL import Image, ImageCms, ImageOps

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from build_site import LEDGER, REPO, plan

SRGB = ImageCms.createProfile("sRGB")


def export(src, name):
    im = Image.open(src)
    icc = im.info.get("icc_profile")
    im = ImageOps.exif_transpose(im)
    if icc:
        prof = ImageCms.ImageCmsProfile(io.BytesIO(icc))
        if "sRGB" not in ImageCms.getProfileDescription(prof):
            im = ImageCms.profileToProfile(im, prof, SRGB, outputMode="RGB")
    im = im.convert("RGB")
    for size, suffix, q in ((2400, "", 82), (900, "-s", 80)):
        t = im.copy()
        t.thumbnail((size, size), Image.LANCZOS)
        t.save(os.path.join(REPO, "img", f"{name}{suffix}.jpg"), quality=q, optimize=True, progressive=True)


def main(scan_path, staged_root):
    scan = json.load(open(scan_path, encoding="utf-8"))
    ledger = json.load(open(LEDGER, encoding="utf-8")) if os.path.exists(LEDGER) else {}
    _, _, exports, _ = plan(scan, ledger)
    for e in exports:
        src = os.path.join(staged_root, e["rel"])
        if not os.path.isfile(src) or os.path.getsize(src) != e["bytes"]:
            print(f"skip {e['key']}: staged copy missing or incomplete ({src})")
            continue
        export(src, e["img"])
        ledger[e["key"]] = {"img": e["img"], "bytes": e["bytes"]}
        print(f"exported {e['key']} -> img/{e['img']}.jpg")
    with open(LEDGER, "w", encoding="utf-8") as f:
        json.dump(ledger, f, ensure_ascii=False, indent=1, sort_keys=True)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
