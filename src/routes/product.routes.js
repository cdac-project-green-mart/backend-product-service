import express from "express";
const router = express.Router();
import controller from "../controller/product.controller.js";

router.post("/", controller.createProduct);
router.get("/", controller.getProducts);
router.get("/:id", controller.getProductById);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);

export default router;
