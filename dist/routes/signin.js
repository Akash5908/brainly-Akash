"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../middleware/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
const secret = "your-secret-key";
router.post("/signin", user_1.default, (req, res, next) => {
    const { username, password } = req.body;
    const payload = {
        username,
    };
    const options = { expiresIn: "1h" };
    const token = jsonwebtoken_1.default.sign(payload, secret, options);
    res.status(200).json({
        message: "Sign-in Successful.",
        token: token,
    });
});
exports.default = router;
