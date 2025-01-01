"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = exports.Users = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const signupSchema = new Schema({
    username: String,
    password: String,
});
const contentSchema = new Schema({
    link: String,
    type: String,
    title: String,
    tags: [{ id: String }],
    userId: String,
});
const Content = mongoose_1.default.model("content", contentSchema);
exports.Content = Content;
const Users = mongoose_1.default.model("user", signupSchema);
exports.Users = Users;
