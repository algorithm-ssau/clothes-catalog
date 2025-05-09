import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Предотвращаем переход по ссылке
    e.stopPropagation(); // Останавливаем всплытие события
    if (!user) {
      alert("Для добавления товаров в корзину необходимо авторизоваться");
      return;
    }
    addToCart(product);
    alert(`${product.name} добавлен в корзину!`);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
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
    </Link>
  );
};

export default ProductCard;
