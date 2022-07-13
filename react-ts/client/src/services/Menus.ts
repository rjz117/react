import axios, { AxiosResponse} from "axios";

type menus = {
  _id: string;
  name: string;
  flag: string;
};

const getMenusData: (role: string) => Promise<menus[]> = async (
  role: string
) => {
  const resData = await axios.get<string, AxiosResponse>(
    `http://localhost:5000/menu/`+role    
  );
  const data: menus[] = resData.data.menus;
  return data;
};

export { getMenusData };
