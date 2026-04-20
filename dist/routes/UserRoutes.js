"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const zodValidationMiddleware_1 = __importDefault(require("../middlewares/zodValidationMiddleware"));
const UserValidation_1 = require("../validations/UserValidation");
const router = express_1.default.Router();
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
router.post('/register', (0, zodValidationMiddleware_1.default)(UserValidation_1.registerSchema), UserController_1.default.register);
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
router.post('/login', (0, zodValidationMiddleware_1.default)(UserValidation_1.loginSchema), UserController_1.default.login);
exports.default = router;
