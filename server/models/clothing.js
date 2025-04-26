import mongoose from "mongoose";

const ClothingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: {
    type: String,
    required: true,
    enum: ["Одежда", "Обувь", "Аксессуары", "Верхняя одежда"],
  },
  subcategory: { type: String },
  price: { type: Number, required: true },
  size: { type: String, required: true },
  color: { type: String, required: true },
  image: { type: String, required: true },
  stock: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Clothing", ClothingSchema);
