import express from 'express';
import { getAllProducts } from '../controllers/productsController.js';
import { getProduct } from '../controllers/productsController.js';
const productsRouter = express.Router();

productsRouter.get("/products", getAllProducts);
productsRouter.get("/product", getProduct);

export default productsRouter;