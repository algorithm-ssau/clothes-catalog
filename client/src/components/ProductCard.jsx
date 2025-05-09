import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!user) {
      alert("Для добавления товаров в корзину необходимо авторизоваться");
      return;
    }
    if (!selectedSize) {
      alert("Пожалуйста, выберите размер");
      return;
    }
    addToCart({ ...product, selectedSize });
    alert(`${product.name} (размер: ${selectedSize}) добавлен в корзину!`);
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

        <div className="size-selector">
          <select
            value={selectedSize || ""}
            onChange={(e) => setSelectedSize(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          >
            <option value="">Выберите размер</option>
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <button className="btn" onClick={handleAddToCart}>
          В корзину
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
