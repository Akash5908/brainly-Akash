import mongoose from "mongoose";
import { string } from "zod";

const Schema = mongoose.Schema;

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

const Content = mongoose.model("content", contentSchema);
const Users = mongoose.model("user", signupSchema);

export { Users, Content };
