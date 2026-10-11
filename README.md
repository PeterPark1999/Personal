# gyu

건축·인테리어 사진 포트폴리오. Cargo에서 만들던 레이아웃(8열 사진 그리드, 왼쪽 위 gyu, 오른쪽 위 Index, Information)을 그대로 옮긴 정적 사이트이고 GitHub Pages로 배포돼요.

- 주소: https://peterpark1999.github.io/Personal/

## 파일

| 파일 | 내용 |
|---|---|
| `photos.js` | 프로젝트 목록, 그리드에 나오는 사진 순서와 캡션, Information 글. 보통은 이 파일만 고치면 돼요 |
| `index.html` | 화면과 동작 (여백·간격은 맨 위 `:root`에서 조정) |
| `img/` | 사진. `이름.jpg`는 긴 변 2400px(크게 보기용), `이름-s.jpg`는 긴 변 900px(그리드용) |
| `fonts/` | Hanken Grotesk (Cargo 글꼴과 가장 비슷한 무료 글꼴, OFL 라이선스) |

## 사진 추가하기

1. 사진을 `img/`에 두 크기로 넣어요: `파일명.jpg`(긴 변 2400px), `파일명-s.jpg`(긴 변 900px).
2. 새 프로젝트면 `photos.js`의 `PROJECTS`에 한 줄 추가해요.
3. `PHOTOS`에 원하는 순서 위치에 한 줄 넣어요.
   `{ file: "파일명", project: "프로젝트-id", w: 3, h: 2, caption: true }`
4. 커밋하고 `main`에 푸시하면 1~2분 뒤 사이트에 반영돼요.

내 컴퓨터에서 미리 보려면 이 폴더에서 `python3 -m http.server`를 실행하고 http://localhost:8000 을 열면 돼요.
