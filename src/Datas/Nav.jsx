const nav = [
  {
    id: 1,
    title: "Главная",
    name: "hero",
    offset: -155,
  },
  {
    id: 2,
    title: "SMM & Target",
    name: "target",
    offset: 0,
  },
  {
    id: 3,
    title: "Graphic Design",
    name: "graphic",
    offset: 0,
  },
  {
    id: 4,
    title: "Motion Design",
    name: "motion",
    offset: 0,
  },
  {
    id: 5,
    title: "Фото и Видео",
    name: "photo",
    offset: 0,
  },
];

nav.sort((a, b) => a.id - b.id);

export default nav;
