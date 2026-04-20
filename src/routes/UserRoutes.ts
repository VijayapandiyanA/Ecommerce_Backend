import express from 'express'
import UserController from '../controllers/UserController'
import zodValidationMiddleware from '../middlewares/zodValidationMiddleware'
import { loginSchema, registerSchema } from '../validations/UserValidation'

const router = express.Router()
/**
 * @openapi
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Validation error
 */
router.post('/register', zodValidationMiddleware(registerSchema), UserController.register)
/**
 * @openapi
 * /users/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', zodValidationMiddleware(loginSchema), UserController.login)

export default router