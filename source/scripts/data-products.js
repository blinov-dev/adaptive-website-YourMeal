const products = [
  //Бургеры
  {
    id: 1,
    title: 'Мясная бомба',
    price: 689,
    image: 'meeat-bomb-burger@1x.png',
    category: 'burgers',
    description:
      'Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.',
    ingredients: [
      'Пшеничная булочка',
      'Котлета из говядины',
      'Красный лук',
      'Листья салата',
      'Соус горчичный',
    ],
    isAvailable: true,
    weight: '520г, ккал 430',
  },
  {
    id: 2,
    title: 'Супер сырный',
    price: 550,
    image: 'super-cheese-burger@1x.png',
    category: 'burgers',
    description:
      'Супер сырный бургер! Две котлеты из свежего говяжего мяса и много сыра.',
    ingredients: [
      'Пшеничная булочка',
      'Две котлеты из говядины',
      'Красный лук',
      'Маринованные огурцы',
      'Соус сырный',
      'Сыр Чеддер',
    ],
    isAvailable: true,
    weight: '512г, ккал 410',
  },
  {
    id: 3,
    title: 'Сытный',
    price: 480,
    image: 'satisfying-burger@1x.png',
    category: 'burgers',
    description:
      'Мега сытный бургер! Две котлеты из свежего говяжего мяса и обжаренный бекон, накормят вас досыта.',
    ingredients: [
      'Булочка с кунжутом',
      'Две котлеты из говядины',
      'Жаренный бекон',
      'Красный лук',
      'Маринованные огурцы',
      'Соус сырный',
      'Сыр Чеддер',
    ],
    isAvailable: true,
    weight: '470г, ккал 460',
  },
  {
    id: 4,
    title: 'Тяжелый удар',
    price: 639,
    image: 'heavy-blow-burger@1x.png',
    category: 'burgers',
    description: 'Много ововщей впридачу к двум жирнючим котлетам',
    ingredients: [
      'Булочка',
      'Две котлеты из свинино-говядины',
      'Красный лук',
      'Маринованные огурцы',
      'Свежие помидоры',
      'Листья салата',
      'Кетчунез',
      'Плавленный сыр',
    ],
    isAvailable: true,
    weight: '580г, ккал 470',
  },
  {
    id: 5,
    title: 'Вечная классика',
    price: 450,
    image: 'classic-burger@1x.png',
    category: 'burgers',
    description: 'Классический бургер',
    ingredients: [
      'Булочка с кунжутом',
      'Котлета из говядины',
      'Красный лук',
      'Маринованные огурцы',
      'Свежие помидоры',
      'Листья салата',
      'Кетчунез',
      'Плавленный сыр',
    ],
    isAvailable: true,
    weight: '450г, ккал 470',
  },
  {
    id: 6,
    title: 'Итальянский',
    price: 560,
    image: 'italian-burger@1x.png',
    category: 'burgers',
    description: 'Бургер с нотками итальянской кухни',
    ingredients: [
      'Булочка из чиабатты',
      'Котлета из говядины',
      'Красный лук',
      'Прошутто',
      'Свежие помидоры',
      'Листья салата',
      'Соус песто',
      'Пармезан',
    ],
    isAvailable: true,
    weight: '510г, ккал 490',
  },
  //Закуски
  {
    id: 7,
    title: 'Начос',
    price: 250,
    image: 'nachos-snacks@1x.png',
    category: 'snacks',
    description: 'Классический начос',
    ingredients: ['Начос', 'Соус на выбор'],
    isAvailable: true,
    weight: '220г, ккал 350',
  },
  {
    id: 8,
    title: 'Картошка фри',
    price: 245,
    image: 'french-fried-snacks@1x.png',
    category: 'snacks',
    description: 'Хрустящая картошка фри',
    ingredients: ['Картошка фри', 'Соус на выбор'],
    isAvailable: true,
    weight: '180г, ккал 320',
  },
  {
    id: 9,
    title: 'Луковые кольца',
    price: 245,
    image: 'onion-rings-snacks@1x.png',
    category: 'snacks',
    description: 'Луковые кольца, обжаренные во фретюре',
    ingredients: ['Луковые кольца', 'Соус на выбор'],
    isAvailable: true,
    weight: '160г, ккал 280',
  },
  //Хот-доги
  {
    id: 10,
    title: 'Домашний хот-дог',
    price: 290,
    image: 'home-hotdog-hotdogs@1x.png',
    category: 'hotdogs',
    description: 'Хот-дог с нотками домашней эстетики',
    ingredients: ['Булочка', 'Сосиска', 'Бекон', 'Зеленый лук', 'Кетчунез'],
    isAvailable: true,
    weight: '250г, ккал 310',
  },
  {
    id: 11,
    title: 'Жгучий хот-дог',
    price: 239,
    image: 'hot-hotdog-hotdogs@1x.png',
    category: 'hotdogs',
    description: 'Хот-дог с острой колбаской и жгучим перцем',
    ingredients: [
      'Булочка',
      'Сосиска',
      'Перец Чили',
      'Зеленый лук',
      'Острый соус',
    ],
    isAvailable: true,
    weight: '245г, ккал 280',
  },
  {
    id: 12,
    title: 'Классический хот-дог',
    price: 220,
    image: 'classic-hotdog-hotdogs@1x.png',
    category: 'hotdogs',
    description: 'Хот-дог обычнй',
    ingredients: ['Булочка', 'Сосиска', 'Горчица и кетчуп'],
    isAvailable: true,
    weight: '215г, ккал 230',
  },
  //Комбо
  {
    id: 13,
    title: 'Комбо 1',
    price: 780,
    image: 'combo-1@1x.jpg',
    category: 'combo',
    description: 'Комбо набор №1',
    ingredients: ['Пицца', 'Бургер', 'Картошка фри'],
    isAvailable: true,
    weight: '1500г, ккал 3700',
  },
  {
    id: 14,
    title: 'Комбо 2',
    price: 980,
    image: 'combo-2@1x.jpg',
    category: 'combo',
    description: 'Комбо набор №2',
    ingredients: ['Пицца', 'Бургер', 'Соус', 'Картошка фри', 'Напиток'],
    isAvailable: true,
    weight: '1800г, ккал 4000',
  },
  {
    id: 15,
    title: 'Комбо 3',
    price: 820,
    image: 'combo-3@1x.jpg',
    category: 'combo',
    description: 'Комбо набор №3',
    ingredients: ['Пицца', 'Бургер', 'Напиток'],
    isAvailable: true,
    weight: '1000г, ккал 2000',
  },
  //Шаурма
  {
    id: 16,
    title: 'Шарума 1',
    price: 230,
    image: 'shawarma-1@1x.png',
    category: 'shawarma',
    description: 'Шаурма №1',
    ingredients: ['Лаваш', 'Курица', 'Овощи'],
    isAvailable: true,
    weight: '300г, ккал 350',
  },
  {
    id: 17,
    title: 'Шарума 2',
    price: 330,
    image: 'shawarma-2@1x.png',
    category: 'shawarma',
    description: 'Шаурма №2',
    ingredients: ['Лаваш', 'Курица', 'Овощи'],
    isAvailable: true,
    weight: '400г, ккал 450',
  },
  //ВОК
  {
    id: 18,
    title: 'Вок 1',
    price: 230,
    image: 'wok-1@1x.png',
    category: 'wok',
    description: 'Вок №1',
    ingredients: ['Лапша', 'Курица', 'Овощи'],
    isAvailable: true,
    weight: '370г, ккал 300',
  },
  {
    id: 19,
    title: 'Вок 2',
    price: 340,
    image: 'wok-2@1x.png',
    category: 'wok',
    description: 'Вок №2',
    ingredients: ['Лапша', 'Курица', 'Овощи'],
    isAvailable: true,
    weight: '310г, ккал 280',
  },
  //Десерты
  {
    id: 20,
    title: 'Десерт 1',
    price: 410,
    image: 'dessert-1@1x.png',
    category: 'dessert',
    description: 'Десерт №1',
    ingredients: ['Суфле', 'Крем', 'Фрукты'],
    isAvailable: true,
    weight: '150г, ккал 370',
  },
  {
    id: 21,
    title: 'Десерт 2',
    price: 380,
    image: 'dessert-2@1x.png',
    category: 'dessert',
    description: 'Десерт №2',
    ingredients: ['Суфле', 'Крем', 'Фрукты'],
    isAvailable: true,
    weight: '120г, ккал 310',
  },
  //Соусы
  {
    id: 22,
    title: 'Соусы 1',
    price: 200,
    image: 'sauces-1@1x.png',
    category: 'sauces',
    description: 'Соусы №1',
    ingredients: ['Кетчуп', 'Майонез', 'Соевый'],
    isAvailable: true,
    weight: '150г, ккал 80',
  },
  {
    id: 23,
    title: 'Соусы 2',
    price: 150,
    image: 'sauces-2@1x.png',
    category: 'sauces',
    description: 'Соусы №2',
    ingredients: ['Кетчуп', 'Майонез', 'Соевый'],
    isAvailable: true,
    weight: '150г, ккал 80',
  },
  //Пицца
  {
    id: 24,
    title: 'Пицца 1',
    price: 200,
    image: 'pizza-1@1x.png',
    category: 'pizza',
    description: 'Пицца №1',
    ingredients: ['Тесто', 'Майонез', 'Колбаса'],
    isAvailable: true,
    weight: '450г, ккал 760',
  },
  {
    id: 25,
    title: 'Пицца 2',
    price: 150,
    image: 'pizza-2@1x.png',
    category: 'pizza',
    description: 'Пицца №2',
    ingredients: ['Тесто', 'Майонез', 'Колбаса'],
    isAvailable: true,
    weight: '550г, ккал 540',
  },
];

export { products };
