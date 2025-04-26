import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

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
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span className="price">{product.price} ₽</span>
      <button className="btn" onClick={handleAddToCart}>
        В корзину
      </button>
    </Link>
  );
};

export default ProductCard;
