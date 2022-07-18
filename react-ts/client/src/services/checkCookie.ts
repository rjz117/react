import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import {CONSTANTS} from '../constants';

type Err = {
  status : string,
  msg : string
}
type CheckResponse = {
  status : string,
  username: string,
  role: string
}

const checkCookie: (token:string) => Promise<Err | CheckResponse> = async (token) => {
  if(token) {
    const resData = await axios.post<string, AxiosResponse>(
      CONSTANTS.BASE_URL+"/auth/coockie",
      { tkn : token }
    );
    return resData.data as Err | CheckResponse;
  }
  return {
    status : 'failed',
    msg : 'coockie not found'
  }
};

export default checkCookie;
