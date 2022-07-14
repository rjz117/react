import axios, { AxiosResponse } from "axios";

type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

type Result = {
  next: {
    page: number,
    limit: number
  };
  previous: {
    page: number
    limit: number;
  };
  results: [
    {
      userId: number;
      id: number;
      title: string;
      body: string
    }
  ];
};

const getPageData = async (): Promise<Post[]> => {
  const res: AxiosResponse<Post[], null> = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return res.data;
};

const getData = async (page:number, limit:number): Promise<Result> => {
  const res: AxiosResponse<Result, null> = await axios.get(
    `http://localhost:5000/menu/posts?page=${page}&limit=${limit}`
  );
  return res.data;
};

export default getPageData;
export {getData}