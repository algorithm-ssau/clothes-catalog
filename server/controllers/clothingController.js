// Стало (правильно):
import Clothing from "../models/clothing.js";

export const getAllClothing = async (req, res) => {
  try {
    const { category, search } = req.query;
    const query = {};

    if (category) query.category = category;
    if (search) query.name = { $regex: search, $options: "i" };

    const clothing = await Clothing.find(query).populate(
      "createdBy",
      "username"
    );
    res.json(clothing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createClothing = async (req, res) => {
  try {
    const clothing = new Clothing({
      ...req.body,
      createdBy: req.user._id,
    });

    await clothing.save();
    res.status(201).json(clothing);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateClothing = async (req, res) => {
  try {
    const clothing = await Clothing.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user._id },
      req.body,
      { new: true }
    );

    if (!clothing) return res.status(404).json({ message: "Товар не найден" });
    res.json(clothing);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteClothing = async (req, res) => {
  try {
    const clothing = await Clothing.findOneAndDelete({
      _id: req.params.id,
      $or: [{ createdBy: req.user._id }, { role: "admin" }],
    });

    if (!clothing) return res.status(404).json({ message: "Товар не найден" });
    res.json({ message: "Товар удален" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
