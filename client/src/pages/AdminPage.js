import { useEffect, useState } from "react";
import api from "../api";

export default function AdminPage() {
  const [clothingItems, setClothingItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get("/clothing");
        setClothingItems(response.data);
      } catch (error) {
        console.error("Ошибка загрузки:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="admin-page">
      <h2>Панель администратора</h2>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div>
          <h3>Товары ({clothingItems.length})</h3>
          <ul>
            {clothingItems.map((item) => (
              <li key={item._id}>
                {item.name} - {item.price} ₽
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
