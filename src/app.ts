import express from "express";
import Signup from "./routes/signup";

const app = express();
app.use(express.json());

app.use(Signup);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
