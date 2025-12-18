import { QuestionData } from "./types";

// NOTE: This is the structure requested.
// In a real scenario, you might replace this with a file upload or fetch.
export const QUESTIONS_EN: QuestionData[] = [
  {
    id: 1,
    topic: "xmas_movies",
    topicName: "Christmas Movies",
    question: "In the movie 'Home Alone', where are the McAllisters going on vacation when they leave Kevin behind?",
    options: {
      A: "London",
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
    topicName: "Romania",
    question: "What does the yellow color on the flag of Romania represent?",
    options: {
      A: "The Sun",
      B: "Grain",
      C: "Gold",
      D: "Mamaliga (Polenta)"
    },
    right_answer: "B",
    extra: "",
    sound: "/music/q1_15.mp3",
    image: "/images/rom_flag.webp",
  },
  {
    id: 11,
    topic: "romania",
    topicName: "Romania",
    question: "What is the name of the Romanian football club?",
    options: {
      A: "Gaz Metan",
      B: "Gaz Propan",
      C: "Gaz Butan",
      D: "Gaz Etan"
    },
    right_answer: "A",
    sound: "/music/q1_15.mp3",
    image_extra: "/images/metan.png"
  },
  {
    id: 12,
    topic: "romania",
    topicName: "Romania",
    question: "What is the name of the traditional Romanian circle dance?",
    options: {
      A: "Tarantella",
      B: "Brașoveanca",
      C: "Hora",
      D: "Cha-cha-cha"
    },
    right_answer: "C",
    sound: "/music/q1_15.mp3"
  },
  {
    id: 13,
    topic: "romania",
    topicName: "Romania",
    question: "Which Romanian musician became famous for playing the pan flute?",
    options: {
      A: "George Enescu",
      B: "André Rieu",
      C: "Gheorghe Zamfir",
      D: "Vladimir Cosma"
    },
    right_answer: "C",
    sound: "/music/q1_15.mp3",
    image_extra:"/images/panflute.png"
  },
  {
    id: 14,
    topic: "romania",
    topicName: "Romania",
    question: "Which Romanian ruler founded the Principality of Wallachia?",
    options: {
      A: "Basarab I",
      B: "Stephen the Great",
      C: "Vlad the Impaler",
      D: "Mircea the Elder"
    },
    right_answer: "A",
    sound: "/music/q1_15.mp3"
  },
  {
    id: 15,
    topic: "romania",
    topicName: "Romania",
    question: "Who is the author of the famous painting 'Girl with a Red Kerchief'?",
    options: {
      A: "Nicolae Grigorescu",
      B: "Constantin Lecca",
      C: "Ștefan Luchian",
      D: "Nicolae Tonitza"
    },
    right_answer: "A",
    sound: "/music/q1_15.mp3",
    image:"/images/red_girl.png"
  },
  {
    id: 20,
    topic: "russia",
    topicName: "Russia",
    question: "What is the name of the Russian city considered the cradle of the Russian Navy?",
    options: {
      A: "Saint Petersburg",
      B: "Astrakhan",
      C: "Murmansk",
      D: "Voronezh"
    },
    right_answer: "D",
    sound: "/music/q6_10.mp3"
  },
  {
    id: 21,
    topic: "russia",
    topicName: "Russia",
    question: "Russia has not only the world's largest lake but also a major swamp. What is its name?",
    options: {
      A: "Pechora-Ilych Swamp",
      B: "Vasyugan Swamps",
      C: "Vologda Swamp",
      D: "West Siberian Swamp"
    },
    right_answer: "B",
    sound: "/music/q6_10.mp3"
  },
  {
    id: 22,
    topic: "russia",
    topicName: "Russia",
    question: "Which famous game was invented in Russia?",
    options: {
      A: "Tetris",
      B: "Pac-Man",
      C: "Super Mario",
      D: "STALKER"
    },
    right_answer: "A",
    sound: "/music/q6_10.mp3"
  },
  {
    id: 23,
    topic: "russia",
    topicName: "Russia",
    question: "Which of these objects is comparable in area to the territory of Russia?",
    options: {
      A: "The Moon",
      B: "Pluto",
      C: "The Pacific Ocean",
      D: "The Death Star from Star Wars"
    },
    right_answer: "B",
    sound: "/music/q6_10.mp3"
  },
  {
    id: 24,
    topic: "russia",
    topicName: "Russia",
    question: "How many seas border Russia?",
    options: {
      A: "5",
      B: "10",
      C: "13",
      D: "20"
    },
    right_answer: "C",
    sound: "/music/q6_10.mp3",
    extra: "Russia is bordered by 13 seas: Seas of the Atlantic Ocean: Baltic, Black, Azov. Seas of the Arctic Ocean: Barents, White, Kara, Laptev, East Siberian, Chukchi. Seas of the Pacific Ocean: Bering, Okhotsk, Japan. Inland sea (lake): Caspian."
  },
  {
    id: 25,
    topic: "russia",
    topicName: "Russia",
    question: "Which of these cities is considered the oldest in Russia?",
    options: {
      A: "Moscow",
      B: "Veliky Novgorod",
      C: "Staraya Ladoga",
      D: "Derbent"
    },
    right_answer: "D",
    sound: "/music/q6_10.mp3",
    extra: "Derbent is considered the oldest city in Russia, with the first settlements appearing over 5,000 years ago at the end of the 4th millennium BC, and the first written mention dates back to the 6th century BC. This city on the Caspian Sea coast is not only the oldest but also one of the earliest Christian centers, and its Naryn-Kala fortress and Juma Mosque are among the most ancient architectural monuments."
  },
  {
    id: 26,
    topic: "russia",
    topicName: "Russia",
    question: "What percentage of Russia's territory is Siberia?",
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
    topicName: "Russia",
    question: "Name the capital of the Tuva Republic.",
    options: {
      A: "Abakan",
      B: "Barnaul",
      C: "Kyzyl",
      D: "Elista"
    },
    right_answer: "C",
    sound: "/music/q6_10.mp3",
  },
  {
    id: 30,
    topic: "rusplus",
    topicName: "Russia++",
    question: "What is Georges Charles d'Anthès de Heeckeren known for in Russian history?",
    options: {
      A: "He was a teacher of Emperor Peter I",
      B: "He fatally wounded A.S. Pushkin",
      C: "He founded the first pharmacy in Moscow",
      D: "He commanded the Russian squadron at Chesma"
    },
    right_answer: "B",
    extra:"Georges Charles de Heeckeren d'Anthès was stripped of his ranks and exiled from Russia after the duel.",
    image_extra:"/images/dantes.png",
    sound: "/music/q11_15.mp3"
  },
  {
    id: 40,
    topic: "nuclear",
    topicName: "Physics",
    question: "Who discovered the phenomenon of radioactivity?",
    options: {
      A: "Ernest Rutherford",
      B: "Marie Curie",
      C: "Henri Becquerel",
      D: "James Chadwick"
    },
    right_answer: "B",
    sound: "/music/q13.mp3"
  },
  {
    id: 41,
    topic: "nuclear",
    topicName: "Physics",
    question: "According to the Big Bang theory, what was the cause of the beginning of the Universe's expansion?",
    options: {
      A: "A Singularity",
      B: "Absorption by black holes",
      C: "Collapse of dark matter",
      D: "Influence of dark energy"
    },
    right_answer: "A",
    sound: "/music/q13.mp3"
  },
];
