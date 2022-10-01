import Bag from "../Assets/Images/Achievements/Bag.png";
import Hit from "../Assets/Images/Achievements/Hit.png";
import Heart from "../Assets/Images/Achievements/Heart.png";
import Hat from "../Assets/Images/Achievements/Hat.png";

const achievements = [
  {
    title: "Проектов",
    text: {
      number: 23,
      symbol: "+",
    },
    image: Bag,
    isFull: true,
  },
  {
    title: "Заявок",
    text: {
      number: 150,
      symbol: "+",
    },
    image: Hit,
    isFull: true,
  },
  {
    title: "Довольные клиенты",
    text: {
      number: 100,
      symbol: "%",
    },
    image: Heart,
    isFull: true,
  },
  {
    title: "Квалификационных сотрудников",
    text: {
      number: 7,
      symbol: "+",
    },
    image: Hat,
    isFull: true,
  },
];

export default achievements;
