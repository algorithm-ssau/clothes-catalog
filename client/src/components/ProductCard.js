export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-badge">
        {product.discount && (
          <span className="discount">-{product.discount}%</span>
        )}
        <span className="new">NEW</span>
      </div>

      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>

        <div className="price">
          <span className="current">{product.price} ₽</span>
          {product.oldPrice && (
            <span className="old">{product.oldPrice} ₽</span>
          )}
        </div>

        <div className="product-meta">
          <span className="rating">
            ★ {product.rating} ({product.reviews})
          </span>
          <button className="add-to-cart">В корзину</button>
        </div>
      </div>
    </div>
  );
}
