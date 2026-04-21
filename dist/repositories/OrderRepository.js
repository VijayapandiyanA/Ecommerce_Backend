"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
const { CartItem, Product, Order, OrderItem } = models_1.default;
class OrderRepository {
    async createOrder(userId) {
        const cartItems = await CartItem.findAll({ where: { userId },
            include: [{ model: Product,
                    as: "product" }] });
        if (cartItems.length === 0)
            throw new Error("Cart is empty");
        let totalAmount = 0;
        cartItems.forEach(item => {
            if (!item.product) {
                throw new Error("Product not loaded");
            }
            totalAmount += item.quantity * item.product.price;
        });
        const order = await Order.create({
            userId,
            totalPrice: totalAmount,
            status: "completed"
        });
        const orderItemsData = cartItems.map(item => ({
            orderId: order.id,
            productId: item.productId,
            quantity: item.quantity,
            price: item.product.price
        }));
        await OrderItem.bulkCreate(orderItemsData);
        await CartItem.destroy({ where: { userId } });
        return order;
    }
    async getOrderByUserId(userId) {
        return await Order.findAll({
            where: { userId },
            include: [{
                    model: OrderItem,
                    as: "items",
                    include: [{
                            model: Product,
                            as: "product"
                        }]
                }],
            order: [['createdAt', 'DESC']]
        });
    }
}
exports.default = new OrderRepository();
