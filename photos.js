// 사이트에 나오는 모든 내용. 이 파일만 고치면 돼요.

// 프로젝트 목록 (Index 화면 순서)
window.PROJECTS = [
  {
    id: "yaksu-bar",
    title: "Yaksu Bar",            // 프로젝트 이름
    credit: "",                    // 설계자 (예: "atelier ah"). 비워두면 생략
    type: "Commercial Work/Photography",
    year: ""
  }
];

// 첫 화면 그리드에 나오는 사진, 왼쪽 위부터 순서대로 (한 줄에 8장)
// w, h: 사진 비율 (가로 사진 3/2, 세로 사진 2/3이면 아무 숫자나 그 비율로)
// caption: true면 사진 아래에 회색 캡션이 붙어요
window.PHOTOS = [
  { file: "dsc0144", project: "yaksu-bar", w: 2, h: 3, caption: true },
  { file: "dsc9142", project: "yaksu-bar", w: 3, h: 2 },
  { file: "dsc0176", project: "yaksu-bar", w: 3, h: 2 },
  { file: "dsc8928", project: "yaksu-bar", w: 2, h: 3, caption: true },
  { file: "dsc8943", project: "yaksu-bar", w: 2, h: 3 },
  { file: "dsc8994", project: "yaksu-bar", w: 2, h: 3 },
  { file: "dsc8581", project: "yaksu-bar", w: 3, h: 2 },
  { file: "dsc0056", project: "yaksu-bar", w: 2, h: 3, caption: true },
  { file: "dsc9227", project: "yaksu-bar", w: 3, h: 2, caption: true },
  { file: "dsc9862", project: "yaksu-bar", w: 2, h: 3 }
];

// Information 화면
window.INFO = {
  text: "gyu — photographs of architecture and interiors.",
  contact: []   // 예: [{ label: "Instagram", url: "https://instagram.com/..." }, { label: "Email", url: "mailto:..." }]
};
