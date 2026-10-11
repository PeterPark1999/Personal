// 사이트에 나오는 모든 내용. Drive 사진 폴더를 읽어 tools/build_site.py가 만들어요.
// 고칠 때는 이 파일 대신 각 프로젝트의 project.txt와 06_website, order.txt·info.txt를 고쳐요.

// 프로젝트 목록 (Index 화면 순서)
// title: 프로젝트 이름, credit: 설계자 (예: "atelier ah", 비워두면 생략)
// slides: 사진을 눌렀을 때 넘겨 보는 순서 (그리드에 없는 사진도 넣을 수 있어요). 없으면 그리드 순서
window.PROJECTS = [
  { id: "cheongsu", title: "Cheongsu-ri", credit: "", type: "Commercial Work/Photography", year: "",
    slides: [
      "cheongsu-dsc0105",
      "cheongsu-dsc2544",
      "cheongsu-dsc4427",
      "cheongsu-dsc2720-edit",
      "cheongsu-dsc3296",
      "cheongsu-dsc1298",
      "cheongsu-dsc4772"
    ] },
  { id: "konkuk", title: "Konkuk University Middle School", credit: "", type: "Commercial Work/Photography", year: "",
    slides: [
      "konkuk-dsc4581",
      "konkuk-dsc4419",
      "konkuk-dsc4003",
      "konkuk-dsc5009"
    ] },
  { id: "bathhouse", title: "Bathhouse Anatomy", credit: "", type: "Commercial Work/Photography", year: "",
    slides: [
      "bathhouse-dsc7981",
      "bathhouse-dsc5880",
      "bathhouse-dsc6034",
      "bathhouse-dsc6234",
      "bathhouse-dsc6502",
      "bathhouse-dsc7214"
    ] },
  { id: "competition-model", title: "Competition model", credit: "", type: "Commercial Work/Photography", year: "",
    slides: [
      "competition-model-dsc7673",
      "competition-model-dsc8197",
      "competition-model-dsc7970",
      "competition-model-dsc8071"
    ] },
  { id: "texcorps-doc", title: "TeX-Corps Documentary", credit: "", type: "Personal work/Photography", year: "" },
  { id: "italian-garden", title: "Italian Garden", credit: "", type: "Commercial Work/Photography", year: "",
    slides: [
      "italian-garden-dji-20260613062242-0178-d",
      "italian-garden-dji-20260612184059-0127-d",
      "italian-garden-dji-20260613062655-0200-d",
      "italian-garden-dsc2500",
      "italian-garden-dsc2195",
      "italian-garden-dsc2371"
    ] },
  { id: "taean", title: "Taean Feature Garden", credit: "", type: "Commercial Work/Photography", year: "",
    slides: [
      "taean-dsc8952",
      "taean-dsc8640",
      "taean-dsc8505",
      "taean-dsc9583",
      "taean-dsc9788"
    ] },
  { id: "film", title: "Film", credit: "", type: "Personal work/Photography", year: "",
    slides: [
      "film-dsc7554-2",
      "film-dsc7539-2",
      "film-dsc7572"
    ] },
  { id: "hachiro", title: "Hachiro", credit: "", type: "Commercial Work/Photography", year: "",
    slides: [
      "hachiro-dsc0210",
      "hachiro-dsc0048",
      "hachiro-dsc0411",
      "hachiro-dsc1566",
      "hachiro-dsc0583",
      "hachiro-dsc1415",
      "hachiro-dsc0451"
    ] },
  { id: "urban-villa", title: "Urban Villa model", credit: "", type: "Commercial Work/Photography", year: "",
    slides: [
      "urban-villa-dsc09967",
      "urban-villa-dsc00010",
      "urban-villa-dsc00687",
      "urban-villa-dsc00872",
      "urban-villa-dsc00452"
    ] },
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
