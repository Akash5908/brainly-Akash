import express from "express";
import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(
    "mongodb+srv://akash5908:6r9ggmrYwPyRRHN1@cluster0.nnkti.mongodb.net/Users"
  )
  .then(() => {
    console.log("connected to mongoDB");
  });
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
