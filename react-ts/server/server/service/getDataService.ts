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

const getPostsService: () => Promise<Data[]> = async () => {
  const response = await dataModel.find<Data>({}).exec();
  return response;
};

const getPostByPageService: (page: number, limit: number) => Promise<Result> = async (
  page,
  limit
) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const response = await dataModel
    .find<Data>({ id: { $gt: startIndex, $lte: endIndex } })
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
  return results;
};

export { getPostsService, getPostByPageService };
