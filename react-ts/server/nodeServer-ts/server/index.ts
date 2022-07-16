import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import { menuRouter } from "./router/menuRouter";
import { authRouter } from "./router/authRouter";
import { dataRouter } from "./router/dataRouter";
import {basicAuthRouter} from './router/basicAuthRouter';
import {config} from './config/config';

const start = async () => {
  try {
    await mongoose.connect(config.mongo.url);
    app.listen(config.server.port, () => console.log("Server started on port "+config.server.port));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/menu", menuRouter);
app.use("/data", dataRouter);
app.use("/basicauth", basicAuthRouter)

start();
