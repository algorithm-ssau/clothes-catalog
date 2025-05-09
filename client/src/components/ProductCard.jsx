// ProductCard.jsx
import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const handleAddToCart = () => {
    if (!user) {
      alert("Для добавления товаров в корзину необходимо авторизоваться");
      return;
    }
    addToCart(product);
    alert(`${product.name} добавлен в корзину!`);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <span className="price">{product.price.toLocaleString()} ₽</span>
        <button className="btn" onClick={handleAddToCart}>
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
