import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        FashionStore
      </Link>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/categories">Категории</Link>
      </nav>
      <div className="auth-buttons">
        <button className="btn">Вход</button>
        <button className="btn">Регистрация</button>
      </div>
    </header>
  );
};

export default Header;
