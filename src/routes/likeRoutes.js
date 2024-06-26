import express from 'express';
const router = express.Router();
import { likeRestaurant, unlikeRestaurant, getLikesByRestaurant, getLikesByUser, getAllLikes } from '../controllers/likeController.js';

router.post('/like', likeRestaurant);
router.get('/likes', getAllLikes);
router.post('/unlike', unlikeRestaurant);
router.get('/likes/restaurant/:res_id', getLikesByRestaurant);
router.get('/likes/user/:user_id', getLikesByUser);

export default router;
