import axios, { AxiosResponse} from "axios";
import {Backend} from '../constants';

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
    Backend.URL+"/auth/login",
    creds
  );
  return resData.data;
};

export { login };
