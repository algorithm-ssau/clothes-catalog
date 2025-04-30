import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import StarRating from "./StarRating";

const ProductCard = ({ product }) => {
  const { user } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!user) {
      alert("Для добавления товаров в корзину необходимо авторизоваться");
      return;
    }
    addToCart(product);
    alert(`${product.name} добавлен в корзину!`);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.price > 3000 && <span className="product-badge">Premium</span>}
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>

        <div className="product-meta">
          <StarRating rating={product.rating} />
          <span className="price">{product.price.toLocaleString()} ₽</span>
        </div>

        <button className="btn btn-add-to-cart" onClick={handleAddToCart}>
          В корзину
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
