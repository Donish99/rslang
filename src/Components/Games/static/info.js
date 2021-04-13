import savvanah from "./savvanah.jpg";
import audiocall from "./audiocall.jpg";
import sprint from "./sprint.jpg";
import our from "./our.jpg";

const gameDescription = [
  {
    id: 1,
    img: savvanah,
    name: "Саванна",
    description:
      "Мини-игра «Саванна» - это симулятор перевода пассивного выученного словаря в активную стадию.",
    instructions:
      "После запуска игры вы увидите падающее слово на английском (или русском, если режим игры RU-> EN) и четыре варианта перевода",
  },
  {
    id: 2,
    img: audiocall,
    name: "Аудиовызов",
    description:
      "Мини-игра «Аудиозвонок» - это тренировка, развивающая речевые и переводческие навыки.",
    instructions: "Вы слышите слово и видите 4 вариантов перевода.",
  },
  {
    id: 3,
    img: sprint,
    name: "Спринт",
    description:
      "Мини-игра «Спринт» - это симулятор повторения выученных слов из вашего словаря.",
    instructions:
      "После запуска игры вы увидите слово и перевод. Вам нужно выбрать, правильно это или неправильно.",
  },
  {
    id: 4,
    img: our,
    name: "Своя Игра",
    description: "Введите перевод, который считаете верным.",
    instructions: "После ввода слова нажмите «Проверить",
  },
];

export default gameDescription;
