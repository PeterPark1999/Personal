// 프로젝트 데이터. 사진은 img/ 아래, 긴 변 2400px JPG.
// "—" 표시는 아직 정보가 없는 칸. 채우면 바로 반영된다.
window.PROJECTS = [
  {
    slug: "yaksu-bar",
    no: "001",
    title: ["Yaksu", "Bar."],
    titleKo: "약수 바",
    blurb: "A long walnut counter under paper lanterns, lit low and warm. Shot at night, after the last guest.",
    data: [
      ["Design", "—"],
      ["Location", "Yaksu, Seoul"],
      ["Year", "2026"],
    ],
    note: "Drag the photo, or use ← → to walk the room. Click a thumbnail to jump.",
    credits: "Photography: gyu. Design: —. Sony A7CR, 3-frame brackets.",
    frames: [
      { src: "img/dsc8581.jpg", w: 2400, h: 1600, caption: "Bar counter, from the entrance" },
      { src: "img/dsc9142.jpg", w: 2400, h: 1600, caption: "Counter and lanterns" },
      { src: "img/dsc9227.jpg", w: 2400, h: 1600, caption: "Stools along the counter" },
      { src: "img/dsc0176.jpg", w: 2400, h: 1600, caption: "Back bar, walnut panels" },
      { src: "img/dsc8943.jpg", w: 1600, h: 2400, caption: "Lantern over the back bar" },
      { src: "img/dsc0056.jpg", w: 1600, h: 2400, caption: "Paper lanterns" },
      { src: "img/dsc8994.jpg", w: 1600, h: 2400, caption: "Lit shelving" },
      { src: "img/dsc8928.jpg", w: 1600, h: 2400, caption: "Bartenders at work" },
      { src: "img/dsc9862.jpg", w: 1600, h: 2400, caption: "Bottle wall" },
      { src: "img/dsc0144.jpg", w: 1600, h: 2400, caption: "Private room" },
    ],
  },
  // 아래는 현재 Cargo 사이트의 프로젝트. 사진을 img/ 에 넣고 frames 를 채우면 바로 열린다.
  { slug: "sourcetel", no: "002", title: ["Sourcetel."], data: [["Design", "atelier ah"], ["Type", "Commercial"], ["Year", "—"]], frames: [] },
  { slug: "lighting-project", no: "003", title: ["Lighting", "Project."], data: [["Design", "atelier ah"], ["Type", "Commercial"], ["Year", "—"]], frames: [] },
  { slug: "the-first-penguin", no: "004", title: ["The First", "Penguin."], data: [["Place", "Parkbongdam"], ["Type", "Personal"], ["Year", "—"]], frames: [] },
  { slug: "west-bund-museum", no: "005", title: ["West Bund", "Museum."], data: [["Architect", "David Chipperfield"], ["Type", "Personal"], ["Year", "—"]], frames: [] },
  { slug: "gangnam-housing", no: "006", title: ["Gangnam", "Housing."], data: [["Architect", "Riken Yamamoto"], ["Type", "Personal"], ["Year", "—"]], frames: [] },
];
