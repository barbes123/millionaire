import { QuestionData } from "./types";

// NOTE: This is the structure requested. 
// In a real scenario, you might replace this with a file upload or fetch.
export const QUESTIONS_RU: QuestionData[] = [
  {
    id: 1,
    topic: "xmas_movies",
    topicName: "Новогодние фильмы",
    question: "In the movie 'Home Alone', where are the McAllisters going on vacation when they leave Kevin behind?",
    options: {
      A: "Лондон",
      B: "Paris",
      C: "Rome",
      D: "Florida"
    },
    right_answer: "B",
    image: "https://picsum.photos/id/11/600/300",
    extra: "They were flying to Paris to celebrate Christmas with their family.",
    sound: "", 
    correct_sound: "",
    wrong_sound: ""
  },
  {
    id: 2,
    topic: "xmas_movies",
    topicName: "Christmas Movies",
    question: "Which actor played the Grinch in the 2000 live-action movie?",
    options: {
      A: "Jim Carrey",
      B: "Mike Myers",
      C: "Adam Sandler",
      D: "Will Ferrell"
    },
    right_answer: "A",
    image: "",
    extra: "Jim Carrey spent hours in makeup every day to become the Grinch.",
  },  
  {
    id: 10,
    topic: "romania",
    topicName: "Румыния",
    question: "Что означает желтый цвет на флаге Румынии?",
    options: {
      A: "Солнце",
      B: "Зерно",
      C: "Золото",
      D: "Мамалыга"
    },
    right_answer: "B",
    extra: "",
    sound: "/music/q1_15.mp3",
    image: "/images/rom_flag.webp",
  },
  {
    id: 11,
    topic: "romania",
    topicName: "Румыния",
    question: "Как назывется румынский футбольный клуб? ",
    options: {
      A: "Газ Метан ",
      B: "Газ Пропан",
      C: "Газ  Бутан",
      D: "Газ Этан"
    },
    right_answer: "A",
    sound: "/music/q1_15.mp3",
    image_extra: "/images/metan.png"
  },
  {
    id: 12,
    topic: "romania",
    topicName: "Румыния",
    question: "Какой традиционный румынский танец исполняется в круге? ",
    options: {
      A: "Тарантелла",
      B: "Брашовянка",
      C: "Хора",
      D: "Ча-ча-ча"
    },
    right_answer: "C",
    sound: "/music/q1_15.mp3"
  },
  {
    id: 13,
    topic: "romania",
    topicName: "Румыния",
    question: "Какой румынский музыкант стал известен благодаря панфлейте? ",
    options: {
      A: "Джордж Энеску",
      B: "Андре Рье",
      C: "Георге Замфир",
      D: "Владимир Косма"
    },
    right_answer: "C",
    sound: "/music/q1_15.mp3",
    image_extra:"/images/panflute.png"
  },
  {
    id: 14,
    topic: "romania",
    topicName: "Румыния",
    question: "Кто из румынских правителей основал княжество Валахия? ",
    options: {
      A: "Басараб I",
      B: "Штефан чел Маре",
      C: "Влад Цепеш",
      D: "Мирча Старый"
    },
    right_answer: "A",
    sound: "/music/q1_15.mp3"
  },
  {
    id: 15,
    topic: "romania",
    topicName: "Румыния",
    question: "Кто автор знаменитой картины 'Девочка с красной косынкой'? ",
    options: {
      A: "Николае Григореску",
      B: "Константин Лекка",
      C: "Штефан Лучиан",
      D: "Николае Тонитца"
    },
    right_answer: "A",
    sound: "/music/q1_15.mp3",
    image:"/images/red_girl.png"
  },
  {
    id: 20,
    topic: "russia",
    topicName: "Россия",
    question: "Как называется русский город, который считается колыбелью российского флота?",
    options: {
      A: "Санкт–Петербург",
      B: "Астрахань",
      C: "Мурманск",
      D: "Воронеж"
    },
    right_answer: "D",
    sound: "/music/q6_10.mp3"
  },
  {
    id: 21,
    topic: "russia",
    topicName: "Россия",
    question: "В России есть не только самое большое озеро в мире, но и болото. Как оно называется?",
    options: {
      A: "Печоро-Илычское болото",
      B: "Васюганские болота",
      C: "Вологодское болото",
      D: "Западно-Сибирское болото"
    },
    right_answer: "B",
    sound: "/music/q6_10.mp3"
  },
  {
    id: 22,
    topic: "russia",
    topicName: "Россия",
    question: "Какую знаменитую игру изобрели в России?",
    options: {
      A: "Тетрис",
      B: "Pac-Man",
      C: "Super-Mario",
      D: "STALKER"
    },
    right_answer: "A",
    sound: "/music/q6_10.mp3"
  },
  {
    id: 23,
    topic: "russia",
    topicName: "Россия",
    question: "Какой из этих объектов сопоставим с площадью территории России?",
    options: {
      A: "Луна",
      B: "Плутон",
      C: "Тихий Океан",
      D: "Звезда Смерти из Звездных Войн"
    },
    right_answer: "B",
    sound: "/music/q6_10.mp3"
  },
  {
    id: 24,
    topic: "russia",
    topicName: "Россия",
    question: "Cколько морей омывают берега России?",
    options: {
      A: "5",
      B: "10",
      C: "13",
      D: "20"
    },
    right_answer: "C",
    sound: "/music/q6_10.mp3",
    extra: "Берега России омывают 13 морей: Моря Атлантического океана: Балтийское, Чёрное, Азовское. Моря Северного Ледовитого океана: Баренцево, Белое, Карское, море Лаптевых, Восточно-Сибирское, Чукотское. Моря Тихого океана: Берингово, Охотское, Японское. Замкнутое море (озеро): Каспийское"
  },
  {
    id: 25,
    topic: "russia",
    topicName: "Россия",
    question: "Какой из этих городов считается самым древнем в России?",
    options: {
      A: "Москва",
      B: "Великий Новгород",
      C: "Старая Ладога",
      D: "Дербент"
    },
    right_answer: "D",
    sound: "/music/q6_10.mp3",
    extra: "Дербент считается самым древним городом России, с первыми поселениями, возникшими более 5000 лет назад в конце IV тысячелетия до н.э., а первое упоминание о нем как датируется VI веком до н.э. . Этот город на берегу Каспийского моря является не только самым древним, но и одним из старейших христианских центров, а его крепость Нарын-Кала и Джума-мечеть — древнейшие памятники архитектуры"
  },
  {
    id: 26,
    topic: "russia",
    topicName: "Россия",
    question: "Сколько процентов территории России занимает Сибирь?",
    options: {
      A: "35%",
      B: "47%",
      C: "59%",
      D: "77%"
    },
    right_answer: "D",
    sound: "/music/q6_10.mp3",    
  },
  {
    id: 27,
    topic: "russia",
    topicName: "Россия",
    question: "Назовите столицу республики Тыва.",
    options: {
      A: "Абакан",
      B: "Барнаул",
      C: "Кызыл",
      D: "Элиста"
    },
    right_answer: "C",
    sound: "/music/q6_10.mp3",    
  },
  {
    id: 30,
    topic: "rusplus",
    topicName: "Россия++",
    question: "Чем известен в России Гео́рг Карл де Геккере́н ?",
    options: {
      A: "Он был учителем императора Петра I",
      B: "Он смертельно ранил А.С. Пушкина",
      C: "Он основал первую аптеку в Москве",
      D: "Он командовал русской эскадрой при Чесме"
    },
    right_answer: "B",
    extra:"Georges Charles de Heeckeren d'Anthès После дуэли был лишён чинов и выслан из России.",
    image_extra:"/images/dantes.png",
    sound: "/music/q11_15.mp3"
  },
  {
    id: 40,
    topic: "nuclear",
    topicName: "Физика",
    question: "Кто открыл явление радиоактивности?",
    options: {
      A: "Эрнест Резерфорд",
      B: "Мария Кюри",
      C: "Анри Беккерель",
      D: "Джеймс Чедвик"
    },
    right_answer: "B",
    sound: "/music/q13.mp3"
  },
  {
    id: 41,
    topic: "nuclear",
    topicName: "Физика",
    question: "Что, согласно теории большого взрыва, было причиной начала расширения Вселенной?",
    options: {
      A: "Сингулярность",
      B: "Поглощение черными дырами",
      C: "Коллапс темной материи",
      D: "Влияние темной энергии"
    },
    right_answer: "A",
    sound: "/music/q13.mp3"
  },
];
