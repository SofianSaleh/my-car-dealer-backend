"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRefreshToken = exports.createNormalToken = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var redis_1 = require("../utils/redis");
exports.createNormalToken = function (userId) {
    var token = jsonwebtoken_1.default.sign({
        user: userId,
        type: "normal",
    }, "" + process.env.SECRET_1, {
        expiresIn: "1d",
    });
    return token;
};
exports.createRefreshToken = function (userId) {
    var refreshToken = jsonwebtoken_1.default.sign({
        user: userId,
        type: "normal1",
    }, "" + process.env.SECRET_2, {
        expiresIn: "7d",
    });
    redis_1.redis.append(userId, refreshToken);
    return refreshToken;
};
//# sourceMappingURL=authentication.js.map