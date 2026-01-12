import { QuestionData } from "./types";

const SB_URL = "https://zvbgylkmptmqbihcevmu.supabase.co/storage/v1/object/public/";

export const QUESTIONS_RU: QuestionData[] = [
  {
    id: 1,
    topic: "xmas_movies",
    topicName: "Новогодние фильмы",
    question: "В фильме «Один Дома», в каком городе живет семья Мак Каллистеров ?",
    options: {
      A: "Лондон",
      B: "Вашингтон",
      C: "Чикаго",
      D: "Нью-Йорк"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    extra: "Чикаго"
  },
  {
    id: 2,
    topic: "xmas_movies",
    topicName: "Новогодние фильмы",
    question: "Чем угощалась в лесу Марфушка — Инна Чурикова в сказке Александра Роу «Морозко»?",
    options: {
      A: "Яблоками",
      B: "Пельменями",
      C: "Луком",
      D: "Марципанами"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    image: "",
    extra: "Киносказочник был уверен, что на природе всякое чудо удается гораздо лучше, чем в павильонах..."
  },
  {
    id: 3,
    topic: "xmas_movies",
    topicName: "Новогодние фильмы",
    question: "Чем предлагал пристегнуться герой Александра Ширвиндта в фильме Эльдара Рязанова «Ирония судьбы, или С легким паром!» ?",
    options: {
      A: "Наручниками",
      B: "Простынями",
      C: "Ремнями",
      D: "Мишурой"
    },
    right_answer: "B",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    correct_sound: "",
    wrong_sound: ""
  },
  {
    id: 4,
    topic: "xmas_movies",
    topicName: "Новогодние фильмы",
    question: "Что на каждый праздник дарил директору НУИНУ Шемаханской ее жених в фильме «Чародеи»?",
    options: {
      A: "Конфеты",
      B: "Цветы",
      C: "Часы",
      D: "Ничего не дарил"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    correct_sound: "",
    wrong_sound: ""
  },
  {
    id: 5,
    topic: "xmas_movies",
    topicName: "Новогодние фильмы",
    question: "Что в кинокартине «Карнавальная ночь» принесла секретарша товарищу Огурцову, когда он застрял в лифте?",
    options: {
      A: "Телефон",
      B: "Сосиску",
      C: "Напильник",
      D: "Заявление об уходе"
    },
    right_answer: "B",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    correct_sound: "",
    wrong_sound: ""
  },
  {
    id: 6,
    topic: "xmas_movies",
    topicName: "Новогодние фильмы",
    question: "В какую игру играли «джентльмены удачи», отмечая Новый год?",
    options: {
      A: "В шахматы",
      B: "В города",
      C: "В карты",
      D: "В казаки-разбойники"
    },
    right_answer: "B",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    correct_sound: "",
    wrong_sound: ""
  },
  {
    id: 7,
    topic: "xmas_movies",
    topicName: "Новогодние фильмы",
    question: "За что предлагает выпить Лили — Софико Чиаурели в фильме «Ищите женщину»?",
    options: {
      A: "За то, чтобы все были здоровы",
      B: "За повышение заработной платы",
      C: "За новую улику",
      D: "За хорошее кино"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    correct_sound: "",
    wrong_sound: ""
  },
  {
    id: 8,
    topic: "xmas_movies",
    topicName: "Новогодние фильмы",
    question: "Какой карнавальный костюм был на герое Савелия Крамарова в фильме «Эта веселая планета»?",
    options: {
      A: "Зайчик",
      B: "Фантомас",
      C: "Вечный двигатель",
      D: "Дед Мороз"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    correct_sound: "",
    wrong_sound: ""
  },
  {
    id: 9,
    topic: "xmas_movies",
    topicName: "Новогодние фильмы",
    question: "Где происходит главное действие фильма «Старый Новый год»?",
    options: {
      A: "В театре",
      B: "В бане",
      C: "В кафе",
      D: "В НИИ"
    },
    right_answer: "B",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    correct_sound: "",
    wrong_sound: ""
  },
  {
    id: 10,
    topic: "xmas_movies",
    topicName: "Новогодние фильмы",
    question: "Чем профессор Преображенский рекомендовал закусывать водку в фильме «Собачье сердце»?",
    options: {
      A: "Солеными огурцами",
      B: "Дичью",
      C: "Заливной рыбой",
      D: "Горячими закусками"
    },
    right_answer: "D",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    correct_sound: "",
    wrong_sound: ""
  },
  {
    id: 11,
    topic: "romania",
    topicName: "Румыния",
    question: "Что означает желтый цвет на румынском флаге?",
    options: {
      A: "Солнце",
      B: "Зерно",
      C: "Золото",
      D: "Гамалайга"
    },
    right_answer: "B",
    extra: "",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    image: `${SB_URL}images/rom_flag.webp`
  },
  {
    id: 12,
    topic: "romania",
    topicName: "Румыния",
    question: "Как называется румынский футбольный клуб?",
    options: {
      A: "Газ Метан",
      B: "Газ Пропан",
      C: "Газ Бутан",
      D: "Газ Этан"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    image_extra: `${SB_URL}images/metan.png`
  },
  {
    id: 13,
    topic: "romania",
    topicName: "Румыния",
    question: "Какой традиционный румынский танец исполняется в кругу?",
    options: {
      A: "Тарантелла",
      B: "Брасовянка",
      C: "Хора",
      D: "Ча-ча-ча"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q1_15.mp3`
  },
  {
    id: 14,
    topic: "romania",
    topicName: "Румыния",
    question: "Какой румынский музыкант прославился игрой на панфлейте?",
    options: {
      A: "Джордж Энеску",
      B: "Андре Рьё",
      C: "Георге Замфир",
      D: "Владимир Косма"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    image_extra: `${SB_URL}images/panflute.png`
  },
  {
    id: 15,
    topic: "romania",
    topicName: "Румыния",
    question: "Какой румынский правитель основал Валахийское княжество?",
    options: {
      A: "Басараб I",
      B: "Стефан чел Маре",
      C: "Влад Цепеш",
      D: "Мирча чел Бэтрын"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q1_15.mp3`
  },
  {
    id: 16,
    topic: "romania",
    topicName: "Румыния",
    question: "Кто автор знаменитой картины \"Девушка в красном платье\" (также известной как \"Девушка с шарфом\")?",
    options: {
      A: "Николае Григореску",
      B: "Константин Лекка",
      C: "Штефан Лучиан",
      D: "Николае Тоница"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    image: `${SB_URL}images/red_girl.png`
  },
  {
    id: 17,
    topic: "romania",
    topicName: "Румыния",
    question: "Кто автор скульптуры \"Колонна Бесконечности\"?",
    options: {
      A: "Константин Брынкуши",
      B: "Димитрие Пачиуреа",
      C: "Корнел Медреа",
      D: "Марчел Олинеску"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q1_15.mp3`,
    image: `${SB_URL}images/infinity.png`
  },
  {
    id: 18,
    topic: "romania",
    topicName: "Румыния",
    question: "В каком году Румыния получила независимость от Османской империи?",
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
    topicName: "Румыния",
    question: "Какой замок в Румынии считается резиденцией графа Дракулы?",
    options: {
      A: "Замок Кантакузино",
      B: "Замок Корвин",
      C: "Замок Пелеш",
      D: "Замок Бран"
    },
    right_answer: "D",
    sound: `${SB_URL}sounds/q1_15.mp3`
  },
  {
    id: 20,
    topic: "romania",
    topicName: "Румыния",
    question: "Президент Румынии:",
    options: {
      A: "Траян Бэсеску",
      B: "Кэлин Джорджеску",
      C: "Никушор Дан",
      D: "Клаус Йоханнис"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q1_15.mp3`
  },
  {
    id: 21,
    topic: "russia",
    topicName: "Россия",
    question: "Как называется русский город, который считается колыбелью российского флота?",
    options: {
      A: "Санкт-Петербург",
      B: "Астрахань",
      C: "Мурманск",
      D: "Воронеж"
    },
    right_answer: "D",
    sound: `${SB_URL}sounds/q6_10.mp3`
  },
  {
    id: 22,
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
    sound: `${SB_URL}sounds/q6_10.mp3`
  },
  {
    id: 23,
    topic: "russia",
    topicName: "Россия",
    question: "Какую знаменитую игру изобрели в России?",
    options: {
      A: "Тетрис",
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
    topicName: "Россия",
    question: "Какой из этих объектов сопоставим с площадью территории России?",
    options: {
      A: "Луна",
      B: "Плутон",
      C: "Тихий океан",
      D: "Звезда Смерти из Звездных Войн"
    },
    right_answer: "B",
    sound: `${SB_URL}sounds/q6_10.mp3`
  },
  {
    id: 25,
    topic: "russia",
    topicName: "Россия",
    question: "Сколько морей омывают берега России?",
    options: {
      A: "5",
      B: "10",
      C: "13",
      D: "20"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q6_10.mp3`,
    extra: "Берега России омывают 13 морей..."
  },
  {
    id: 26,
    topic: "russia",
    topicName: "Россия",
    question: "Какой из этих городов считается самым древним в России?",
    options: {
      A: "Москва",
      B: "Великий Новгород",
      C: "Старая Ладога",
      D: "Дербент"
    },
    right_answer: "D",
    sound: `${SB_URL}sounds/q6_10.mp3`,
    extra: "Дербент считается самым древним городом России..."
  },
  {
    id: 27,
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
    sound: `${SB_URL}sounds/q6_10.mp3`
  },
  {
    id: 28,
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
    sound: `${SB_URL}sounds/q6_10.mp3`
  },
  {
    id: 29,
    topic: "russia",
    topicName: "Россия",
    question: "Что такое «Раут»?",
    options: {
      A: "Помощник повара на кухне",
      B: "Блюдо, закуска, подаваемое к шампанскому",
      C: "Раунд в фехтовании",
      D: "Вечерний приём без танцев"
    },
    right_answer: "D",
    extra: "Раут — вечерний приём гостей...",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 30,
    topic: "russia",
    topicName: "Россия",
    question: "Что такое «Хрептюг»?",
    options: {
      A: "Полотняный мешок, куда насыпается овес для корма лошадей",
      B: "Название утюга у крепостных крестьян",
      C: "Пьяница, дебошир",
      D: "Парень на выданье в Волжской губернии"
    },
    right_answer: "A",
    extra: "Хрептюг — полотняный мешок для овса...",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 31,
    topic: "rusplus1",
    topicName: "Россия++",
    question: "Чем известен в России Георг Карл де Геккерен?",
    options: {
      A: "Он был учителем императора Петра I",
      B: "Он смертельно ранил А.С. Пушкина",
      C: "Он основал первую аптеку в Москве",
      D: "Он командовал русской эскадрой при Чесме"
    },
    right_answer: "B",
    extra: "Жорж Шарль Дантес...",
    image_extra: `${SB_URL}images/dantes.png`,
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 32,
    topic: "rusplus1",
    topicName: "Россия++",
    question: "Жорж Шарль Дантес и Шарль де Голль учились в разное время... В каком?",
    options: {
      A: "École de Saint-Cyr",
      B: "École Polytechnique",
      C: "École de Saint-Germain-en-Laye",
      D: "Université Paris-Sorbonne"
    },
    right_answer: "A",
    extra: "École spéciale militaire de Saint-Cyr...",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 33,
    topic: "rusplus1",
    topicName: "Россия++",
    question: "В каком европейском городе (ЕС) находится данный памятник императору Александру II?",
    options: {
      A: "Хельсинки, Финляндия",
      B: "София, Болгария",
      C: "Берлин, Германия",
      D: "Париж, Франция"
    },
    right_answer: "A",
    image: `${SB_URL}images/alexander2.png`,
    extra: "Памятник великому князю Финляндскому...",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 34,
    topic: "rusplus1",
    topicName: "Россия++",
    question: "Кем был граф Кирилл Григорьевич Разумовский... в 1746 году?",
    options: {
      A: "Министром финансов",
      B: "Пастухом",
      C: "Поваром",
      D: "Пивоваром"
    },
    right_answer: "B",
    image: `${SB_URL}images/razumovskiy.png`,
    extra: "В 1742 году Разумовский жил в деревне Лемеши...",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 35,
    topic: "rusplus1",
    topicName: "Россия++",
    question: "Какой великий русский учёный был ОДНОВРЕМЕННО почётным доктором университетов Оксфорда и Кембриджа?",
    options: {
      A: "Михаил Ломоносов",
      B: "Иван Павлов",
      C: "Николай Лобачевский",
      D: "Дмитрий Менделеев"
    },
    right_answer: "D",
    image_extra: `${SB_URL}images/mendeleev.png`,
    extra: "В 1894 г. во время своей поездки в Англию...",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 36,
    topic: "rusplus1",
    topicName: "Россия++",
    question: "Соседи по улице знали Дмитрия Ивановича Менделеева как прекрасного мастера по изготовлению чего?",
    options: {
      A: "Водки",
      B: "Сапог",
      C: "Переплёта книг",
      D: "Чемоданов"
    },
    right_answer: "D",
    extra: "Дмитрий Менделеев был страстным и искусным чемоданных дел мастером...",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 37,
    topic: "rusplus1",
    topicName: "Россия++",
    question: "Этот знаменитый русский хирург... Кто это?",
    options: {
      A: "Сергей Петрович Боткин",
      B: "Николай Иванович Пирогов",
      C: "Николай Васильевич Склифосовский",
      D: "Иван Петрович Павлов"
    },
    right_answer: "B",
    extra: "Николай Иванович Пирогов — основоположник военно-полевой хирургии...",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 38,
    topic: "rusplus1",
    topicName: "Россия++",
    question: "В каком городе России великий русский ученый Дмитрий Менделеев получил университетское образование?",
    options: {
      A: "Москва",
      B: "Казань",
      C: "Санкт-Петербург",
      D: "Новгород"
    },
    right_answer: "C",
    extra: "Дмитрий Иванович Менделеев окончил Главный педагогический институт...",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 39,
    topic: "rusplus1",
    topicName: "Россия++",
    question: "Кто из этих великих русских поэтов и писателей не служил в Министерстве иностранных дел?",
    options: {
      A: "Александр Сергеевич Пушкин",
      B: "Фёдор Иванович Тютчев",
      C: "Александр Сергеевич Грибоедов",
      D: "Михаил Юрьевич Лермонтов"
    },
    right_answer: "D",
    extra: "А.С. Пушкин был зачислен в Коллегию иностранных дел...",
    sound: `${SB_URL}sounds/q12.mp3`
  },
  {
    id: 40,
    topic: "rusplus1",
    topicName: "Россия++",
    question: "Что такое Ревизские сказки?",
    options: {
      A: "Переписные листы податного населения для налогового учёта",
      B: "Народные истории о царских чиновниках...",
      C: "Неопубликованный сборник сатирических басен...",
      D: "Рукописи Николая Гоголя..."
    },
    right_answer: "A",
    extra: "При подготовке к налоговой реформе...",
    sound: `${SB_URL}sounds/q12.mp3`,
    image: `${SB_URL}images/revskazki.png`
  },
  {
    id: 41,
    topic: "rusplus",
    topicName: "Россия+++",
    question: "Королева Англии, королева Виктория. Кто был её крестным отцом?",
    options: {
      A: "Петр I",
      B: "Александр I",
      C: "Александр II",
      D: "Павел I"
    },
    right_answer: "B",
    extra: "Королева Виктория-Александрина...",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 42,
    topic: "rusplus",
    topicName: "Россия+++",
    question: "Согласно представлениям британских медиков XIX века... Какую «угрозу» они несли?",
    options: {
      A: "Вызывание полноты",
      B: "Порчу зубов",
      C: "Вызывали эротические фантазии",
      D: "Причину излишней нервозности"
    },
    right_answer: "C",
    extra: "В викторианскую эпоху существовала прямая связь...",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 43,
    topic: "rusplus",
    topicName: "Россия+++",
    question: "На каком языке говорила лучше всего... Александра Фёдоровна?",
    options: {
      A: "Английском",
      B: "Немецком",
      C: "Французском",
      D: "Русском"
    },
    right_answer: "A",
    extra: "Александра Фёдоровна лучше всего говорила на английском языке...",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 44,
    topic: "rusplus",
    topicName: "Россия+++",
    question: "В какой деревне родился Иван Сусанин?",
    options: {
      A: "Деревня Саметь под Костромой",
      B: "Село Красное-на-Горе",
      C: "Село Молвитино",
      D: "Деревня Деревеньки"
    },
    right_answer: "D",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 45,
    topic: "rusplus",
    topicName: "Россия+++",
    question: "Этот народ называет себя трескоедом. О ком идет речь?",
    options: {
      A: "Нивхи",
      B: "Поморы",
      C: "Тунгусы",
      D: "Карелы"
    },
    right_answer: "B",
    extra: "Вообще вся жизнь поморов строилась именно вокруг рыбного промысла...",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 46,
    topic: "rusplus",
    topicName: "Россия+++",
    question: "Кто такие «настоящие люди»?",
    options: {
      A: "Калмыки",
      B: "Саамы",
      C: "Чукчи",
      D: "Эвены"
    },
    right_answer: "C",
    extra: "Чукчи (в переводе на русский язык «настоящие люди»)...",
    sound: `${SB_URL}sounds/q11_15.mp3`
  },
  {
    id: 47,
    topic: "rusplus",
    topicName: "Россия+++",
    question: "На чьей сказке основан сюжет балета «Щелкунчик»?",
    options: {
      A: "Братьев Гримм",
      B: "Ганса Христиана Андерсена",
      C: "Шарля Перро",
      D: "Эрнста Теодора Амадея Гофмана"
    },
    right_answer: "D",
    sound: `${SB_URL}sounds/q11_15.mp3`,
    extra: "Эрнст Теодор Амадей Гофман"
  },
  {
    id: 48,
    topic: "rusplus",
    topicName: "Россия+++",
    question: "В каком году состоялась премьера балета «Щелкунчик» в Мариинском театре?",
    options: {
      A: "1877",
      B: "1888",
      C: "1892",
      D: "1898"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q11_15.mp3`,
    extra: "6 (18) декабря 1892 года"
  },
  {
    id: 49,
    topic: "rusplus",
    topicName: "Россия+++",
    question: "Какая страна традиционно «представлена» танцем «Шоколад»?",
    options: {
      A: "Италия",
      B: "Франция",
      C: "Испания",
      D: "Англия"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q11_15.mp3`,
    extra: "Танец «Шоколад» (испанский танец)..."
  },
  {
    id: 50,
    topic: "rusplus",
    topicName: "Россия+++",
    question: "Какой необычный музыкальный инструмент... Чайковский впервые использовал в «Щелкунчике»?",
    options: {
      A: "Вибрафон",
      B: "Челеста",
      C: "Колокола",
      D: "Ксилофон"
    },
    right_answer: "B",
    sound: `${SB_URL}sounds/q11_15.mp3`,
    extra: "Челеста"
  },
  {
    id: 51,
    topic: "nuclear",
    topicName: "Физика",
    question: "Кто открыл явление радиоактивности?",
    options: {
      A: "Эрнест Резерфорд",
      B: "Мария Кюри",
      C: "Анри Беккерель",
      D: "Джеймс Чедвик"
    },
    right_answer: "C",
    extra: "Анри Беккерель открыл явление радиоактивности в 1896 году...",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 52,
    topic: "nuclear",
    topicName: "Физика",
    question: "Кто предложил теорию атомного ядра как положительно заряженную массу...?",
    options: {
      A: "Эрнест Резерфорд",
      B: "Нильс Бор",
      C: "Дж. Дж. Томсон",
      D: "Альберт Эйнштейн"
    },
    right_answer: "A",
    extra: "Эрнест Резерфорд предложил планетарную модель атома...",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 53,
    topic: "nuclear",
    topicName: "Физика",
    question: "Как называется элемент, который используется в ядерных реакторах...?",
    options: {
      A: "Уран-235",
      B: "Водород-1",
      C: "Торий-232",
      D: "Плутоний-239"
    },
    right_answer: "A",
    extra: "Уран-235 используется в качестве топлива...",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 54,
    topic: "nuclear",
    topicName: "Физика",
    question: "Что... было причиной начала расширения Вселенной?",
    options: {
      A: "Сингулярность",
      B: "Поглощение черными дырами",
      C: "Коллапс темной материи",
      D: "Влияние темной энергии"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 55,
    topic: "nuclear",
    topicName: "Физика",
    question: "Что такое космическое микроволновое фоновое излучение...?",
    options: {
      A: "Гравитационные волны",
      B: "Рентгеновское излучение",
      C: "Реликтовое излучение",
      D: "Пульсации излучения"
    },
    right_answer: "C",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 56,
    topic: "nuclear",
    topicName: "Физика",
    question: "Когда произошел Большой взрыв...?",
    options: {
      A: "10 миллиардов лет назад",
      B: "13 миллиардов лет назад",
      C: "5 миллиардов лет назад",
      D: "20 миллиардов лет назад"
    },
    right_answer: "B",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 57,
    topic: "nuclear",
    topicName: "Физика",
    question: "Кто является автором теории относительности?",
    options: {
      A: "Нильс Бор",
      B: "Исаак Ньютон",
      C: "Галилео Галилей",
      D: "Альберт Эйнштейн"
    },
    right_answer: "D",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 58,
    topic: "nuclear",
    topicName: "Физика",
    question: "Как меняется частота звуковых волн, если источник звука приближается?",
    options: {
      A: "Частота увеличивается",
      B: "Частота уменьшается",
      C: "Частота остаётся неизменной",
      D: "Звук исчезает"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 59,
    topic: "nuclear",
    topicName: "Физика",
    question: "Какое из утверждений является следствием закона Хаббла?",
    options: {
      A: "Галактики с большей удаленностью движутся быстрее",
      B: "Галактики с меньшей удаленностью движутся быстрее",
      C: "Все галактики на одном расстоянии",
      D: "Вселенная остаётся неизменной"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q13.mp3`
  },
  {
    id: 60,
    topic: "nuclear",
    topicName: "Физика",
    question: "Какое значение имеет элементарный заряд электрона?",
    options: {
      A: "1.6 × 10⁻¹⁹ Кл",
      B: "2.4 × 10⁻¹⁸ Кл",
      C: "3.2 × 10⁻¹⁹ Кл",
      D: "0 Кл"
    },
    right_answer: "A",
    sound: `${SB_URL}sounds/q13.mp3`
  }
];
