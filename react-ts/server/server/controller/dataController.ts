import { Request, Response } from "express";
import {
  getPostsService,
  getPostByPageService,
} from "../service/getDataService";

const getPosts = async (_req: Request, res: Response) => {
  const response = await getPostsService();
  res.status(200).json(response);
};

const getPostsByPage = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page! as string);
  const limit = parseInt(req.query.limit! as string);
  const response = await getPostByPageService(page, limit);
  res.status(200).json(response);
};

export { getPosts, getPostsByPage };
