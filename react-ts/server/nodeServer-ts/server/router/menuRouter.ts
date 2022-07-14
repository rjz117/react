import express from "express";
import { getMenuData, getPosts } from "../services/menuService";

const router = express.Router();

router.get("/posts", getPosts);

router.get("/:role", getMenuData);

export { router as menuRouter };
