import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import {Backend} from '../constants';

type Err = {
  status : string,
  msg : string
}
type CheckResponse = {
  status : string,
  username: string,
  role: string
}

const checkCookie: () => Promise<Err | CheckResponse> = async () => {
  const tkn = Cookies.get("auth");

  const resData = await axios.post<string, AxiosResponse>(
    Backend.URL+"/auth/coockie",
    { tkn }
  );
  const data = resData.data as Err | CheckResponse;
  if (data.status === 'fail') {
    console.log("error");
  }
  return data;
};

export default checkCookie;
