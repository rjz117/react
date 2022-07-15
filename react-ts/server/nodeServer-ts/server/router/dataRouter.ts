import express from "express";
import { getPostsData, getAllPostsData } from "../services/dataService";

const router = express.Router();

router.get("/posts", getPostsData);

router.get("/allposts", getAllPostsData);

export { router as dataRouter };