"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductService_1 = __importDefault(require("../services/ProductService"));
class ProductController {
    async createProduct(req, res, next) {
        try {
            const product = await ProductService_1.default.createProduct(req.body);
            res.status(201).json({ success: true, data: product });
        }
        catch (error) {
            next(error);
        }
    }
    async getProductById(req, res, next) {
        try {
            const product = await ProductService_1.default.getProductById(Number(req.params.id));
            if (!product)
                return res.status(404).json({ error: "Product not found" });
            res.json({ success: true, data: product });
        }
        catch (error) {
            next(error);
        }
    }
    async getAllProducts(req, res, next) {
        try {
            const products = await ProductService_1.default.getAllProducts();
            res.json({ success: true, data: products });
        }
        catch (error) {
            next(error);
        }
    }
    async updateProduct(req, res, next) {
        try {
            const updated = await ProductService_1.default.updateProduct(Number(req.params.id), req.body);
            res.json({ success: true, data: updated });
        }
        catch (error) {
            next(error);
        }
    }
    async deleteProduct(req, res, next) {
        try {
            const result = await ProductService_1.default.deleteProduct(Number(req.params.id));
            res.json({ success: true, data: result });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = new ProductController();
