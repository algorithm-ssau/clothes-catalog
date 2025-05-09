import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginModal = () => {
  const { showLogin, setShowLogin, login, isLoading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (!showLogin) return null;

  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <div className="login-header">
          <h2>Вход в аккаунт</h2>
          <button
            className="close-btn"
            onClick={() => setShowLogin(false)}
            disabled={isLoading}
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className="form-group">
            <label>Пароль:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <button type="submit" className="btn btn-login" disabled={isLoading}>
            {isLoading ? "Вход..." : "Войти"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
