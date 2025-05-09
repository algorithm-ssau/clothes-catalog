import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { user, setShowLogin, logout } = useContext(AuthContext);
  const { setShowCart, cartItems } = useContext(CartContext);

  return (
    <header className="header">
      {/* Блок авторизации и корзины (верхний правый угол) */}
      <div className="header-top-right">
        {user ? (
          <>
            <span className="user-email">Привет, {user.email}</span>
            <button className="btn btn-logout" onClick={logout}>
              Выйти
            </button>
          </>
        ) : (
          <button className="btn btn-login" onClick={() => setShowLogin(true)}>
            Вход
          </button>
        )}
        <button className="btn btn-cart" onClick={() => setShowCart(true)}>
          Корзина ({cartItems.length})
        </button>
      </div>

      {/* Центральный блок с лого и навигацией */}
      <div className="header-center">
        <Link to="/" className="logo">
          FashionStore
        </Link>
        <nav className="main-nav">
          <Link to="/" className="nav-link">
            Главная
          </Link>
          <Link to="/categories" className="nav-link">
            Каталог
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
