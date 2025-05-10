

from pymongo import MongoClient
from pymongo.errors import PyMongoError
from typing import List, Dict, Optional
from bson import ObjectId
from datetime import datetime
import os
import logging

# Настройка логгирования
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class MongoDBConnection:
    def __init__(self):
        self.client = None
        self.db = None
        
    def __enter__(self):
        mongodb_url = os.getenv("MONGODB_URL", "mongodb://localhost:27017/")
        self.client = MongoClient(mongodb_url)
        self.db = self.client["fashion_store"]
        return self.db
        
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.client:
            self.client.close()

class MongoProductService:
    @staticmethod
    def get_all_products() -> List[Dict]:
        try:
            with MongoDBConnection() as db:
                products = list(db.products.find({}))
                for product in products:
                    product["_id"] = str(product["_id"])
                return products
        except PyMongoError as e:
            logger.error(f"Error fetching products: {e}")
            return []

    @staticmethod
    def get_products_by_category(category: str) -> List[Dict]:
        try:
            with MongoDBConnection() as db:
                products = list(db.products.find({"category": category}))
                for product in products:
                    product["_id"] = str(product["_id"])
                return products
        except PyMongoError as e:
            logger.error(f"Error fetching products by category: {e}")
            return []

    @staticmethod
    def add_product(product_data: Dict) -> Optional[str]:
        try:
            with MongoDBConnection() as db:
                result = db.products.insert_one(product_data)
                return str(result.inserted_id)
        except PyMongoError as e:
            logger.error(f"Error adding product: {e}")
            return None

class MongoUserService:
    @staticmethod
    def create_user(user_data: Dict) -> Optional[str]:
        try:
            with MongoDBConnection() as db:
                # Проверка на существующего пользователя
                if db.users.find_one({"email": user_data["email"]}):
                    return None
                
                user_data["created_at"] = datetime.utcnow()
                result = db.users.insert_one(user_data)
                return str(result.inserted_id)
        except PyMongoError as e:
            logger.error(f"Error creating user: {e}")
            return None

    @staticmethod
    def get_user_by_email(email: str) -> Optional[Dict]:
        try:
            with MongoDBConnection() as db:
                user = db.users.find_one({"email": email})
                if user:
                    user["_id"] = str(user["_id"])
                return user
        except PyMongoError as e:
            logger.error(f"Error fetching user: {e}")
            return None

class MongoCartService:
    @staticmethod
    def get_user_cart(user_id: str) -> Dict:
        try:
            with MongoDBConnection() as db:
                cart = db.carts.find_one({"user_id": user_id})
                if not cart:
                    # Создаем новую корзину, если не существует
                    cart_data = {
                        "user_id": user_id,
                        "items": [],
                        "created_at": datetime.utcnow(),
                        "updated_at": datetime.utcnow()
                    }
                    db.carts.insert_one(cart_data)
                    cart = cart_data
                
                cart["_id"] = str(cart["_id"])
                return cart
        except PyMongoError as e:
            logger.error(f"Error getting user cart: {e}")
            return {"user_id": user_id, "items": []}

    @staticmethod
    def add_to_cart(user_id: str, product_id: str, size: str, quantity: int = 1) -> bool:
        try:
            with MongoDBConnection() as db:
                # Проверяем существование товара
                if not db.products.find_one({"_id": ObjectId(product_id)}):
                    return False
                
                cart = db.carts.find_one({"user_id": user_id})
                
                if not cart:
                    # Создаем новую корзину
                    cart_data = {
                        "user_id": user_id,
                        "items": [{
                            "product_id": product_id,
                            "size": size,
                            "quantity": quantity,
                            "added_at": datetime.utcnow()
                        }],
                        "created_at": datetime.utcnow(),
                        "updated_at": datetime.utcnow()
                    }
                    db.carts.insert_one(cart_data)
                else:
                    # Обновляем существующую корзину
                    db.carts.update_one(
                        {"user_id": user_id},
                        {
                            "$push": {
                                "items": {
                                    "product_id": product_id,
                                    "size": size,
                                    "quantity": quantity,
                                    "added_at": datetime.utcnow()
                                }
                            },
                            "$set": {"updated_at": datetime.utcnow()}
                        }
                    )
                return True
        except PyMongoError as e:
            logger.error(f"Error adding to cart: {e}")
            return False

# Пример использования
if __name__ == "__main__":
    # Инициализация тестовых данных
    test_product = {
        "name": "Джинсы скинни",
        "price": 3499,
        "description": "Классические синие джинсы",
        "category": "jeans",
        "sizes": ["XS", "S", "M", "L", "XL"],
        "image_url": "/images/jeans.jpg"
    }
    
    # Добавление тестового товара
    product_id = MongoProductService.add_product(test_product)
    print(f"Добавлен товар с ID: {product_id}")
    
    # Получение всех товаров
    products = MongoProductService.get_all_products()
    print("Все товары:", products)
    
    # Тест корзины
    test_user_id = "user123"
    MongoCartService.add_to_cart(test_user_id, product_id, "M")
    cart = MongoCartService.get_user_cart(test_user_id)
    print("Корзина пользователя:", cart)