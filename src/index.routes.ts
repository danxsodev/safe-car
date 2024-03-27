import { Router, type Request, type Response } from "express";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Safe Car, Your trusted partner for safety on every journey");
});
