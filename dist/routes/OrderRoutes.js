"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OrderController_1 = __importDefault(require("../controllers/OrderController"));
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = express_1.default.Router();
router.use(authMiddleware_1.default);
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
router.post('/place', OrderController_1.default.placeOrder);
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
router.get('/history', OrderController_1.default.getOrderHistory);
exports.default = router;
