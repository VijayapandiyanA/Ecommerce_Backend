"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CartRepository_1 = __importDefault(require("../repositories/CartRepository"));
const createError_1 = __importDefault(require("../utils/createError"));
class CartService {
    async addTocart(data) {
        return await CartRepository_1.default.addToCart(data);
    }
    async getCartItems(userId) {
        return await CartRepository_1.default.getCartItems(userId);
    }
    async updateCartItem(userId, productId, quantity) {
        const updated = await CartRepository_1.default.updateCartItem(userId, productId, quantity);
        if (!updated)
            throw (0, createError_1.default)("Cart item not found", 404);
        return updated;
    }
    async removeCartItem(userId, productId) {
        const removed = await CartRepository_1.default.removeCartItem(userId, productId);
        if (!removed)
            throw (0, createError_1.default)("Cart item not found", 404);
        return { message: "Cart item removed successfully" };
    }
    async clearCart(userId) {
        await CartRepository_1.default.clearCart(userId);
        return { message: "Cart cleared successfully" };
    }
}
exports.default = new CartService();
