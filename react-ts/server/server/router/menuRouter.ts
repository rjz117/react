import express from "express";
import { getMenus } from "../controller/menuController";

const router = express.Router();

router.get("/:role", getMenus);

export { router as menuRouter };
