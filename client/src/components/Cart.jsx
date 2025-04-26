import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, showCart, setShowCart } =
    useContext(CartContext);

  if (!showCart) return null;

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="modal-overlay">
      <div className="modal cart-modal">
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
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} width="50" />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.price} ₽</p>
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
              <button className="btn btn-checkout">Оформить заказ</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
