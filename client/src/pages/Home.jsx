import { useState } from "react";
import ProductCard from "../components/ProductCard";
import LoginModal from "../components/LoginModal";

const Home = () => {
  const popularProducts = [
    {
      id: 1,
      name: "Джинсы скинни",
      description: "Классические синие джинсы скинни с высокой посадкой",
      price: 3499,
      image: "/images/jeas.jpg",
      details: "Состав: 98% хлопок, 2% эластан. Уход: стирка при 30°C",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Синий", "Черный"],
    },
    {
      id: 2,
      name: "Летнее платье",
      description: "Хлопковое платье с цветочным принтом",
      price: 2899,
      image: "/images/dress.jpg",
      details: "Состав: 100% хлопок. Уход: ручная стирка",
      sizes: ["S", "M", "L"],
      colors: ["Белый", "Голубой", "Розовый"],
    },
    {
      id: 3,
      name: "Рубашка бордовая",
      description: "Рубашка бордовая хлопковая",
      price: 2399,
      image: "/images/shirt.jpg",
      details: "Состав: 100% хлопок. Уход: машинная стирка при 40°C",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Бордовый", "Синий", "Белый"],
    },
    {
      id: 4,
      name: "Кроссовки спортивные",
      description: "Удобные кроссовки для бега и повседневной носки",
      price: 4999,
      image: "/images/boots.jpeg",
      details: "Материал верха: синтетическая ткань. Подошва: резина",
      sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
      colors: ["Черный", "Белый", "Серый"],
    },
  ];

  return (
    <main>
      <LoginModal />

      <section className="hero">
        <h1>Модная одежда на любой вкус</h1>
        <button className="btn btn-large">Перейти к покупкам</button>
      </section>

      <section className="popular-products">
        <h2>Популярные товары</h2>
        <div className="products-grid">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
