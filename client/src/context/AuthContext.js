import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const login = (email, password) => {
    // Здесь должна быть реальная логика авторизации
    setUser({ email });
    setShowLogin(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, showLogin, setShowLogin, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
