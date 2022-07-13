const router = require("express").Router();
import JWT from "jsonwebtoken";
import {userModel} from '../schema/userSchema';
import {Request, Response} from 'express'
 
type Token = {
  auth: string;
};

type User = {
  username : string,
  password : string,
  role : string
}

require("dotenv").config();

router.post("/login", async (req: Request, res: Response) => {
  try {
    const allUser = await userModel.findOne(req.body).exec();
    const myUser = allUser;
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
});

router.post("/coockie", async (req: Request, res: Response) => {
  console.log(req.body);
  const token = req.body.tkn as string;
  console.log(token);
  JWT.verify(
    token,
    "Raviraj",
    async (err, decodedToken) => {
      if (err) {
        console.log({status : 'failed',msg : err.message}) ;
        res.json({status : 'failed',msg : err.message});
      } else {
        const tokn = decodedToken as JWT.JwtPayload;
        const uname = tokn.username;
        const usrname = { username: uname };
        console.log(usrname);
        const usr = await userModel.findOne(usrname).exec();
        const myUser = usr?.toJSON() as User;
        console.log(usr);
        res.json({
          status: "success",
          username: myUser.username,
          role: myUser.role,
        });
      }
    }
  );
});

export { router as authRouter};