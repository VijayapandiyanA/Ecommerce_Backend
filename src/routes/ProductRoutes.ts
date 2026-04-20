import express from 'express'
import ProductController from '../controllers/ProductController'
import authMiddleware from '../middlewares/authMiddleware'
import roleMiddleware from '../middlewares/roleMiddleware'
import zodValidationMiddleware from '../middlewares/zodValidationMiddleware'
import { productCreateSchema,productUpdateSchema  } from '../validations/ProductValidation'
const router = express.Router()

/**
 * @openapi
 * /products:
 *   get:
 *     summary: Get all products
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Product list fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/',ProductController.getAllProducts)
/**
 * @openapi
 * /products/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product details fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */
router.get('/:id',ProductController.getProductById)
/**
 * @openapi
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden - Admin only
 */

router.post('/',authMiddleware, roleMiddleware("admin"),zodValidationMiddleware(productCreateSchema),ProductController.createProduct)
/**
 * @openapi
 * /products/{id}:
 *   put:
 *     summary: Update a product
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden - Admin only
 *       404:
 *         description: Product not found
 */


router.put('/:id',authMiddleware,roleMiddleware("admin"), zodValidationMiddleware(productUpdateSchema),ProductController.updateProduct)

/**
 * @openapi
 * /products/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden - Admin only
 *       404:
 *         description: Product not found
 */





router.delete('/:id',authMiddleware, roleMiddleware("admin"),ProductController.deleteProduct)






export default router