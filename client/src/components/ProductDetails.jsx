import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);

  const products = [
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
    // Добавьте другие товары
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div className="product-not-found">Товар не найден</div>;

  const handleAddToCart = () => {
    if (!user) {
      alert("Для добавления товаров в корзину необходимо авторизоваться");
      return;
    }
    addToCart(product);
    alert(`${product.name} добавлен в корзину!`);
  };

  return (
    <div className="product-details-container">
      <Link to="/categories" className="back-link">
        ← Назад к каталогу
      </Link>

      <div className="product-details">
        <div className="product-images">
          <img src={product.image} alt={product.name} className="main-image" />
          <div className="thumbnails">
            {/* Здесь могут быть дополнительные изображения */}
            <img src={product.image} alt={product.name} className="thumbnail" />
            <img src={product.image} alt={product.name} className="thumbnail" />
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">{product.price.toLocaleString()} ₽</p>
          <p className="description">{product.description}</p>

          <div className="details-section">
            <h3>Подробности</h3>
            <p>{product.details}</p>
          </div>

          {product.colors && product.colors.length > 0 && (
            <div className="colors-section">
              <h3>Цвета</h3>
              <div className="color-options">
                {product.colors.map((color) => (
                  <button key={color} className="color-option">
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.sizes && product.sizes.length > 0 && (
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
          )}

          <button className="btn btn-add-to-cart" onClick={handleAddToCart}>
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
