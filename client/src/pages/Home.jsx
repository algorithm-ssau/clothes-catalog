import { useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [cart, setCart] = useState([]);

  const popularProducts = [
    {
      id: 1,
      name: "Джинсы скинни",
      description: "Классические синие джинсы",
      price: 3499,
      image: "https://via.placeholder.com/300x400",
    },
    {
      id: 2,
      name: "Летнее платье",
      description: "Хлопковое платье с цветочным принтом",
      price: 2899,
      image: "https://via.placeholder.com/300x400",
    },
    // Добавьте больше товаров по аналогии
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} добавлен в корзину!`);
  };

  return (
    <main>
      <section className="hero">
        <h1>Модная одежда на любой вкус</h1>
        <button className="btn btn-large">Перейти к покупкам</button>
      </section>

      <section className="popular-products">
        <h2>Популярные товары</h2>
        <div className="products-grid">
          {popularProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
