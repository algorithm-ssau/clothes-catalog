import { useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import LoginModal from "../components/LoginModal";

const Categories = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const allProducts = [
    { id: 1, name: "Платье", category: "women", price: 2500, image: "..." },
    { id: 2, name: "Блузка", category: "women", price: 1800, image: "..." },
    { id: 3, name: "Рубашка", category: "men", price: 2200, image: "..." },
    {
      id: 4,
      name: "Футболка детская",
      category: "kids",
      price: 900,
      image: "...",
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
