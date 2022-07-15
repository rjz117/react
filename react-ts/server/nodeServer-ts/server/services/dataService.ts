import { Request, Response } from "express";
import { dataModel } from "../model/dataModel";

type next = {
  page: number;
  limit: number;
};

type Data = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Result = {
  next: next;
  previous: next;
  results: Data[];
};

const getAllPostsData = async (req: Request, res: Response) => {
  const response = await dataModel.find({}).exec();
  const results = response as Data[];
  res.json(results);
};

const getPostsData = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page! as string);
  const limit = parseInt(req.query.limit! as string);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const response = await dataModel
    .find({ id: { $gt: startIndex, $lte: endIndex } })
    .exec();
  const noOfRecords = await dataModel.count().exec();
  let results: Result = {
    next: { page: 0, limit: 0 },
    previous: { page: 0, limit: 0 },
    results: [
      {
        userId: 0,
        id: 0,
        title: "",
        body: "",
      },
    ],
  };
  if (endIndex < noOfRecords) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }
  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }
  results.results = response;
  res.json(results);
};

export { getPostsData, getAllPostsData };
