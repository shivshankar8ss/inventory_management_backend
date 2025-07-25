import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  addProduct,
  updateQuantity,
  getProducts,
  getProductById,
  updatePrice,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/", protect, addProduct);
router.put("/:id/quantity", protect, updateQuantity);
router.put("/:id/price", protect, updatePrice);
router.get("/", protect, getProducts);
router.get("/:id", protect, getProductById);

export default router;
