"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
class UserRepository {
    async createUser(userdata) {
        return await user_1.default.create(userdata);
    }
    async getUserByEmail(email) {
        return await user_1.default.findOne({ where: { email } });
    }
    async getUserById(id) {
        return await user_1.default.findByPk(id);
    }
}
exports.default = new UserRepository();
