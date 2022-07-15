import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import { menuRouter } from "./router/menuRouter";
import { authRouter } from "./router/authRouter";
import { dataRouter } from "./router/dataRouter";
import {basicAuthRouter} from './router/basicAuthRouter';

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

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/menu", menuRouter);
app.use("/data", dataRouter);
app.use("/basicauth", basicAuthRouter)

start();
