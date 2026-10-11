# gyu

건축·인테리어 사진 포트폴리오. Cargo에서 만들던 레이아웃(8열 사진 그리드, 왼쪽 위 gyu, 오른쪽 위 Index, Information)을 그대로 옮긴 정적 사이트이고 GitHub Pages로 배포돼요.

- 주소: https://peterpark1999.github.io/Personal/

## 파일

| 파일 | 내용 |
|---|---|
| `photos.js` | 프로젝트 목록, 그리드에 나오는 사진 순서와 캡션, Information 글. `tools/build_site.py`가 만들어요 |
| `tools/` | Drive 폴더 읽기(`scan_drive.py`), 사진 줄이기(`export_img.py`), `photos.js` 만들기(`build_site.py`), 사이트 사진 목록(`ledger.json`) |
| `index.html` | 화면과 동작 (여백·간격은 맨 위 `:root`에서 조정) |
| `img/` | 사진. `이름.jpg`는 긴 변 2400px(크게 보기용), `이름-s.jpg`는 긴 변 900px(그리드용) |
| `fonts/` | Hanken Grotesk (Cargo 글꼴과 가장 비슷한 무료 글꼴, OFL 라이선스) |

## 사진 추가하기

`photos.js`는 Drive 사진 폴더를 읽어 자동으로 만들어져요. 직접 고치지 않아요.

1. 프로젝트 폴더의 `06_website`에 최종본을 복사해 넣고 이름 앞에 번호를 붙여요 (`01_g__DSC0101.jpg`: 슬라이드 1번째, g는 첫 화면 그리드에도).
2. 새 프로젝트면 `project.txt`에 `web: yes`로 적어요.
3. Claude에게 "사이트 갱신해줘"라고 하면 `tools/`의 스크립트로 사진을 줄이고 `photos.js`를 다시 만든 뒤, 미리 보여 드리고 OK를 받으면 올려요.

자세한 순서는 `CLAUDE.md`에 있어요.

내 컴퓨터에서 미리 보려면 이 폴더에서 `python3 -m http.server`를 실행하고 http://localhost:8000 을 열면 돼요.
