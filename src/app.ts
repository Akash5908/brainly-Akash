import express from "express";
import Signup from "./routes/signup";
import Signin from "./routes/signin";
const app = express();
app.use(express.json());

app.use(Signup);
app.use(Signin);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
