import express from "express";
import { checkLogin, checkCookie } from "../controller/authController";

const router = express.Router();

router.post("/login", checkLogin);

router.post("/coockie", checkCookie);

export { router as authRouter };
