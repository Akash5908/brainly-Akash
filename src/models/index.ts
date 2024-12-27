import mongoose from "mongoose";

const Schema = mongoose.Schema;

const signupSchema = new Schema({
  username: String,
  password: String,
});

const Signup = mongoose.model("user", signupSchema);

export default Signup;
