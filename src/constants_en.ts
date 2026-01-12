import { QuestionData } from "./types";

const SB_URL = "https://zvbgylkmptmqbihcevmu.supabase.co/storage/v1/object/public/";

// NOTE: Ensure SB_URL is defined or imported in this scope
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
    extra: "The filmmaker was convinced that any miracle works much better outdoors than in studios. It's hard to say whether the young GITIS student Inna Churikova, who later became a star of Soviet cinema, shared his confidence, but she stoically endured the cold and selflessly ate the onions that the thrifty props man had put in the basket instead of apples."
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
    question: "Who is the author of the famous painting 'Girl with a Red Kerchief' (also known as 'Girl with a Scarf')?",
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
    right_answer: "C",
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
      D: "The Death Star from Star Wars"
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
    extra: "The shores of Russia are washed by 13 seas: The seas of the Atlantic Ocean: the Baltic, Black, and Azov. The seas of the Arctic Ocean: the Barents, White, Kara, Laptev, East Siberian, and Chukchi seas. The seas of the Pacific Ocean: the Bering, Okhotsk, and Japan seas. Enclosed sea (lake): the Caspian."
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
    extra: "Derbent is considered the oldest city in Russia, with the first settlements appearing more than 5,000 years ago at the end of the 4th millennium BC, and the first mention of it dating back to the 6th century BC. This city on the shores of the Caspian Sea is not only the oldest, but also one of the oldest Christian centers, and its Naryn-Kala fortress and Juma Mosque are ancient architectural monuments."
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
      A: "Assistant cook in the kitchen",
      B: "A dish or appetizer served with champagne",
      C: "A round in fencing",
      D: "An evening reception without dancing"
    },
    right_answer: "D",
    extra: "Raut is an evening reception or gathering, typically without dancing, where people socialize and converse.",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 30,
    topic: "russia",
    topicName: "Russia",
    question: "What is a 'Khreptyug'?",
    options: {
      A: "A linen sack used to hold oats for horse feed",
      B: "The name of an iron used by serfs to slaughter serfs",
      C: "A drunkard, \"Troublemaker\"",
      D: "A young man for marriage in the Volga province"
    },
    right_answer: "A",
    extra: "Khreptyug is a traditional linen sack used to hold oats for feeding horses.",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 31,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "He commanded the Russian squadron at Chesma.",
    options: {
      A: "Admiral Fyodor Ushakov",
      B: "Count Alexei Orlov",
      C: "Admiral Pavel Nakhimov",
      D: "Vice Admiral Vladimir Kornilov"
    },
    right_answer: "B",
    extra: "Count Alexei Grigoryevich Orlov commanded the Russian squadron at the Battle of Chesma in 1770 during the Russo-Turkish War.",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 32,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "Georges Charles de Heeckeren d'Anthès and Charles André Joseph Marie de Gaulle (Dantes and General de Gaulle) studied at different times, but at the same French educational institution. Which one?",
    options: {
      A: "École de Saint-Cyr",
      B: "École Polytechnique",
      C: "École de Saint-Germain-en-Laye",
      D: "Paris-Sorbonne University"
    },
    right_answer: "A",
    extra: "École spéciale militaire de Saint-Cyr, founded in 1802 by Napoleon. Among Saint-Cyr's graduates are 11 Marshals of France, six members of the Académie française, and three heads of state (MacMahon, Pétain, de Gaulle), as well as the saintly Charles Foucault and Pushkin's murderer, Georges d'Anthès.",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 33,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "In which European (EU) city is this monument to Emperor Alexander II located?",
    options: {
      A: "Helsinki, Finland",
      B: "Sofia, Bulgaria",
      C: "Berlin, Germany",
      D: "Paris, France"
    },
    right_answer: "A",
    image: `${SB_URL}images/alexander2.png`,
    extra: "The monument to the Grand Duke of Finland and Russian Emperor Alexander II was erected in Helsinki in front of the Helsinki Cathedral on Senate Square. Finland, then part of the Russian state, was declared an autonomous republic and received its own flag, coat of arms, and currency, post office, army, personnel of officials and judges, the first gymnasium, compulsory schooling, and in 1863 a Constitution was introduced, enshrining the rights and foundations of the state system of the Principality of Finland.",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 34,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "Who was Count Kirill Grigorievich Razumovsky before his appointment as President of the Imperial Academy of Sciences in 1746?",
    options: {
      A: "Minister of Finance",
      B: "Shepherd",
      C: "Cook",
      D: "Brewer"
    },
    right_answer: "B",
    image: `${SB_URL}images/razumovskiy.png`,
    extra: "In 1742, Razumovsky lived in the village of Lemeshi in the Kyiv province and herded cattle. In 1746, at the age of 18, after studying in Europe, he was appointed President of the Imperial Academy of Sciences and remains its youngest and one of its most successful leaders to this day. His appointment is an example of favoritism during the era of palace coups, as he was the brother of Alexei Razumovsky, a favorite of Empress Elizabeth Petrovna. At 22, he was elected Hetman of Little Russia, and at 34, he became a field marshal.",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 35,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "Which great Russian scientist was BOTH an honorary doctorate from Oxford and Cambridge universities? (But was not a member of the Russian Academy of Sciences)?",
    options: {
      A: "Mikhail Lomonosov",
      B: "Ivan Pavlov",
      C: "Nikolai Lobachevsky",
      D: "Dmitri Mendeleev"
    },
    right_answer: "D",
    image_extra: `${SB_URL}images/mendeleev.png`,
    extra: "In 1894, during his trip to England, Dmitri Ivanovich Mendeleev was awarded honorary doctorates from Oxford and Cambridge universities. This is a rare case of one scientist being recognized simultaneously by two of Britain's oldest and most prestigious universities.",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 36,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "Dmitri Ivanovich Mendeleev, the neighbors on the street, knew as a master craftsman of what?",
    options: {
      A: "Vodka",
      B: "Boots",
      C: "Bookbinding",
      D: "Suitcases"
    },
    right_answer: "D",
    extra: "Dmitri Mendeleev was a passionate and skilled suitcase maker. He purchased the materials himself and handcrafted durable and sturdy suitcases, which were highly prized by his contemporaries. For many, he was simply a skilled artisan neighbor, not the author of the Periodic Law.",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 37,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "This famous Russian surgeon, called the 'father of Russian military field surgery,' was the first to widely use plaster casts to treat fractures. He also reversed the misdiagnosis of tuberculosis made to the young Dmitry Ivanovich Mendeleyev. Who is he?",
    options: {
      A: "Sergey Petrovich Botkin",
      B: "Nikolai Ivanovich Pirogov",
      C: "Nikolai Vasilyevich Sklifosovsky",
      D: "Ivan Petrovich Pavlov"
    },
    right_answer: "B",
    extra: "Nikolai Ivanovich Pirogov is considered the father of Russian military field surgery and was the first to use plaster casts on a large scale. He also examined the young Dmitri Mendeleev and correctly diagnosed that he did not have tuberculosis.",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 38,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "In which Russian city did the great Russian scientist Dmitri Mendeleev receive his university education?",
    options: {
      A: "Moscow",
      B: "Kazan",
      C: "Saint Petersburg",
      D: "Novgorod"
    },
    right_answer: "C",
    extra: "Dmitri Mendeleev graduated from the Main Pedagogical Institute in Saint Petersburg in 1855.",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 39,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "Which of these great Russian poets and writers did not serve in the Ministry of Foreign Affairs?",
    options: {
      A: "Alexander Sergeevich Pushkin",
      B: "Fyodor Ivanovich Tyutchev",
      C: "Alexander Sergeevich Griboyedov",
      D: "Mikhail Yuryevich Lermontov"
    },
    right_answer: "D",
    extra: "A.S. Pushkin was enrolled in the Collegium of Foreign Affairs in 1817 after graduating from the Tsarskoye Selo Lyceum. F.I. Tyutchev served in the State Collegium of Foreign Affairs and spent nearly 20 years in the diplomatic service in Germany and Italy. A.S. Griboyedov was a professional diplomat, and his literary work was essentially a hobby. He served in the Russian mission in Persia, where he died tragically. M.Yu. Lermontov, in fact, never served in the diplomatic service. His fate was tied to military service.",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 40,
    topic: "rusplus1",
    topicName: "Russia++",
    question: "What are Revision Tales?",
    options: {
      A: "Census forms for tax accounting",
      B: "Folk stories about tsarist officials, which Pushkin studied while working on \"The Captain's Daughter\"",
      C: "An unpublished collection of satirical fables by I. Krylov about officials",
      D: "Nikolai Gogol's manuscripts that formed the basis for \"The Inspector General\""
    },
    right_answer: "A",
    extra: "In preparation for the tax reform ordered by Peter the Great, a general census (revision) was conducted. Only men were counted. Based on the census results, in 1722, the \"revision tales\" were compiled, the very same database. Two years later, a new tax was introduced—the poll tax. Every adult male was obliged to pay it to the treasury. And it didn't matter whether he was a serf, a state slave, or belonged to the posad population, that is, lived in the city.",
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
      C: "Mary I (Bloody Mary)",
      D: "Anne"
    },
    right_answer: "A",
    extra: "Queen Victoria Alexandrina, given it at her baptism in honor of her godfather, Russian Emperor Alexander I, and Victoria's mother.",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 42,
    topic: "rusplus",
    topicName: "Russia+++",
    question: "According to 19th-century British physicians, jam and baked goods were especially contraindicated for girls from aristocratic families. What \"threat\" did they pose, according to doctors?",
    options: {
      A: "Causing obesity",
      B: "Tooth decay and bad breath",
      C: "Causing erotic fantasies",
      D: "Believed to cause excessive nervousness and hysteria"
    },
    right_answer: "C",
    extra: "In the Victorian era, there was a direct link between nutrition and \"carnal urges.\" It was believed that sweet foods (like jam and baked goods) could \"heat the blood\" and awaken feelings and fantasies undesirable for a well-bred girl. Sexual repression: Female sexuality in high society of the time was repressed and strictly controlled. Any expression of it was considered vulgar and indecent.",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 43,
    topic: "rusplus",
    topicName: "Russia+++",
    question: "What language did Victoria Alice Helena Louise Beatrice of Hesse-Darmstadt (or Her Imperial Majesty Empress and Autocrat of All the Russias Alexandra Feodorovna) speak best?",
    options: {
      A: "English",
      B: "German",
      C: "French",
      D: "Russian"
    },
    right_answer: "A",
    extra: "Alexandra Feodorovna (Princess Alice of Hesse-Darmstadt) spoke English best, as she was raised at the English court by her grandmother Queen Victoria.",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 44,
    topic: "rusplus",
    topicName: "Russia+++",
    question: "In what village was Ivan Susanin born?",
    options: {
      A: "The village of Samet near Kostroma",
      B: "The village of Krasnoe-na-Gore",
      C: "The village of Molvitino (now the settlement of Susanino)",
      D: "The village of Derevenki (near the village of Domnino, Kostroma District)"
    },
    right_answer: "D",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 45,
    topic: "rusplus",
    topicName: "Russia",
    question: "This people (not nationality) calls itself cod-eaters. Who are we talking about?",
    options: {
      A: "Nivkhs",
      B: "Pomors",
      C: "Tungus",
      D: "Karelians"
    },
    right_answer: "B",
    extra: "In general, the entire life of the Pomors was built around fishing, as the lands near the White Sea are significantly inferior to others in terms of agriculture. Moreover, cod is considered the only fish that never gets boring and can be eaten almost every day.",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 46,
    topic: "rusplus",
    topicName: "Russia",
    question: "Who are the 'real people'?",
    options: {
      A: "Kalmyks",
      B: "Sami",
      C: "Chukchi",
      D: "Evens"
    },
    right_answer: "C",
    extra: "The Chukchi (translated into Russian as \"real people\") are a small indigenous people. People of the North. Representatives of this ethnic group live in a territory stretching from the Bering Sea to the Indigirka River and from the Arctic Ocean to the Anadyr and Anyuy Rivers.",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 47,
    topic: "rusplus",
    topicName: "Russia+++",
    question: "Whose fairy tale is the ballet \"The Nutcracker\" based on?",
    options: {
      A: "The Brothers Grimm",
      B: "Hans Christian Andersen",
      C: "Charles Perrault",
      D: "Ernst Theodor Amadeus Hoffmann"
    },
    right_answer: "D",
    sound: `${SB_URL}sounds/q11_15.mp3`,
    extra: "Ernst Theodor Amadeus Hoffmann"
  },
  {
    id: 48,
    topic: "rusplus",
    topicName: "Russia+++",
    question: "In what year did the ballet \"The Nutcracker\" premiere at the Mariinsky Theater?",
    options: {
      A: "1877",
      B: "1888",
      C: "1892",
      D: "1898"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q11_15.mp3`,
    extra: "December 6 (18), 1892"
  },
  {
    id: 49,
    topic: "rusplus",
    topicName: "Russia+++",
    question: "Which country is traditionally represented by the \"Chocolate\" dance in the divertissement of Act II?",
    options: {
      A: "Italy",
      B: "France",
      C: "Spain",
      D: "England"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q11_15.mp3`,
    extra: "The \"Chocolate\" dance (Spanish dance) traditionally represents Spain in the divertissement of Act II of The Nutcracker."
  },
  {
    id: 50,
    topic: "rusplus",
    topicName: "Russia+++",
    question: "What unusual musical instrument, sounding like crystal bells, did Tchaikovsky first use in The Nutcracker for the Sugar Plum Fairy theme?",
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
      A: "Ernest Rutherford",
      B: "Marie Curie",
      C: "Henri Becquerel",
      D: "James Chadwick"
    },
    right_answer: "C",
    extra: "Henri Becquerel discovered radioactivity in 1896 when he found that uranium salts emitted radiation that could darken photographic plates.",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 52,
    topic: "nuclear",
    topicName: "Physics",
    question: "Who proposed the theory of the atomic nucleus as a positively charged mass around which electrons revolve?",
    options: {
      A: "Ernest Rutherford",
      B: "Niels Bohr",
      C: "J.J. Thomson",
      D: "Albert Einstein"
    },
    right_answer: "A",
    extra: "Ernest Rutherford proposed the nuclear model of the atom in 1911, suggesting that atoms have a small, dense, positively charged nucleus surrounded by orbiting electrons.",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 53,
    topic: "nuclear",
    topicName: "Physics",
    question: "What is the name of the element used in nuclear reactors to maintain a chain reaction?",
    options: {
      A: "Uranium-235",
      B: "Hydrogen-1",
      C: "Thorium-232",
      D: "Plutonium-239"
    },
    right_answer: "A",
    extra: "Uranium-235 is used as fuel in most nuclear reactors because its nuclei can split when they capture slow neutrons, sustaining a chain reaction.",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 54,
    topic: "nuclear",
    topicName: "Physics",
    question: "What, according to the Big Bang theory, caused the expansion of the universe to begin?",
    options: {
      A: "Singularity",
      B: "Black hole absorption",
      C: "Dark matter collapse",
      D: "The influence of dark energy"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 55,
    topic: "nuclear",
    topicName: "Physics",
    question: "What is the cosmic microwave background radiation that supports the Big Bang theory?",
    options: {
      A: "Gravitational waves",
      B: "X-rays",
      C: "Microwave background radiation",
      D: "Radiation pulsations"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 56,
    topic: "nuclear",
    topicName: "Physics",
    question: "When did the Big Bang occur, according to modern calculations?",
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
      A: "Niels Bohr",
      B: "Isaac Newton",
      C: "Galileo Galilei",
      D: "Albert Einstein"
    },
    right_answer: "D",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 58,
    topic: "nuclear",
    topicName: "Physics",
    question: "How does the frequency of sound waves change as the sound source approaches the observer?",
    options: {
      A: "The frequency increases",
      B: "The frequency decreases",
      C: "The frequency remains constant",
      D: "Sound disappears"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 59,
    topic: "nuclear",
    topicName: "Physics",
    question: "Which of the following statements is a consequence of Hubble's law?",
    options: {
      A: "Galaxies farther from Earth move faster",
      B: "Galaxies closer to Earth move faster",
      C: "All galaxies are the same distance from us",
      D: "The universe remains constant over time"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 60,
    topic: "nuclear",
    topicName: "Physics",
    question: "What is the significance of the elementary charge of an electron?",
    options: {
      A: "1.6 × 10⁻¹⁹ C (coulomb)",
      B: "2.4 × 10⁻¹⁸ C (coulomb)",
      C: "3.2 × 10⁻¹⁹ C (coulomb)",
      D: "0 C (coulomb)"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q13.mp3`
  }
];
