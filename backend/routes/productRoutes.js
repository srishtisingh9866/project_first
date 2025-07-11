import express from 'express';
import { createProducts, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from '../controller/productController.js';
const router=express.Router();//easily habdles hhtp request

//Routes
router.route("/products").get(getAllProducts).post(createProducts);
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getSingleProduct);
//router.post("/api/v1/products").post(createProduct);

export default router;

