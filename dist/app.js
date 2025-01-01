"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signup_1 = __importDefault(require("./routes/signup"));
const signin_1 = __importDefault(require("./routes/signin"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(signup_1.default);
app.use(signin_1.default);
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
exports.default = app;
