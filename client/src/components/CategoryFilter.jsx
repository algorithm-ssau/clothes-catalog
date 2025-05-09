import { useState } from "react";

const CategoryFilter = ({ categories, onFilter }) => {
  const [priceRange, setPriceRange] = useState(10000);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onFilter(category, priceRange);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceRange(value);
    onFilter(activeCategory, value);
  };

  return (
    <div className="filters">
      <h3>Фильтры</h3>

      <div className="filter-section">
        <h4>Категории</h4>
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category === "women"
                ? "Женщины"
                : category === "men"
                ? "Мужчины"
                : "Дети"}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Цена до: {priceRange} ₽</h4>
        <input
          type="range"
          min="0"
          max="20000"
          step="500"
          value={priceRange}
          onChange={handlePriceChange}
          className="price-filter"
        />
        <div className="price-range">
          <span>0 ₽</span>
          <span>20 000 ₽</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
