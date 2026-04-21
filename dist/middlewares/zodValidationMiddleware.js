"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const zodValidationMiddleware = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        });
        next();
    }
    catch (err) {
        if (err instanceof zod_1.ZodError) {
            return res.status(400).json({
                success: false,
                errors: err.issues.map((e) => ({
                    field: e.path.join("."),
                    message: e.message
                }))
            });
        }
        next(err);
    }
};
exports.default = zodValidationMiddleware;
