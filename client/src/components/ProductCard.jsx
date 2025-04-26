const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span className="price">{product.price} ₽</span>
      <button className="btn" onClick={() => onAddToCart(product)}>
        В корзину
      </button>
    </div>
  );
};

export default ProductCard;
