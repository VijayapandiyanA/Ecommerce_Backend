"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
const { CartItem, Product } = models_1.default;
class CartRepository {
    async addToCart(data) {
        const existingItem = await CartItem.findOne({ where: { userId: data.userId, productId: data.productId } });
        if (existingItem) {
            existingItem.quantity += data.quantity ?? 1;
            return await existingItem.save();
        }
        return await CartItem.create({
            userId: data.userId,
            productId: data.productId,
            quantity: data.quantity ?? 1
        });
    }
    async getCartItems(userId) {
        return await CartItem.findAll({
            where: { userId },
            include: [{
                    model: Product,
                    as: "product"
                }]
        });
    }
    async updateCartItem(userId, productId, quantity) {
        const item = await CartItem.findOne({ where: { userId, productId } });
        if (!item)
            return null;
        item.quantity = quantity;
        return await item.save();
    }
    async removeCartItem(userId, productId) {
        const item = await CartItem.findOne({ where: { userId, productId } });
        if (!item)
            return null;
        await item.destroy();
        return true;
    }
    async clearCart(userId) {
        await CartItem.destroy({ where: { userId } });
    }
}
exports.default = new CartRepository();
