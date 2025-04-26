import express from "express";

import {
  getAllClothing,
  createClothing,
  updateClothing,
  deleteClothing,
} from "../controllers/clothingController.js";
import { auth } from "../middleware/auth.js";
import { admin } from "../middleware/admin.js";


const router = express.Router();

router.get("/", getAllClothing);
router.post("/", auth, createClothing);
router.patch("/:id", auth, updateClothing);
router.delete("/:id", auth, admin, deleteClothing);

export default router;
