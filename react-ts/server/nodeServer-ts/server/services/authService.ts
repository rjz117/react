import { Request, Response } from "express";
import { userModel } from "../model/userModel";
import JWT from "jsonwebtoken";

type Token = {
  auth: string;
};

type User = {
  username: string;
  password: string;
  role: string;
};

const checkLogin = async (req: Request, res: Response) => {
  try {
    const allUser = await userModel.findOne(req.body).exec();
    const myUser = allUser;
    if (allUser === null) {
      return res.json({
        status: "fail",
        msg: "authentication failed",
      });
    }
    const username = myUser?.username;
    const accessToken: string = JWT.sign({ username }, "Raviraj", {
      expiresIn: "100s",
    });
    return res.status(200).json({
      status: "success",
      role: myUser?.role,
      accessToken: accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: "fail",
      msg: "authentication failed",
    });
  }
};

const checkCookie = async (req: Request, res: Response) => {
  const token = req.body.tkn as string;
  JWT.verify(token, "Raviraj", async (err, decodedToken) => {
    if (err) {
      res.json({ status: "failed", msg: err.message });
    } else {
      const tokn = decodedToken as JWT.JwtPayload;
      const uname = { username: tokn.username };
      const usr = await userModel.findOne(uname).exec();
      const myUser = usr?.toJSON() as User;
      res.json({
        status: "success",
        username: myUser.username,
        role: myUser.role,
      });
    }
  });
};

export { checkLogin, checkCookie };
