"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const roleMiddleware_1 = __importDefault(require("../middlewares/roleMiddleware"));
const zodValidationMiddleware_1 = __importDefault(require("../middlewares/zodValidationMiddleware"));
const ProductValidation_1 = require("../validations/ProductValidation");
const router = express_1.default.Router();
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
router.get('/', ProductController_1.default.getAllProducts);
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
router.get('/:id', ProductController_1.default.getProductById);
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
router.post('/', authMiddleware_1.default, (0, roleMiddleware_1.default)("admin"), (0, zodValidationMiddleware_1.default)(ProductValidation_1.productCreateSchema), ProductController_1.default.createProduct);
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
router.put('/:id', authMiddleware_1.default, (0, roleMiddleware_1.default)("admin"), (0, zodValidationMiddleware_1.default)(ProductValidation_1.productUpdateSchema), ProductController_1.default.updateProduct);
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
router.delete('/:id', authMiddleware_1.default, (0, roleMiddleware_1.default)("admin"), ProductController_1.default.deleteProduct);
exports.default = router;
