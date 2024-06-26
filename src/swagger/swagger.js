/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for managing users
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve all users.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   user_id:
 *                     type: integer
 *                   full_name:
 *                     type: string
 *                   email:
 *                     type: string
 *     500:
 *       description: Internal server error
 */
/**
 * @swagger
 * tags:
 *   name: Likes
 *   description: API endpoints for managing restaurant likes
 */

/**
 * @swagger
 * /api/like:
 *   post:
 *     summary: Like a restaurant
 *     description: Like a restaurant by a user.
 *     tags: [Likes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *               res_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/unlike:
 *   post:
 *     summary: Unlike a restaurant
 *     description: Unlike a restaurant by a user.
 *     tags: [Likes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *               res_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/likes/restaurant/{res_id}:
 *   get:
 *     summary: Get likes by restaurant
 *     description: Retrieve all likes for a specific restaurant.
 *     tags: [Likes]
 *     parameters:
 *       - in: path
 *         name: res_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/likes/user/{user_id}:
 *   get:
 *     summary: Get likes by user
 *     description: Retrieve all likes by a specific user.
 *     tags: [Likes]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: API endpoints for managing orders
 */

/**
 * @swagger
 * /api/order:
 *   post:
 *     summary: Create an order
 *     description: Create a new order.
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *               food_id:
 *                 type: integer
 *               amount:
 *                 type: number
 *               code:
 *                 type: string
 *               arr_sub_id:
 *                 type: array
 *                 items:
 *                   type: integer
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * tags:
 *   name: Ratings
 *   description: API endpoints for managing restaurant ratings
 */

/**
 * @swagger
 * /api/rate:
 *   post:
 *     summary: Rate a restaurant
 *     description: Rate a restaurant by a user.
 *     tags: [Ratings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *               res_id:
 *                 type: integer
 *               amount:
 *                 type: number
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/ratings/restaurant/{res_id}:
 *   get:
 *     summary: Get ratings by restaurant
 *     description: Retrieve all ratings for a specific restaurant.
 *     tags: [Ratings]
 *     parameters:
 *       - in: path
 *         name: res_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/ratings/user/{user_id}:
 *   get:
 *     summary: Get ratings by user
 *     description: Retrieve all ratings by a specific user.
 *     tags: [Ratings]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Internal server error
 */
