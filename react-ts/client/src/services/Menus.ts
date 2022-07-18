import axios, { AxiosResponse } from "axios";
import { CONSTANTS } from "../constants";

type menus = {
  _id: string;
  name: string;
  flag: string;
};

const getMenusData: (role: string) => Promise<menus[]> = async (
  role: string
) => {
  const resData = await axios.get<string, AxiosResponse>(
    `${CONSTANTS.BASE_URL}/menu/${role}`
  );
  const data: menus[] = resData.data.menus;
  return data;
};

export { getMenusData };
