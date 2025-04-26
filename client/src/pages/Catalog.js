import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import { products } from "../data/products";

export default function Catalog() {
  const [filter, setFilter] = useState({
    category: "",
    type: "",
    priceRange: [0, 10000],
    search: "",
  });

  const filteredProducts = products.filter((product) => {
    return (
      (filter.category ? product.category === filter.category : true) &&
      (filter.type ? product.type === filter.type : true) &&
      product.price >= filter.priceRange[0] &&
      product.price <= filter.priceRange[1] &&
      (product.name.toLowerCase().includes(filter.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filter.search.toLowerCase()))
    );
  });

  return (
    <div className="catalog-page">
      <Filter filter={filter} setFilter={setFilter} />

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-results">
            Товары не найдены. Измените параметры фильтрации.
          </p>
        )}
      </div>
    </div>
  );
}
