import express from 'express';
const router = express.Router();
import { createOrder } from '../controllers/orderController.js';

router.post('/order', createOrder);

export default router;
