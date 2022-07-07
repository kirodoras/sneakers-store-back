import express from 'express';
import { signUser } from '../controllers/authController.js'
import { validateEntrysSign } from '../middlewares/validateEntrysSign.js';
const authRouter = express.Router();

authRouter.post("/sign", validateEntrysSign, signUser);

export default authRouter;