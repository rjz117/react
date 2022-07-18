import axios, { AxiosResponse} from "axios";
import {CONSTANTS} from '../constants';

type credentials = {
  username: string;
  password: string;
};

type loginResponse = {
  status: string;
  role: string;
  accessToken: string;
};

const login: (creds: credentials) => Promise<loginResponse> = async (creds) => {
  const resData = await axios.post<credentials, AxiosResponse>(
    CONSTANTS.BASE_URL+"/auth/login",
    creds
  );
  return resData.data;
};

export { login };
