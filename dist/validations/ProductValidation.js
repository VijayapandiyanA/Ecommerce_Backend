"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productUpdateSchema = exports.productCreateSchema = void 0;
const zod_1 = require("zod");
exports.productCreateSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(2, "Name is Required"),
        description: zod_1.z.string().optional(),
        price: zod_1.z.number().min(0, "Price must be a positive number"),
        imageUrl: zod_1.z.string().url("Please enter a valid URL for the image"),
        stock: zod_1.z.number().int().min(0).optional(),
        category: zod_1.z.string().optional()
    })
});
exports.productUpdateSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1).optional(),
        description: zod_1.z.string().optional(),
        price: zod_1.z.number().min(0).optional(),
        imageUrl: zod_1.z.string().url().optional(),
        stock: zod_1.z.number().int().min(0).optional(),
        category: zod_1.z.string().optional()
    })
});
