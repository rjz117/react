import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";

const check: () => void = async () => {
  const tkn = Cookies.get("auth");
  const resData = await axios.post<string, AxiosResponse>(
    "http://localhost:7789/auth/coockie",
    { tkn }
  );
  const data = resData.data;
  console.log(data);
  if (data.error) {
    console.log("error");
  }
  else {
    return data;
  }
};

export default check;
