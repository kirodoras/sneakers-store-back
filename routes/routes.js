import express from 'express';
import authRouter from './authRouter.js';
import productsRouter from './productsRouter.js';
import testRouter from './test.js';
import checkoutRouter from './checkoutRouter.js';

const router = express.Router();
router.use(testRouter);
router.use(authRouter);
router.use(productsRouter);
router.use(checkoutRouter);

export default router;