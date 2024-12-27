import express, { Response, Request } from "express";
import { z } from "zod";
import Signup from "../models";
const router = express.Router();

const User = z.object({
  username: z.string(),
  password: z
    .string()
    .min(8, { message: "Passowrd should have min length 8" })
    .max(15, { message: "Passowrd is too long" })
    .regex(/^(?=.*[A-Z]).{8,}$/, {
      message:
        "Should Contain at least one uppercase letter and have a minimum length of 8 characters.",
    }),
});

router.post("/signup", (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const validation = User.safeParse({ username, password });

    if (!validation.success) {
      const error = validation.error?.errors[0].message;
      res.status(400).send(error);
    } else {
      const user = Signup.create({
        username: username,
        password: password,
      });
      res.status(200).send(`Hello ${password}`);
    }
  } catch (error) {
    res.status(505).send("Somehting went wrong");
  }
});
export default router;
