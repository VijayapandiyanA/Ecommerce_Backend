"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CartService_1 = __importDefault(require("../services/CartService"));
class CartController {
    async addCartItem(req, res, next) {
        try {
            const userId = req.user?.id;
            const { productId, quantity } = req.body;
            const cartItem = await CartService_1.default.addTocart({ userId: Number(userId), productId: Number(productId), quantity: Number(quantity) });
            res.status(201).json({ success: true, data: cartItem });
        }
        catch (error) {
            next(error);
        }
    }
    async getCart(req, res, next) {
        try {
            const userId = req.user?.id;
            const cartItems = await CartService_1.default.getCartItems(Number(userId));
            res.status(200).json({ success: true, data: cartItems });
        }
        catch (error) {
            next(error);
        }
    }
    async updateCartItem(req, res, next) {
        try {
            const userId = req.user?.id;
            const { productId, quantity } = req.body;
            const updatedItem = await CartService_1.default.updateCartItem(Number(userId), Number(productId), Number(quantity));
            res.status(200).json({ success: true, data: updatedItem });
        }
        catch (error) {
            next(error);
        }
    }
    async removeCartItem(req, res, next) {
        try {
            const userId = req.user?.id;
            const { productId } = req.body;
            const result = await CartService_1.default.removeCartItem(Number(userId), Number(productId));
            res.status(200).json({ success: true, data: result });
        }
        catch (error) {
            next(error);
        }
    }
    async clearCart(req, res, next) {
        try {
            const userId = req.user?.id;
            const result = await CartService_1.default.clearCart(Number(userId));
            res.status(200).json({ success: true, data: result });
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = new CartController();
