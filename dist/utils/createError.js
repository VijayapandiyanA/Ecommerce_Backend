"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createError = (message, statusCode) => {
    const err = new Error(message);
    err.statusCode = statusCode;
    err.success = false;
    return err;
};
exports.default = createError;
