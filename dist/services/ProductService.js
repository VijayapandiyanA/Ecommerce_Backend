"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductRepository_1 = __importDefault(require("../repositories/ProductRepository"));
const createError_1 = __importDefault(require("../utils/createError"));
class ProductService {
    async createProduct(data) {
        return await ProductRepository_1.default.createProduct(data);
    }
    async getProductById(id) {
        return await ProductRepository_1.default.getProductById(id);
    }
    async getAllProducts() {
        return await ProductRepository_1.default.getAllProducts();
    }
    async updateProduct(id, data) {
        const updated = await ProductRepository_1.default.updateProduct(id, data);
        if (!updated)
            throw (0, createError_1.default)("Product not found", 404);
        return updated;
    }
    async deleteProduct(id) {
        const deleted = await ProductRepository_1.default.deleteProduct(id);
        return { message: "Product deleted successfully" };
    }
}
exports.default = new ProductService();
