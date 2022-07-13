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

const checkCookie: () => Promise<loginResponse | void> = async () => {
  const tokn = JSON.parse(localStorage.getItem("auth")!);
  console.log(tokn);
  if (tokn) {
    const response = await fetch("http://localhost:5000/auth/coockie", {
      method: "POST",
      body: JSON.stringify(tokn),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: loginResponse = await response.json();
    return data;
  } else {
    return;
  }
};

const login: (creds: credentials) => Promise<loginResponse> = async (creds) => {
  const resData = await axios.post<credentials, AxiosResponse>(
    "http://localhost:7789/auth/login",
    creds
  );
  const data:loginResponse = resData.data;
  return resData.data;
};

export { checkCookie, login };
