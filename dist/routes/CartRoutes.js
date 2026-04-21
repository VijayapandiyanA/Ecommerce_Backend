"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CartController_1 = __importDefault(require("../controllers/CartController"));
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const zodValidationMiddleware_1 = __importDefault(require("../middlewares/zodValidationMiddleware"));
const CartValidation_1 = require("../validations/CartValidation");
const router = express_1.default.Router();
/**
 * @openapi
 * /cart/add:
 *   post:
 *     summary: Add item to cart
 *     tags:
 *       - Cart
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AddToCartInput'
 *     responses:
 *       201:
 *         description: Item added to cart successfully
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Product not found
 */
router.post('/add', authMiddleware_1.default, (0, zodValidationMiddleware_1.default)(CartValidation_1.addToCartSchema), CartController_1.default.addCartItem);
/**
 * @openapi
 * /cart:
 *   get:
 *     summary: Get logged-in user's cart
 *     tags:
 *       - Cart
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Cart fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CartItem'
 *       401:
 *         description: Unauthorized
 */
router.get('/', authMiddleware_1.default, CartController_1.default.getCart);
/**
 * @openapi
 * /cart/update:
 *   put:
 *     summary: Update cart item quantity
 *     tags:
 *       - Cart
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateCartInput'
 *     responses:
 *       200:
 *         description: Cart item updated successfully
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Cart item not found
 */
router.put('/update', authMiddleware_1.default, (0, zodValidationMiddleware_1.default)(CartValidation_1.updateCartSchema), CartController_1.default.updateCartItem);
/**
 * @openapi
 * /cart/remove:
 *   delete:
 *     summary: Remove item from cart
 *     tags:
 *       - Cart
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RemoveFromCartInput'
 *     responses:
 *       200:
 *         description: Cart item removed successfully
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Cart item not found
 */
router.delete('/remove', authMiddleware_1.default, (0, zodValidationMiddleware_1.default)(CartValidation_1.removeFromCartSchema), CartController_1.default.removeCartItem);
/**
 * @openapi
 * /cart/clear:
 *   delete:
 *     summary: Clear all items from cart
 *     tags:
 *       - Cart
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Cart cleared successfully
 *       401:
 *         description: Unauthorized
 */
router.delete('/clear', authMiddleware_1.default, CartController_1.default.clearCart);
exports.default = router;
