"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
mongoose_1.default
    .connect("mongodb+srv://akash5908:6r9ggmrYwPyRRHN1@cluster0.nnkti.mongodb.net/Users")
    .then(() => {
    console.log("connected to mongoDB");
});
app_1.default.listen(3000, () => {
    console.log("server is running on port 3000");
});
