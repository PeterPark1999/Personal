# Updating the site

`photos.js` is generated. Never edit it by hand; change the Drive photo folder and rebuild.

Source of truth on Drive (the owner's photo folder, connected to Claude on their Mac):
- each project folder has `project.txt` (id, title, credit, year, web: yes/no, caption) and `06_website/`
- `06_website/` file names: `NN[a][_g|_gN]_<camera name>.jpg`; NN = slideshow order, g = also on the home grid,
  gN = grid order, no number = candidate (ignored)
- `3. website/order.txt` (project order), `info.txt` (Information text and contact lines),
  `private_rules.txt` (folders that are never read)

Steps when the owner says "사이트 갱신해줘":
1. On the Mac: `python3 "<photo folder>/3. website/_claude/scan_drive.py" "<photo folder>" "<photo folder>/3. website/_claude/scan.json"`
   (copy `tools/scan_drive.py` there first if it changed), then stage scan.json into the container.
2. `python3 tools/build_site.py <scan.json>` prints the plan: notes, photos to export, unused img files.
3. Stage each listed 06_website file, then `python3 tools/export_img.py <scan.json> <staged photo folder root>`.
   This writes img/<name>.jpg (2400px) and -s.jpg (900px), sRGB, no metadata, and records it in `tools/ledger.json`.
4. `python3 tools/build_site.py <scan.json> --write --csv <out.csv>`; copy the CSV to Drive `3. website/site_photos.csv`.
5. Show the owner a preview of what changed and wait for their OK before pushing to main (pushing publishes).

Rules:
- Only `web: yes` projects are published. Never publish anything from private folders, invoices,
  or photos with identifiable faces, minors or plates without the owner's explicit OK.
- img names never change once published (ledger.json). The old Yaksu Bar files keep their short names.
- Never delete or rename anything on Drive; only the owner deletes.
- Keep personal names, emails and Drive paths out of this repo.
