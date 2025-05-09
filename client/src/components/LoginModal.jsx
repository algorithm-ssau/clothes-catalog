import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginModal = () => {
  const { showLogin, setShowLogin, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (!showLogin) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Вход</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Пароль:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            Войти
          </button>
          <button
            type="button"
            className="btn btn-cancel"
            onClick={() => setShowLogin(false)}
          >
            Отмена
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
