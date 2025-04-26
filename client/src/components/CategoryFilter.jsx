import { useState } from "react";

const CategoryFilter = ({ categories, onFilter }) => {
  const [priceRange, setPriceRange] = useState(10000);

  return (
    <div className="filters">
      <h3>Фильтры</h3>
      <div className="filter-section">
        <h4>Категории</h4>
        {categories.map((category) => (
          <button key={category} onClick={() => onFilter(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="filter-section">
        <h4>Цена до: {priceRange} ₽</h4>
        <input
          type="range"
          min="0"
          max="20000"
          value={priceRange}
          onChange={(e) => {
            setPriceRange(e.target.value);
            onFilter(null, e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default CategoryFilter;
