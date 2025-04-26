import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Header />
          <Cart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
