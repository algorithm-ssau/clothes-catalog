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
      id: 5,
      name: "Платье летнее",
      category: "women",
      price: 2500,
      image: "/images/dress.jpeg",
      description: "Легкое летнее платье из хлопка",
      details: "Состав: 100% хлопок. Уход: ручная стирка",
      sizes: ["S", "M", "L"],
    },
    {
      id: 6,
      name: "Блузка офисная",
      category: "women",
      price: 1800,
      image: "/images/blosee.jpg",
      description: "Элегантная блузка для офиса",
      details: "Состав: 95% хлопок, 5% эластан. Уход: стирка при 30°C",
      sizes: ["XS", "S", "M"],
    },
    {
      id: 7,
      name: "Рубашка мужская",
      category: "men",
      price: 2200,
      image: "/images/manshirt.jpg",
      description: "Классическая мужская рубашка",
      details: "Состав: 100% хлопок. Уход: машинная стирка при 40°C",
      sizes: ["M", "L", "XL", "XXL"],
    },
    {
      id: 8,
      name: "Футболка детская",
      category: "kids",
      price: 900,
      image: "/images/kid.jpeg",
      description: "Яркая футболка для детей",
      details: "Состав: 100% хлопок. Уход: машинная стирка при 30°C",
      sizes: ["104", "110", "116", "122"],
    },
    {
      id: 9,
      name: "Джинсы мужские",
      category: "men",
      price: 3200,
      image: "/images/manjeans.jpeg",
      description: "Классические мужские джинсы",
      details: "Состав: 98% хлопок, 2% эластан. Уход: стирка при 30°C",
      sizes: ["W30", "W32", "W34", "W36", "W38"],
    },
    {
      id: 10,
      name: "Юбка длинная",
      category: "women",
      price: 2100,
      image: "/images/womenshirt.jpg",
      description: "Стильная юбка-карандаш для офиса",
      details: "Состав: 70% шерсть, 30% полиэстер. Уход: химчистка",
      sizes: ["S", "M", "L"],
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
      details: "Состав: 100% синтетика. Уход: машинная стирка при 30°C",
      sizes: ["S", "M", "L", "XL"],
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
