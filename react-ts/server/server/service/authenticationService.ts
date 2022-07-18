import { userModel } from "../model/userModel";
import JWT from "jsonwebtoken";

type Usr = {
  username: string;
  password: string;
};

type Token = {
  username: string;
};

type User = {
  username: string;
  password: string;
  role: string;
};

type Response = {
  status: string;
  role: string;
  accessToken: string;
};

type coockieResponse = {
    status: string;
    username: string;
    role: string;
  };

const loginService: (user: Usr) => Promise<null | Response> = async (
  user: Usr
) => {
  try {
    const users = await userModel.findOne<User>(user).exec();
    if (users === null) {
      return null;
    }
    const username = users.username;
    const accessToken = JWT.sign({ username }, "Raviraj", {
      expiresIn: "100s",
    });
    return {
      status: "success",
      role: users.role,
      accessToken: accessToken,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

const coockieService: (token: string) => Promise<null | coockieResponse> = async (
  token
) => {
  let tokn: JWT.JwtPayload = {};
  if (token) {
    try {
      JWT.verify(token, "Raviraj", async (err, decodedToken) => {
        if (err) {
          return err;
        } else {
          tokn = decodedToken as JWT.JwtPayload;
        }
      });
    } catch (error) {
      console.log(error);
      return null;
    }
    const usr = await userModel
      .findOne<User>({ username: tokn.username })
      .exec();
    if (usr != null) {
      return {
        status: "success",
        username: usr.username,
        role: usr.role,
      };
    } else {
      return null;
    }
  }
  else return null;
};

export {loginService, coockieService};
