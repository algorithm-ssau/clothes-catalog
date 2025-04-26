import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchClothing } from "../store/clothingSlice";

export default function ClothingPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const { items, status } = useSelector((state) => state.clothing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClothing(category));
  }, [dispatch, category]);

  return (
    <div className="clothing-page">
      <h2>Каталог {category && `- ${getCategoryName(category)}`}</h2>

      {status === "loading" ? (
        <p>Загрузка...</p>
      ) : (
        <div className="clothing-grid">
          {items.map((item) => (
            <div key={item._id} className="clothing-card">
              <h3>{item.name}</h3>
              <p>Цена: {item.price} ₽</p>
              <p>Размер: {item.size}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function getCategoryName(category) {
  const names = {
    men: "Мужская одежда",
    women: "Женская одежда",
    kids: "Детская одежда",
  };
  return names[category] || category;
}
