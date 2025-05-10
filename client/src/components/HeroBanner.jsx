import React from "react";
import "./HeroBanner.css"; // Создайте этот файл для стилей

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="banner-content">
        <h1>Новая коллекция "Весна-Лето 2025"</h1>
        <p>Скидки до 40% на первую покупку</p>
        <button className="banner-btn">Перейти к покупкам</button>
      </div>
    </div>
  );
};

export default HeroBanner;
