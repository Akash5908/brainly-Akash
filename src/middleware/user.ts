import { Users } from "../models";
import { Request, Response, NextFunction } from "express";

async function userValid(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;
  try {
    const user = await Users.findOne({ username });
    if (!user) {
      res.status(404).send("User not found");
    }
    const match = user?.password === password;
    if (match) {
      next();
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

export default userValid;
