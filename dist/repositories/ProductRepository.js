"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("../models/product"));
class ProductRepository {
    async createProduct(data) {
        return await product_1.default.create(data);
    }
    async getProductById(id) {
        return await product_1.default.findByPk(id);
    }
    async getAllProducts() {
        return await product_1.default.findAll();
    }
    async updateProduct(id, data) {
        const product = await product_1.default.findByPk(id);
        if (!product)
            throw new Error("Product not found");
        return await product.update(data);
    }
    async deleteProduct(id) {
        const product = await product_1.default.findByPk(id);
        if (!product)
            throw new Error("Product not found");
        await product.destroy();
    }
}
exports.default = new ProductRepository();
