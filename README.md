# gyu — Photographs

건축·인테리어 사진 포트폴리오. 빌드 없는 정적 사이트이고 GitHub Pages로 배포돼요.

- 주소: https://peterpark1999.github.io/Personal/
- 디자인: 표본 카드(specimen sheet) 형식. 프로젝트 하나가 한 화면, 사진 한 장이 주인공이에요.

## 파일

| 파일 | 내용 |
|---|---|
| `index.html` | 화면과 동작 전부 |
| `projects.js` | 프로젝트 데이터(제목, 크레딧, 사진 목록) |
| `tokens.css` | 색·글꼴·크기 |
| `img/` | 사진. 긴 변 2400px JPG, 품질 82 |

## 프로젝트 추가하기

1. 사진을 긴 변 2400px JPG로 내보내서 `img/`에 넣어요.
2. `projects.js`에서 해당 프로젝트의 `frames`에 사진을 추가해요.
   `{ src: "img/파일명.jpg", w: 2400, h: 1600, caption: "캡션" }`
3. `"—"`로 된 칸(설계, 연도)을 채워요.
4. 커밋하고 `main`에 푸시하면 1~2분 뒤 사이트에 반영돼요.

내 컴퓨터에서 미리 보려면 `index.html`을 브라우저로 열면 돼요.
