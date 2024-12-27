"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const models_1 = __importDefault(require("../models"));
const router = express_1.default.Router();
const User = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z
        .string()
        .min(8, { message: "Passowrd should have min length 8" })
        .max(15, { message: "Passowrd is too long" })
        .regex(/^(?=.*[A-Z]).{8,}$/, {
        message: "Should Contain at least one uppercase letter and have a minimum length of 8 characters.",
    }),
});
router.post("/signup", (req, res) => {
    var _a;
    const { username, password } = req.body;
    try {
        const validation = User.safeParse({ username, password });
        if (!validation.success) {
            const error = (_a = validation.error) === null || _a === void 0 ? void 0 : _a.errors[0].message;
            res.status(400).send(error);
        }
        else {
            const user = models_1.default.create({
                username: username,
                password: password,
            });
            res.status(200).send(`Hello ${password}`);
        }
    }
    catch (error) {
        res.status(505).send("Somehting went wrong");
    }
});
exports.default = router;
