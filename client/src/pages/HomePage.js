import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Мужская одежда", path: "/clothing?category=men" },
  { id: 2, name: "Женская одежда", path: "/clothing?category=women" },
  { id: 3, name: "Детская одежда", path: "/clothing?category=kids" },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <h1>Добро пожаловать в наш каталог одежды</h1>
      <div className="categories">
        <h2>Категории:</h2>
        <div className="category-grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="category-card"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
