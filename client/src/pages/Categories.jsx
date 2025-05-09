import { useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import LoginModal from "../components/LoginModal";

const Categories = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const allProducts = [
    {
      id: 1,
      name: "Платье летнее",
      category: "women",
      price: 2500,
      image: "/images/women-dress.jpg",
      description: "Легкое летнее платье из хлопка",
      details: "Состав: 100% хлопок. Уход: ручная стирка",
      sizes: ["S", "M", "L"],
      colors: ["Красный", "Черный", "Белый"],
    },
    {
      id: 2,
      name: "Блузка офисная",
      category: "women",
      price: 1800,
      image: "/images/women-blouse.jpg",
      description: "Элегантная блузка для офиса",
      details: "Состав: 95% хлопок, 5% эластан. Уход: стирка при 30°C",
      sizes: ["XS", "S", "M"],
      colors: ["Белый", "Голубой", "Бежевый"],
    },
    {
      id: 3,
      name: "Рубашка мужская",
      category: "men",
      price: 2200,
      image: "/images/men-shirt.jpg",
      description: "Классическая мужская рубашка",
      details: "Состав: 100% хлопок. Уход: машинная стирка при 40°C",
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["Голубой", "Белый", "Серый"],
    },
    {
      id: 4,
      name: "Футболка детская",
      category: "kids",
      price: 900,
      image: "/images/kids-tshirt.jpg",
      description: "Яркая футболка для детей",
      details: "Состав: 100% хлопок. Уход: машинная стирка при 30°C",
      sizes: ["104", "110", "116", "122"],
      colors: ["Красный", "Синий", "Желтый", "Зеленый"],
    },
    {
      id: 5,
      name: "Джинсы мужские",
      category: "men",
      price: 3200,
      image: "/images/men-jeans.jpg",
      description: "Классические мужские джинсы",
      details: "Состав: 98% хлопок, 2% эластан. Уход: стирка при 30°C",
      sizes: ["W30", "W32", "W34", "W36", "W38"],
      colors: ["Синий", "Черный"],
    },
    {
      id: 6,
      name: "Юбка карандаш",
      category: "women",
      price: 2100,
      image: "/images/women-skirt.jpg",
      description: "Стильная юбка-карандаш для офиса",
      details: "Состав: 70% шерсть, 30% полиэстер. Уход: химчистка",
      sizes: ["S", "M", "L"],
      colors: ["Черный", "Серый", "Синий"],
    },
  ];

  const categories = ["women", "men", "kids"];

  const handleFilter = (category, maxPrice) => {
    let filtered = allProducts;

    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (maxPrice) {
      filtered = filtered.filter((p) => p.price <= maxPrice);
    }

    setFilteredProducts(filtered);
  };

  return (
    <main className="categories-page">
      <LoginModal />

      <CategoryFilter categories={categories} onFilter={handleFilter} />

      <section className="products-section">
        <div className="products-grid">
          {(filteredProducts.length ? filteredProducts : allProducts).map(
            (product) => (
              <ProductCard key={product.id} product={product} />
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default Categories;
