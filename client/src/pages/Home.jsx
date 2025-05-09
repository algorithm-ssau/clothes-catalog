import { useState } from "react";
import ProductCard from "../components/ProductCard";
import LoginModal from "../components/LoginModal";

const Home = () => {
  const popularProducts = [
    {
      id: 1,
      name: "Джинсы скинни",
      description: "Классические синие джинсы",
      price: 3499,
      image: "/images/jeas.jpg",
    },
    {
      id: 2,
      name: "Летнее платье",
      description: "Хлопковое платье с цветочным принтом",
      price: 2899,
      image: "/images/dress.jpg",
    },
    {
      id: 3,
      name: "Рубашка бордовая",
      description: "Рубашка бордовая хлопковая",
      price: 2399,
      image: "/images/shirt.jpg",
    },
    // Добавьте больше товаров
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
