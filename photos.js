// 사이트에 나오는 모든 내용. 이 파일만 고치면 돼요.

// 프로젝트 목록 (Index 화면 순서)
// title: 프로젝트 이름, credit: 설계자 (예: "atelier ah", 비워두면 생략)
window.PROJECTS = [
  { id: "cheongsu", title: "Cheongsu-ri", credit: "", type: "Commercial Work/Photography", year: "" },
  { id: "konkuk", title: "Konkuk University Middle School", credit: "", type: "Commercial Work/Photography", year: "" },
  { id: "bathhouse", title: "Bathhouse Anatomy", credit: "", type: "Commercial Work/Photography", year: "" },
  { id: "competition-model", title: "Competition model", credit: "", type: "Commercial Work/Photography", year: "" },
  { id: "texcorps-doc", title: "TeX-Corps Documentary", credit: "", type: "Personal work/Photography", year: "" },
  { id: "italian-garden", title: "Italian Garden", credit: "", type: "Commercial Work/Photography", year: "" },
  { id: "taean", title: "Taean Feature Garden", credit: "", type: "Commercial Work/Photography", year: "" },
  { id: "film", title: "Film", credit: "", type: "Personal work/Photography", year: "" },
  { id: "hachiro", title: "Hachiro", credit: "", type: "Commercial Work/Photography", year: "" },
  { id: "urban-villa", title: "Urban Villa model", credit: "", type: "Commercial Work/Photography", year: "" },
  { id: "yaksu-bar", title: "Yaksu Bar", credit: "", type: "Commercial Work/Photography", year: "" }
];

// 첫 화면 그리드에 나오는 사진, 왼쪽 위부터 순서대로 (한 줄에 8장)
// file: img/ 안의 파일 이름 (file.jpg 큰 사진, file-s.jpg 작은 사진)
// w, h: 작은 사진의 가로·세로 픽셀 (비율만 맞으면 돼요)
// caption: true면 사진 아래에 회색 캡션이 붙어요
window.PHOTOS = [
  { file: "cheongsu-dsc2720-edit", project: "cheongsu", w: 900, h: 600, caption: true },
  { file: "cheongsu-dsc4427", project: "cheongsu", w: 600, h: 900 },
  { file: "cheongsu-dsc0105", project: "cheongsu", w: 900, h: 600 },
  { file: "cheongsu-dsc3296", project: "cheongsu", w: 600, h: 900 },
  { file: "konkuk-dsc4003", project: "konkuk", w: 900, h: 600, caption: true },
  { file: "konkuk-dsc5009", project: "konkuk", w: 600, h: 900 },
  { file: "konkuk-dsc4581", project: "konkuk", w: 900, h: 600 },
  { file: "bathhouse-dsc5880", project: "bathhouse", w: 600, h: 900, caption: true },
  { file: "bathhouse-dsc6034", project: "bathhouse", w: 900, h: 600 },
  { file: "bathhouse-dsc7214", project: "bathhouse", w: 600, h: 900 },
  { file: "bathhouse-dsc7981", project: "bathhouse", w: 900, h: 600 },
  { file: "competition-model-dsc7970", project: "competition-model", w: 900, h: 600, caption: true },
  { file: "competition-model-dsc8071", project: "competition-model", w: 900, h: 600 },
  { file: "texcorps-doc-us-documentary-still-cut00086444", project: "texcorps-doc", w: 900, h: 506, caption: true },
  { file: "italian-garden-dji-20260613062242-0178-d", project: "italian-garden", w: 900, h: 506, caption: true },
  { file: "italian-garden-dji-20260613062655-0200-d", project: "italian-garden", w: 900, h: 506 },
  { file: "italian-garden-dsc2371", project: "italian-garden", w: 600, h: 900 },
  { file: "italian-garden-dsc2195", project: "italian-garden", w: 900, h: 600 },
  { file: "taean-dsc8640", project: "taean", w: 900, h: 600, caption: true },
  { file: "taean-dsc9583", project: "taean", w: 600, h: 900 },
  { file: "taean-dsc8505", project: "taean", w: 900, h: 600 },
  { file: "film-dsc7539-2", project: "film", w: 506, h: 900, caption: true },
  { file: "film-dsc7572", project: "film", w: 506, h: 900 },
  { file: "hachiro-dsc1566", project: "hachiro", w: 600, h: 900, caption: true },
  { file: "hachiro-dsc0583", project: "hachiro", w: 900, h: 600 },
  { file: "hachiro-dsc0411", project: "hachiro", w: 600, h: 900 },
  { file: "hachiro-dsc0048", project: "hachiro", w: 900, h: 600 },
  { file: "urban-villa-dsc09967", project: "urban-villa", w: 900, h: 600, caption: true },
  { file: "urban-villa-dsc00687", project: "urban-villa", w: 600, h: 900 },
  { file: "dsc9142", project: "yaksu-bar", w: 900, h: 600, caption: true },
  { file: "dsc0056", project: "yaksu-bar", w: 600, h: 900 },
  { file: "dsc9227", project: "yaksu-bar", w: 900, h: 600 },
  { file: "dsc0144", project: "yaksu-bar", w: 600, h: 900, caption: true },
  { file: "dsc8581", project: "yaksu-bar", w: 900, h: 600 },
  { file: "dsc8928", project: "yaksu-bar", w: 600, h: 900 },
  { file: "dsc8943", project: "yaksu-bar", w: 600, h: 900 },
  { file: "dsc0176", project: "yaksu-bar", w: 900, h: 600, caption: true },
  { file: "dsc8994", project: "yaksu-bar", w: 600, h: 900 },
  { file: "dsc9862", project: "yaksu-bar", w: 600, h: 900 }
];

// Information 화면
window.INFO = {
  text: "gyu — photographs of architecture and interiors.",
  contact: []   // 예: [{ label: "Instagram", url: "https://instagram.com/..." }, { label: "Email", url: "mailto:..." }]
};
