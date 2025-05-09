import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    // Имитация запроса к API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setUser({ email });
    setShowLogin(false);
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, showLogin, setShowLogin, login, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
