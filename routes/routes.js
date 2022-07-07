import express from 'express';
import authRouter from './authRouter.js';
import testRouter from './test.js';

const router = express.Router();
router.use(testRouter);
router.use(authRouter);
export default router;