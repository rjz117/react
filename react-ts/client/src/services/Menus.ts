import axios, { AxiosResponse } from "axios";
import { Backend } from "../constants";

type menus = {
  _id: string;
  name: string;
  flag: string;
};

const getMenusData: (role: string) => Promise<menus[]> = async (
  role: string
) => {
  const resData = await axios.get<string, AxiosResponse>(
    `${Backend.URL}/menu/${role}`
  );
  const data: menus[] = resData.data.menus;
  return data;
};

export { getMenusData };
