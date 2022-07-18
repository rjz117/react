import { Request, Response } from "express";
import { loginService, coockieService } from "../service/authenticationService";

type Usr = {
  username: string;
  password: string;
};

type ResponseData = {
  status: string;
  role: string;
  accessToken: string;
};

type coockieResponse = {
  status: string;
  username: string;
  role: string;
};

type error = {
  status: string;
  msg: string;
};

const checkLogin: (
  req: Request,
  res: Response
) => Promise<Response<ResponseData | error>> = async (req, res) => {
  const user: Usr = req.body;
  const response = await loginService(user);
  if (response == null) {
    return res.status(401).json({
      status: "fail",
      msg: "authentication failed",
    });
  } else {
    return res.status(200).json(response);
  }
};

const checkCookie: (
  req: Request,
  res: Response
) => Promise<Response<coockieResponse | error>> = async (req, res) => {
  const token = req.body.tkn as string;
  const response = await coockieService(token);
  if (response === null) {
    return res.status(401).json({
      status: "fail",
      msg: "authentication failed",
    });
  } else return res.status(200).json(response);
};

export { checkLogin, checkCookie };
