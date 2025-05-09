import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);

  // В реальном приложении товары должны загружаться из API
  const products = [
    {
      id: 1,
      name: "Джинсы скинни",
      description: "Классические синие джинсы скинни с высокой посадкой",
      price: 3499,
      image: "https://via.placeholder.com/600x800",
      details: "Состав: 98% хлопок, 2% эластан. Уход: стирка при 30°C",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Синий", "Черный"],
    },
    // Добавьте другие товары
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div>Товар не найден</div>;

  const handleAddToCart = () => {
    if (!user) {
      alert("Для добавления товаров в корзину необходимо авторизоваться");
      return;
    }
    addToCart(product);
    alert(`${product.name} добавлен в корзину!`);
  };

  return (
    <div className="product-details">
      <div className="product-images">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">{product.price} ₽</p>
        <p className="description">{product.description}</p>

        <div className="details-section">
          <h3>Подробности</h3>
          <p>{product.details}</p>
        </div>

        <div className="sizes-section">
          <h3>Размеры</h3>
          <div className="size-buttons">
            {product.sizes.map((size) => (
              <button key={size} className="size-btn">
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="btn btn-add-to-cart" onClick={handleAddToCart}>
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
