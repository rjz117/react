
import express, {NextFunction, Request, Response} from 'express';
import cookieParser = require("cookie-parser")
import bodyParser from "body-parser";
import mongoose from "mongoose";
const app = express();
import { Buffer } from 'buffer';
import {menuRouter } from './router/menu';
import {authRouter } from './router/auth';

import cors from "cors";



app.use(express.json());
app.use(cors());

app.use(bodyParser());
app.use(cookieParser());

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://raviraj:raviraj117@cluster0.4s6mv.mongodb.net/user?retryWrites=true&w=majority"
    );
    app.listen(5000, () => console.log("Server started on port 5000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const authentication = (req:Request, res:Response, next:NextFunction) => {
  let authheader = req.headers.authorization;

  if (!authheader) {
    let err = new Error("You are not authenticated!");
    res.setHeader("WWW-Authenticate", "Basic");
    res.status(401);
    return next(err);
  }

  let auth = new Buffer(authheader.split(" ")[1], "base64")
    .toString()
    .split(":");
  let user = auth[0];
  let pass = auth[1];

  if (user == "admin" && pass == "password") {
    return res.send('done')
  } else {
    let err = new Error("You are not authenticated!");
    res.setHeader("WWW-Authenticate", "Basic");
    res.status(401);
    return next(err);
  }
};


// First step is the authentication of the client
// app.use(authentication)

start();
app.use("/auth", authRouter);
app.use("/menu", menuRouter);
