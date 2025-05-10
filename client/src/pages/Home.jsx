import { useState } from "react";
import ProductCard from "../components/ProductCard";
import LoginModal from "../components/LoginModal";
import HeroBanner from "../components/HeroBanner";

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
    },
    {
      id: 2,
      name: "Летнее платье",
      description: "Хлопковое платье с цветочным принтом",
      price: 2899,
      image: "/images/dress.jpg",
      details: "Состав: 100% хлопок. Уход: ручная стирка",
      sizes: ["S", "M", "L"],
    },
    {
      id: 3,
      name: "Рубашка бордовая",
      description: "Рубашка бордовая хлопковая",
      price: 2399,
      image: "/images/shirt.jpg",
      details: "Состав: 100% хлопок. Уход: машинная стирка при 40°C",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 4,
      name: "Кроссовки спортивные",
      description: "Удобные кроссовки для бега и повседневной носки",
      price: 4999,
      image: "/images/boots.jpeg",
      details: "Материал верха: синтетическая ткань. Подошва: резина",
      sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    },
    {
      id: 11,
      name: "Толстовка спортивные",
      description: "Толстовка в стиле кежуал повседневная стильная",
      price: 6999,
      image: "/images/tolstovka.jpeg",
      details:
        "Состав: 20% хлопок, 80% полиестер. Уход: машинная стирка при 40°C",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 12,
      name: "Гавайская рубашка летняя",
      description: "Летняя стильная рубашка легкая для повседневной носки",
      price: 1200,
      image: "/images/havai.jpg",
      details:
        "Состав: 100% синтетика. Уход: машинная стирка при 30°C",
      sizes: ["S", "M", "L", "XL"],
    },
  ];

  return (
    <main>
      <LoginModal />

      <HeroBanner />

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
