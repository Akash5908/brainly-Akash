import express, { NextFunction, Response, Request } from "express";
import userValid from "../middleware/user";
import jwt from "jsonwebtoken";
import { Users } from "../models";

const router = express.Router();
const secret = "your-secret-key";

router.post(
  "/signin",
  userValid,
  (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    const payload = {
      username,
    };
    const options = { expiresIn: "1h" };

    const token = jwt.sign(payload, secret, options);
    res.status(200).json({
      message: "Sign-in Successful.",
      token: token,
    });
  }
);

export default router;
