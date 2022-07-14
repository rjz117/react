import express from "express";
import { checkLogin, checkCookie } from "../services/authService";

const router = express.Router();

router.post("/login", checkLogin);

router.post("/coockie", checkCookie);

export { router as authRouter };
