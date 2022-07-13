import axios, { AxiosResponse } from "axios";

type Post = {
    "userId": string,
    "id": string,
    "title": string,
    "body": string
  }

const getPageData = async ():Promise<Post[]> => {
  const res:AxiosResponse<Post[], null> = await axios.get("https://jsonplaceholder.typicode.com/posts");  
  return res.data;
};


export default getPageData;
