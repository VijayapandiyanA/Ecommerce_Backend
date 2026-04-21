"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderRepository_1 = __importDefault(require("../repositories/OrderRepository"));
class OrderService {
    async placeOrder(userId) {
        return await OrderRepository_1.default.createOrder(userId);
    }
    async getOrderHistory(userId) {
        return await OrderRepository_1.default.getOrderByUserId(userId);
    }
}
exports.default = new OrderService();
