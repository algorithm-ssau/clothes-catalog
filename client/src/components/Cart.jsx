import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, showCart, setShowCart, clearCart } =
    useContext(CartContext);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    // Здесь должна быть логина отправки заказа на сервер
    // Пока просто имитируем успешное оформление
    setTimeout(() => {
      clearCart(); // Очищаем корзину
      setOrderSuccess(true); // Показываем сообщение

      // Через 3 секунды закрываем сообщение и корзину
      setTimeout(() => {
        setOrderSuccess(false);
        setShowCart(false);
      }, 3000);
    }, 1000);
  };

  if (!showCart) return null;

  return (
    <div className="modal-overlay">
      <div className="modal cart-modal">
        {orderSuccess ? (
          <div className="order-success-message">
            <h3>✅ Заказ оформлен!</h3>
            <p>Спасибо за покупку!</p>
          </div>
        ) : (
          <>
            <h2>Корзина</h2>
            <button className="close-btn" onClick={() => setShowCart(false)}>
              ×
            </button>

            {cartItems.length === 0 ? (
              <p>Корзина пуста</p>
            ) : (
              <>
                <div className="cart-items">
                  {cartItems.map((item) => (
                    <div
                      key={`${item.id}-${item.selectedSize}`}
                      className="cart-item"
                    >
                      <img src={item.image} alt={item.name} width="50" />
                      <div>
                        <h4>{item.name}</h4>
                        <p>{item.price} ₽</p>
                        {item.selectedSize && (
                          <p>Размер: {item.selectedSize}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="btn btn-remove"
                      >
                        Удалить
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-total">
                  <h3>Итого: {totalPrice} ₽</h3>
                  <button className="btn btn-checkout" onClick={handleCheckout}>
                    Оформить заказ
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
