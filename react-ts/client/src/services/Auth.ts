import axios, { AxiosResponse} from "axios";

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
    "http://localhost:5000/auth/login",
    creds
  );
  return resData.data;
};

export { login };
