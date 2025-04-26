import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Layout() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="app-container">
      <header>
        <nav>
          
          <Link to="/cart" className="cart-link">
            Корзина (0)
          </Link>
          <Link to="/">Главная</Link>
          <Link to="/clothing">Каталог</Link>
          {!user ? (
            <>
              <Link to="/login">Вход</Link>
              <Link to="/register">Регистрация</Link>
            </>
          ) : (
            <>
              {user.role === "admin" && <Link to="/admin">Админ</Link>}
              <span>Привет, {user.username}</span>
            </>
          )}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>© 2024 Каталог одежды</footer>
    </div>
  );
}
