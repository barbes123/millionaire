import { QuestionData } from "./types";

// NOTE: This is the structure requested.
// In a real scenario, you might replace this with a file upload or fetch.

const SB_URL = "https://zvbgylkmptmqbihcevmu.supabase.co/storage/v1/object/public/";

export const QUESTIONS_EN: QuestionData[] = [
  {
    id: 1,
    topic: "xmas_movies",
    topicName: "New Year's Movies",
    question: "In the movie 'Home Alone,' what city does the McCallister family live in?",
    options: {
      A: "London",
      B: "Washington",
      C: "Chicago",
      D: "New York"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    extra: "Chicago"
  },
  {
    id: 2,
    topic: "xmas_movies",
    topicName: "New Year's Movies",
    question: "What did Marfushka (Inna Churikova) eat in the forest in Alexander Rowe's fairy tale 'Morozko'?",
    options: {
      A: "Apples",
      B: "Dumplings",
      C: "Onions",
      D: "Marzipans"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    image: "",
    extra: "The filmmaker was convinced that any miracle works much better outdoors than in studios..."
  },
  {
    id: 3,
    topic: "xmas_movies",
    topicName: "New Year's Movies",
    question: "What did Alexander Shirvindt's character suggest we wear in Eldar Ryazanov's film \"The Irony of Fate, or Enjoy Your Bath!\"?",
    options: {
      A: "Handcuffs",
      B: "Sheets",
      C: "Belts",
      D: "Tinsel"
    },
    right_answer: "B",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    correct_sound: "",
    wrong_sound: ""
  },
  {
    id: 4,
    topic: "xmas_movies",
    topicName: "New Year's Movies",
    question: "What did the fiancé in the film \"Magicians\" give the director of the National University of Economics, Shemakhanskaya, for each holiday?",
    options: {
      A: "Candy",
      B: "Flowers",
      C: "Watch",
      D: "He didn't give anything"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    correct_sound: "",
    wrong_sound: ""
  },
  {
    id: 5,
    topic: "xmas_movies",
    topicName: "New Year's Movies",
    question: "In the movie 'Carnival Night,' what did the secretary bring to Comrade Ogurtsov when he was stuck in the elevator?",
    options: {
      A: "Phone",
      B: "Sausage",
      C: "File",
      D: "Resignation Letter"
    },
    right_answer: "B",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    correct_sound: "",
    wrong_sound: ""
  },
  {
    id: 6,
    topic: "xmas_movies",
    topicName: "New Year's Movies",
    question: "What game did the \"gentlemen of fortune\" play to celebrate the New Year?",
    options: {
      A: "Chess",
      B: "Cities",
      C: "Cards",
      D: "Cossacks and Robbers"
    },
    right_answer: "B",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    correct_sound: "",
    wrong_sound: ""
  },
  {
    id: 7,
    topic: "xmas_movies",
    topicName: "New Year's Movies",
    question: "What does Lily (Sofiko Chiaureli) propose a drink to in the film \"Looking for the Woman\"?",
    options: {
      A: "To everyone's health",
      B: "To a raise in wages",
      C: "To new evidence",
      D: "To a good movie"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    correct_sound: "",
    wrong_sound: ""
  },
  {
    id: 8,
    topic: "xmas_movies",
    topicName: "New Year's Movies",
    question: "What carnival costume did Savely Kramarov's character wear in the film \"This Merry Planet\"?",
    options: {
      A: "Bunny",
      B: "Fantomas",
      C: "Perpetual Motion Machine",
      D: "Santa Claus"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    correct_sound: "",
    wrong_sound: ""
  },
  {
    id: 9,
    topic: "xmas_movies",
    topicName: "New Year's Movies",
    question: "Where does the main action of the film \"Old New Year\" take place?",
    options: {
      A: "At the theater",
      B: "At the bathhouse",
      C: "At the cafe",
      D: "At the research institute"
    },
    right_answer: "B",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    correct_sound: "",
    wrong_sound: ""
  },
  {
    id: 10,
    topic: "xmas_movies",
    topicName: "New Year's Movies",
    question: "What did Professor Preobrazhensky recommend to eat with vodka in the film 'Heart of a Dog'?",
    options: {
      A: "Pickles",
      B: "Game",
      C: "Jellied fish",
      D: "Hot appetizers"
    },
    right_answer: "D",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    correct_sound: "",
    wrong_sound: ""
  },
  {
    id: 11,
    topic: "romania",
    topicName: "Romania",
    question: "What does the yellow color on the Romanian flag mean?",
    options: {
      A: "Sun",
      B: "Grain",
      C: "Gold",
      D: "Hamalaiga"
    },
    right_answer: "B",
    extra: "",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    image: `${SB_URL}images/rom_flag.webp`
  },
  {
    id: 12,
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
    sound: `${SB_URL}sounds/q1_15.mp3`,
    image_extra: `${SB_URL}images/metan.png`
  },
  {
    id: 13,
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
    sound: `${SB_URL}sounds/q1_15.mp3`
  },
  {
    id: 14,
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
    sound: `${SB_URL}sounds/q1_15.mp3`,
    image_extra: `${SB_URL}images/panflute.png`
  },
  {
    id: 15,
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
    sound: `${SB_URL}sounds/q1_15.mp3`
  },
  {
    id: 16,
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
    sound: `${SB_URL}sounds/q1_15.mp3`,
    image: `${SB_URL}images/red_girl.png`
  },
  {
    id: 17,
    topic: "romania",
    topicName: "Romania",
    question: "Who is the artist behind the 'Infinity Column' sculpture?",
    options: {
      A: "Constantin Brâncuși",
      B: "Dimitrie Paciurea",
      C: "Cornel Medrea",
      D: "Marcel Olinescu"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    image: `${SB_URL}images/infinity.png`
  },
  {
    id: 18,
    topic: "romania",
    topicName: "Romania",
    question: "In what year did Romania gain independence from the Ottoman Empire?",
    options: {
      A: "1887",
      B: "1877",
      C: "1867",
      D: "1857"
    },
    right_answer: "B",
    sound: `${SB_URL}sounds/q1_15.mp3`
  },
  {
    id: 19,
    topic: "romania",
    topicName: "Romania",
    question: "Which castle in Romania is considered the residence of Count Dracula?",
    options: {
      A: "Cantacuzino Castle",
      B: "Corvin Castle",
      C: "Peleș Castle",
      D: "Bran Castle"
    },
    right_answer: "D",
    sound: `${SB_URL}sounds/q1_15.mp3`
  },
  {
    id: 20,
    topic: "romania",
    topicName: "Romania",
    question: "The President of Romania is:",
    options: {
      A: "Traian Băsescu",
      B: "Călin Georgescu",
      C: "Nicușor Dan",
      D: "Klaus Iohannis"
    },
    right_answer: "D",
    sound: `${SB_URL}sounds/q1_15.mp3`
  },
  {
    id: 21,
    topic: "russia",
    topicName: "Russia",
    question: "What is the name of the Russian city considered the cradle of the Russian navy?",
    options: {
      A: "Saint Petersburg",
      B: "Astrakhan",
      C: "Murmansk",
      D: "Voronezh"
    },
    right_answer: "D",
    sound: `${SB_URL}sounds/q6_10.mp3`
  },
  {
    id: 22,
    topic: "russia",
    topicName: "Russia",
    question: "Russia has not only the largest lake in the world, but also a swamp. What is its name?",
    options: {
      A: "Pechora-Ilych Swamp",
      B: "Vasyugan Swamps",
      C: "Vologda Swamp",
      D: "West Siberian Swamp"
    },
    right_answer: "B",
    sound: `${SB_URL}sounds/q6_10.mp3`
  },
  {
    id: 23,
    topic: "russia",
    topicName: "Russia",
    question: "What famous game was invented in Russia?",
    options: {
      A: "Tetris",
      B: "Pac-Man",
      C: "Super Mario",
      D: "STALKER"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q6_10.mp3`
  },
  {
    id: 24,
    topic: "russia",
    topicName: "Russia",
    question: "Which of these objects is comparable in size to Russia's territory?",
    options: {
      A: "The Moon",
      B: "Pluto",
      C: "The Pacific Ocean",
      D: "The Death Star"
    },
    right_answer: "B",
    sound: `${SB_URL}sounds/q6_10.mp3`
  },
  {
    id: 25,
    topic: "russia",
    topicName: "Russia",
    question: "How many seas wash the shores of Russia?",
    options: {
      A: "5",
      B: "10",
      C: "13",
      D: "20"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q6_10.mp3`,
    extra: "The shores of Russia are washed by 13 seas..."
  },
  {
    id: 26,
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
    sound: `${SB_URL}sounds/q6_10.mp3`,
    extra: "Derbent is considered the oldest city in Russia..."
  },
  {
    id: 27,
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
    sound: `${SB_URL}sounds/q6_10.mp3`
  },
  {
    id: 28,
    topic: "russia",
    topicName: "Russia",
    question: "Name the capital of the Republic of Tuva.",
    options: {
      A: "Abakan",
      B: "Barnaul",
      C: "Kyzyl",
      D: "Elista"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q6_10.mp3`
  },
  {
    id: 29,
    topic: "russia",
    topicName: "Russia",
    question: "What is \"Raut\"?",
    options: {
      A: "Assistant cook",
      B: "Appetizer with champagne",
      C: "Round in fencing",
      D: "Evening reception without dancing"
    },
    right_answer: "D",
    extra: "Raut is an evening reception or gathering...",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 30,
    topic: "russia",
    topicName: "Russia",
    question: "What is a 'Khreptyug'?",
    options: {
      A: "Linen sack for horse feed",
      B: "Name of an iron",
      C: "Troublemaker",
      D: "Young man for marriage"
    },
    right_answer: "A",
    extra: "Khreptyug is a traditional linen sack used to hold oats...",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 31,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "Who commanded the Russian squadron at Chesma?",
    options: {
      A: "Admiral Ushakov",
      B: "Count Alexei Orlov",
      C: "Admiral Nakhimov",
      D: "Admiral Kornilov"
    },
    right_answer: "B",
    extra: "Count Alexei Grigoryevich Orlov commanded the squadron at Chesma...",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 32,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "Georges d'Anthès and Charles de Gaulle studied at the same institution. Which one?",
    options: {
      A: "École de Saint-Cyr",
      B: "École Polytechnique",
      C: "École de Saint-Germain",
      D: "Sorbonne"
    },
    right_answer: "A",
    extra: "École spéciale militaire de Saint-Cyr...",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 33,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "In which EU city is this monument to Alexander II located?",
    options: {
      A: "Helsinki, Finland",
      B: "Sofia, Bulgaria",
      C: "Berlin, Germany",
      D: "Paris, France"
    },
    right_answer: "A",
    image: `${SB_URL}images/alexander2.png`,
    extra: "The monument is located on Senate Square in Helsinki...",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 34,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "Who was Count Razumovsky before becoming President of the Academy of Sciences?",
    options: {
      A: "Minister",
      B: "Shepherd",
      C: "Cook",
      D: "Brewer"
    },
    right_answer: "B",
    image: `${SB_URL}images/razumovskiy.png`,
    extra: "In 1742, Razumovsky lived in a village and herded cattle...",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 35,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "Which scientist had honorary doctorates from both Oxford and Cambridge?",
    options: {
      A: "Lomonosov",
      B: "Pavlov",
      C: "Lobachevsky",
      D: "Mendeleev"
    },
    right_answer: "D",
    image_extra: `${SB_URL}images/mendeleev.png`,
    extra: "In 1894 Mendeleev was awarded doctorates from both Oxford and Cambridge...",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 36,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "Neighbors knew Mendeleev as a master craftsman of what?",
    options: {
      A: "Vodka",
      B: "Boots",
      C: "Bookbinding",
      D: "Suitcases"
    },
    right_answer: "D",
    extra: "Mendeleev was a passionate and skilled suitcase maker...",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 37,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "This surgeon reversed a misdiagnosis of tuberculosis for Mendeleyev. Who is he?",
    options: {
      A: "Botkin",
      B: "Pirogov",
      C: "Sklifosovsky",
      D: "Pavlov"
    },
    right_answer: "B",
    extra: "Nikolai Pirogov is considered the father of military field surgery...",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 38,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "In which city did Mendeleev receive his university education?",
    options: {
      A: "Moscow",
      B: "Kazan",
      C: "Saint Petersburg",
      D: "Novgorod"
    },
    right_answer: "C",
    extra: "Mendeleev graduated from the institute in Saint Petersburg in 1855...",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 39,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "Which of these writers did NOT serve in the Ministry of Foreign Affairs?",
    options: {
      A: "Pushkin",
      B: "Tyutchev",
      C: "Griboyedov",
      D: "Lermontov"
    },
    right_answer: "D",
    extra: "Lermontov's fate was tied exclusively to military service...",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 40,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "What are Revision Tales?",
    options: {
      A: "Census forms for tax accounting",
      B: "Folk stories",
      C: "Satirical fables",
      D: "Manuscripts by Gogol"
    },
    right_answer: "A",
    extra: "Compilers of revision tales recorded the population for taxes...",
    sound: `${SB_URL}sounds/q12.mp3`,
    image: `${SB_URL}images/revskazki.png`
  },
  {
    id: 41,
    topic: "rusplus",
    topicName: "Russia+++",
    question: "Which British queen's first name is Russian in origin?",
    options: {
      A: "Victoria",
      B: "Elizabeth I",
      C: "Mary I",
      D: "Anne"
    },
    right_answer: "A",
    extra: "Victoria Alexandrina was named after her godfather, Alexander I...",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 42,
    topic: "rusplus",
    topicName: "Russia+++",
    question: "In the 19th century, jam was contraindicated for girls. Why?",
    options: {
      A: "Obesity",
      B: "Bad breath",
      C: "Erotic fantasies",
      D: "Hysteria"
    },
    right_answer: "C",
    extra: "It was believed sweet foods could 'heat the blood'...",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 43,
    topic: "rusplus",
    topicName: "Russia+++",
    question: "What language did Empress Alexandra Feodorovna speak best?",
    options: {
      A: "English",
      B: "German",
      C: "French",
      D: "Russian"
    },
    right_answer: "A",
    extra: "She was raised at the English court by Queen Victoria...",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 44,
    topic: "rusplus",
    topicName: "Russia+++",
    question: "In what village was Ivan Susanin born?",
    options: {
      A: "Samet",
      B: "Krasnoe",
      C: "Molvitino",
      D: "Derevenki"
    },
    right_answer: "D",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 45,
    topic: "rusplus",
    topicName: "Russia+++",
    question: "This people calls itself cod-eaters. Who are they?",
    options: {
      A: "Nivkhs",
      B: "Pomors",
      C: "Tungus",
      D: "Karelians"
    },
    right_answer: "B",
    extra: "Life for the Pomors was built entirely around fishing...",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 46,
    topic: "rusplus",
    topicName: "Russia+++",
    question: "Who are the 'real people'?",
    options: {
      A: "Kalmyks",
      B: "Sami",
      C: "Chukchi",
      D: "Evens"
    },
    right_answer: "C",
    extra: "Chukchi translates as 'real people'...",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 47,
    topic: "rusplus",
    topicName: "Russia+++",
    question: "Whose fairy tale is the 'The Nutcracker' based on?",
    options: {
      A: "Grimm",
      B: "Andersen",
      C: "Perrault",
      D: "Hoffmann"
    },
    right_answer: "D",
    sound: `${SB_URL}sounds/q11_15.mp3`,
    extra: "E.T.A. Hoffmann"
  },
  {
    id: 48,
    topic: "rusplus",
    topicName: "Russia+++",
    question: "In what year did 'The Nutcracker' premiere?",
    options: {
      A: "1877",
      B: "1888",
      C: "1892",
      D: "1898"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q11_15.mp3`,
    extra: "The premiere took place on December 6, 1892..."
  },
  {
    id: 49,
    topic: "rusplus",
    topicName: "Russia+++",
    question: "Which country is represented by the 'Chocolate' dance?",
    options: {
      A: "Italy",
      B: "France",
      C: "Spain",
      D: "England"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q11_15.mp3`,
    extra: "The 'Chocolate' dance represents Spain..."
  },
  {
    id: 50,
    topic: "rusplus",
    topicName: "Russia+++",
    question: "What instrument did Tchaikovsky use for the Sugar Plum Fairy?",
    options: {
      A: "Vibraphone",
      B: "Celesta",
      C: "Bells",
      D: "Xylophone"
    },
    right_answer: "B",
    sound: `${SB_URL}sounds/q11_15.mp3`,
    extra: "Celesta"
  },
  {
    id: 51,
    topic: "nuclear",
    topicName: "Physics",
    question: "Who discovered radioactivity?",
    options: {
      A: "Rutherford",
      B: "Curie",
      C: "Becquerel",
      D: "Chadwick"
    },
    right_answer: "C",
    extra: "Henri Becquerel discovered radioactivity in 1896...",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 52,
    topic: "nuclear",
    topicName: "Physics",
    question: "Who proposed the nuclear model of the atom?",
    options: {
      A: "Rutherford",
      B: "Bohr",
      C: "Thomson",
      D: "Einstein"
    },
    right_answer: "A",
    extra: "Ernest Rutherford proposed the model in 1911...",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 53,
    topic: "nuclear",
    topicName: "Physics",
    question: "What element is used in nuclear reactors for a chain reaction?",
    options: {
      A: "Uranium-235",
      B: "Hydrogen-1",
      C: "Thorium-232",
      D: "Plutonium-239"
    },
    right_answer: "A",
    extra: "Uranium-235 is used as fuel in most reactors...",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 54,
    topic: "nuclear",
    topicName: "Physics",
    question: "What caused the expansion of the universe to begin?",
    options: {
      A: "Singularity",
      B: "Black holes",
      C: "Dark matter",
      D: "Dark energy"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 55,
    topic: "nuclear",
    topicName: "Physics",
    question: "What is the background radiation that supports the Big Bang?",
    options: {
      A: "Gravitational",
      B: "X-rays",
      C: "Microwave",
      D: "Radiation pulsations"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 56,
    topic: "nuclear",
    topicName: "Physics",
    question: "When did the Big Bang occur?",
    options: {
      A: "10 billion years ago",
      B: "13.8 billion years ago",
      C: "5 billion years ago",
      D: "20 billion years ago"
    },
    right_answer: "B",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 57,
    topic: "nuclear",
    topicName: "Physics",
    question: "Who is the author of the theory of relativity?",
    options: {
      A: "Bohr",
      B: "Newton",
      C: "Galilei",
      D: "Einstein"
    },
    right_answer: "D",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 58,
    topic: "nuclear",
    topicName: "Physics",
    question: "How does sound frequency change as the source approaches?",
    options: {
      A: "Increases",
      B: "Decreases",
      C: "Constant",
      D: "Disappears"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 59,
    topic: "nuclear",
    topicName: "Physics",
    question: "Which statement is a consequence of Hubble's law?",
    options: {
      A: "Farther galaxies move faster",
      B: "Closer galaxies move faster",
      C: "All galaxies same distance",
      D: "Universe is constant"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 60,
    topic: "nuclear",
    topicName: "Physics",
    question: "What is the elementary charge of an electron?",
    options: {
      A: "1.6 × 10⁻¹⁹ C",
      B: "2.4 × 10⁻¹⁸ C",
      C: "3.2 × 10⁻¹⁹ C",
      D: "0 C"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q13.mp3`
  }
];
