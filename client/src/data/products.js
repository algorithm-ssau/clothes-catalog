const categoriesData = [
  {
    id: "women",
    name: "Женская одежда",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
  },
  {
    id: "men",
    name: "Мужская одежда",
    image: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d",
  },
  {
    id: "kids",
    name: "Детская одежда",
    image: "https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7",
  },
  {
    id: "accessories",
    name: "Аксессуары",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
  },
  {
    id: "shoes",
    name: "Обувь",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: "sport",
    name: "Спортивная одежда",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
  },
];

const allProducts = [
  // Женская одежда
  {
    id: 1,
    name: "Элегантное платье миди",
    description: "Платье из плотного хлопка с запахом",
    price: 4599,
    category: "women",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
    details:
      "Состав: 95% хлопок, 5% эластан. Длина миди. Стиль: повседневный, офисный",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Черный", "Бежевый", "Бордовый"],
    rating: 4.8,
  },
  {
    id: 2,
    name: "Джинсы скинни с высокой талией",
    description: "Классические синие джинсы скинни",
    price: 3499,
    category: "women",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    details: "Состав: 98% хлопок, 2% эластан. Уход: стирка при 30°C",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Синий", "Черный"],
    rating: 4.5,
  },

  // Мужская одежда
  {
    id: 3,
    name: "Классическая рубашка",
    description: "Хлопковая рубашка с отложным воротником",
    price: 2299,
    category: "men",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
    details: "Состав: 100% хлопок. Стиль: классический, офисный",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Белый", "Голубой", "Серый"],
    rating: 4.7,
  },

  // Детская одежда
  {
    id: 4,
    name: "Футболка с принтом",
    description: "Яркая хлопковая футболка для детей",
    price: 899,
    category: "kids",
    image: "https://images.unsplash.com/photo-1583744946564-b52d01e2da64",
    details: "Состав: 100% хлопок. Возраст: 3-10 лет",
    sizes: ["104", "110", "116", "122"],
    colors: ["Красный", "Синий", "Желтый"],
    rating: 4.9,
  },

  // Аксессуары
  {
    id: 5,
    name: "Кожаный ремень",
    description: "Гладкий кожаный ремень с металлической пряжкой",
    price: 1599,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500",
    details: "Материал: натуральная кожа. Ширина: 3.5 см",
    sizes: ["S", "M", "L"],
    colors: ["Коричневый", "Черный"],
    rating: 4.6,
  },

  // Обувь
  {
    id: 6,
    name: "Кроссовки спортивные",
    description: "Удобные кроссовки для бега и повседневной носки",
    price: 5499,
    category: "shoes",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
    details: "Материал верха: синтетическая сетка. Подошва: EVA",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"],
    colors: ["Белый", "Черный", "Синий"],
    rating: 4.8,
  },

  // Спортивная одежда
  {
    id: 7,
    name: "Спортивный костюм",
    description: "Легкий костюм для тренировок и отдыха",
    price: 3899,
    category: "sport",
    image: "https://images.unsplash.com/photo-1556812191-381c7e7d96d6",
    details: "Состав: 85% полиэстер, 15% хлопок. Быстросохнущий материал",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Черный", "Серый", "Синий"],
    rating: 4.7,
  },

  // Добавьте еще больше товаров по аналогии
];
