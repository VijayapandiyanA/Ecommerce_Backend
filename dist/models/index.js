"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const product_1 = __importDefault(require("./product"));
const cartitem_1 = __importDefault(require("./cartitem"));
const order_1 = __importDefault(require("./order"));
const orderitem_1 = __importDefault(require("./orderitem"));
const db_1 = require("../config/db");
user_1.default.hasMany(cartitem_1.default, { foreignKey: "userId", as: "cartItems" });
user_1.default.hasMany(order_1.default, { foreignKey: "userId", as: "orders" });
order_1.default.belongsTo(user_1.default, { foreignKey: "userId", as: "user" });
order_1.default.hasMany(orderitem_1.default, { foreignKey: "orderId", as: "items" });
orderitem_1.default.belongsTo(order_1.default, { foreignKey: "orderId", as: "order" });
orderitem_1.default.belongsTo(product_1.default, { foreignKey: "productId", as: "product" });
cartitem_1.default.belongsTo(product_1.default, { foreignKey: "productId", as: "product" });
product_1.default.hasMany(cartitem_1.default, { foreignKey: "productId", as: "cartItems" });
const db = {
    sequelize: db_1.sequelize,
    User: user_1.default,
    Product: product_1.default,
    CartItem: cartitem_1.default,
    Order: order_1.default,
    OrderItem: orderitem_1.default,
};
exports.default = db;
