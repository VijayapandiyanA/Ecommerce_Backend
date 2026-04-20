import express from 'express';
import CartController from "../controllers/CartController";
import authMiddleware  from '../middlewares/authMiddleware';
import zodValidationMiddleware from '../middlewares/zodValidationMiddleware';
import { addToCartSchema,updateCartSchema,removeFromCartSchema } from '../validations/CartValidation'

const router = express.Router();
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
router.post('/add', authMiddleware,zodValidationMiddleware(addToCartSchema), CartController.addCartItem)

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
router.get('/', authMiddleware, CartController.getCart)

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

router.put('/update', authMiddleware, zodValidationMiddleware(updateCartSchema), CartController.updateCartItem)

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
router.delete('/remove', authMiddleware, zodValidationMiddleware(removeFromCartSchema), CartController.removeCartItem)

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
router.delete('/clear', authMiddleware, CartController.clearCart)

export default router