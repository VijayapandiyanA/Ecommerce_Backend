"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderService_1 = __importDefault(require("../services/OrderService"));
class OrderController {
    async placeOrder(req, res, next) {
        try {
            const userId = req.user?.id;
            const order = await OrderService_1.default.placeOrder(Number(userId));
            res.status(201).json(order);
        }
        catch (error) {
            next(error);
        }
    }
    async getOrderHistory(req, res, next) {
        try {
            const userId = req.user?.id;
            const orders = await OrderService_1.default.getOrderHistory(Number(userId));
            res.status(200).json({ success: true, orders });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = new OrderController();
