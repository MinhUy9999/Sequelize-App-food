import express from 'express';
const router = express.Router();
import { rateRestaurant, getRatingsByRestaurant, getRatingsByUser } from '../controllers/rateController.js';

router.post('/rate', rateRestaurant);
router.get('/ratings/restaurant/:res_id', getRatingsByRestaurant);
router.get('/ratings/user/:user_id', getRatingsByUser);

export default router;
