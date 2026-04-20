"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromCartSchema = exports.updateCartSchema = exports.addToCartSchema = void 0;
const zod_1 = require("zod");
exports.addToCartSchema = zod_1.z.object({
    body: zod_1.z.object({
        productId: zod_1.z.number().int().min(1, "Product Id is required"),
        quantity: zod_1.z.number().int().min(1, "Quantity must be a atleast 1")
    })
});
exports.updateCartSchema = zod_1.z.object({
    body: zod_1.z.object({
        productId: zod_1.z.number().int().min(1, "Product Id is required"),
        quantity: zod_1.z.number().int().min(1, "Quantity must be a atleast 1")
    })
});
exports.removeFromCartSchema = zod_1.z.object({
    body: zod_1.z.object({
        productId: zod_1.z.number().int().min(1, "Product Id is required")
    })
});
