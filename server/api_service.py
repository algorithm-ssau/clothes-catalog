# server/api_service.py
"""
Пример сервиса для работы с API интернет-магазина
(Это демонстрационный файл, не подключенный к основному приложению)
"""

import os
import requests
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Настройки CORS для доступа из фронтенда
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3002"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Модели данных
class Product(BaseModel):
    id: int
    name: str
    price: float
    category: str
    sizes: list[str]

class CartItem(BaseModel):
    product_id: int
    size: str
    quantity: int

# Подключение к внешнему API (пример)
EXTERNAL_API_URL = os.getenv("EXTERNAL_API_URL", "https://api.example-store.com/v1")
API_KEY = os.getenv("API_KEY", "your_api_key_here")

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

def fetch_products(category: str = None):
    """Получение товаров из внешнего API"""
    try:
        url = f"{EXTERNAL_API_URL}/products"
        params = {"category": category} if category else None
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching products: {e}")
        return []

# FastAPI endpoints
@app.get("/api/products")
async def get_products(category: str = None):
    """Получить товары (с возможностью фильтрации по категории)"""
    products = fetch_products(category)
    return {"products": products}

@app.post("/api/cart/add")
async def add_to_cart(item: CartItem):
    """Добавить товар в корзину"""
    # Здесь была бы логика добавления в БД или внешний сервис
    return {"message": "Product added to cart", "item": item}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)