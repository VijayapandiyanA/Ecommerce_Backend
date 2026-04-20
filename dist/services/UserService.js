"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const dotenv_1 = __importDefault(require("dotenv"));
const createError_1 = __importDefault(require("../utils/createError"));
dotenv_1.default.config();
class UserService {
    async register(userdata) {
        const existingUser = await UserRepository_1.default.getUserByEmail(userdata.email);
        if (existingUser)
            throw (0, createError_1.default)("User with this email already exists", 400);
        const hashedPassword = await bcryptjs_1.default.hash(userdata.password, 10);
        const user = await UserRepository_1.default.createUser({ ...userdata, password: hashedPassword });
        return { id: user.id, name: user.name, email: user.email, role: user.role };
    }
    async login(email, password) {
        const user = await UserRepository_1.default.getUserByEmail(email);
        if (!user)
            throw (0, createError_1.default)("Invalid email", 400);
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch)
            throw (0, createError_1.default)("Invalid Password", 400);
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return { token, user: { id: user.id, name: user.name, email: user.email, role: user.role } };
    }
}
exports.default = new UserService();
