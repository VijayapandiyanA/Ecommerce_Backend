"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roleMiddleware = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ error: "Forbidden" });
        }
        next();
    };
};
exports.default = roleMiddleware;
