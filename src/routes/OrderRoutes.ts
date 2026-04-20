import express from 'express'
import OrderController from '../controllers/OrderController'
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.use(authMiddleware);
/**
 * @openapi
 * /orders/place:
 *   post:
 *     summary: Place an order from cart
 *     description: Creates an order using all items in the user's cart and clears the cart after placing the order
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Order placed successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: Cart is empty
 *       401:
 *         description: Unauthorized
 */
router.post('/place', OrderController.placeOrder);
/**
 * @openapi
 * /orders/history:
 *   get:
 *     summary: Get order history
 *     description: Fetch all orders placed by the logged-in user
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Order history fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OrderWithItems'
 *       401:
 *         description: Unauthorized
 */
router.get('/history', OrderController.getOrderHistory)


export default router