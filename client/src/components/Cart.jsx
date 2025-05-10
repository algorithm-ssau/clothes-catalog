import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { cartItems, removeFromCart, showCart, setShowCart, clearCart } =
    useContext(CartContext);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    setTimeout(() => {
      clearCart();
      setOrderSuccess(true);
      setTimeout(() => {
        setOrderSuccess(false);
        setShowCart(false);
      }, 3000);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {showCart && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="modal cart-modal"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
          >
            {orderSuccess ? (
              <motion.div
                className="order-success-message"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <h3>✅ Заказ оформлен!</h3>
                <p>Спасибо за покупку!</p>
              </motion.div>
            ) : (
              <>
                <div className="cart-header">
                  <h2>Корзина</h2>
                  <button
                    className="close-btn"
                    onClick={() => setShowCart(false)}
                  >
                    ×
                  </button>
                </div>

                {cartItems.length === 0 ? (
                  <div className="empty-cart">
                    <p>Корзина пуста</p>
                    <button
                      className="continue-shopping"
                      onClick={() => setShowCart(false)}
                    >
                      Продолжить покупки
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="cart-items">
                      {cartItems.map((item) => (
                        <motion.div
                          key={`${item.id}-${item.selectedSize}`}
                          className="cart-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img src={item.image} alt={item.name} width="50" />
                          <div className="item-info">
                            <h4>{item.name}</h4>
                            <p>{item.price} ₽</p>
                            {item.selectedSize && (
                              <p>Размер: {item.selectedSize}</p>
                            )}
                          </div>
                          <motion.button
                            onClick={() => removeFromCart(item.id)}
                            className="btn btn-remove"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Удалить
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                    <div className="cart-footer">
                      <div className="cart-total">
                        <h3>Итого: {totalPrice} ₽</h3>
                      </div>
                      <motion.button
                        className="btn btn-checkout"
                        onClick={handleCheckout}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Оформить заказ
                      </motion.button>
                    </div>
                  </>
                )}
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
