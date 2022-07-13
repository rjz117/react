import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";

type Err = {
  status : string,
  msg : string
}
type CheckResponse = {
  status : string,
  username: string,
  role: string
}

const check: () => Promise<Err | CheckResponse> = async () => {
  const tkn = Cookies.get("auth");

  const resData = await axios.post<string, AxiosResponse>(
    "http://localhost:5000/auth/coockie",
    { tkn }
  );
  const data = resData.data as Err | CheckResponse;
  if (data.status === 'fail') {
    console.log("error");
    return data;
  }
  else {
    return data;
  }
};

export default check;
