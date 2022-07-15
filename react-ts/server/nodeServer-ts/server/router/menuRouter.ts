import express from "express";
import { getMenuData } from "../services/menuService";

const router = express.Router();

router.get("/:role", getMenuData);

export { router as menuRouter };
