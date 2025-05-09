import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { user, setShowLogin, logout } = useContext(AuthContext);
  const { setShowCart, cartItems } = useContext(CartContext);

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
        {user ? (
          <>
            <span>Привет, {user.email}</span>
            <button className="btn" onClick={logout}>
              Выйти
            </button>
          </>
        ) : (
          <button className="btn" onClick={() => setShowLogin(true)}>
            Вход
          </button>
        )}
        <button className="btn" onClick={() => setShowCart(true)}>
          Корзина ({cartItems.length})
        </button>
      </div>
    </header>
  );
};

export default Header;
