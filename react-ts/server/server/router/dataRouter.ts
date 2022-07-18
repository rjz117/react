import express from "express";
import { getPosts, getPostsByPage } from "../controller/dataController";

const router = express.Router();

router.get("/posts", getPostsByPage);

router.get("/allposts", getPosts);

export { router as dataRouter };