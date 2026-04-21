"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../services/UserService"));
class UserController {
    async register(req, res, next) {
        try {
            const user = await UserService_1.default.register(req.body);
            res.status(201).json(user);
        }
        catch (error) {
            next(error);
        }
    }
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const result = await UserService_1.default.login(email, password);
            res.json(result);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = new UserController();
