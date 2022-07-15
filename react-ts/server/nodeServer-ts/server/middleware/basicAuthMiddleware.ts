import { NextFunction, Request, Response } from "express";

const basicAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

  if (user == "admin" && pass == "admin") {
    return res.send("done");
  } else {
    let err = new Error("You are not authenticated!");
    res.setHeader("WWW-Authenticate", "Basic");
    res.status(401);
    return next(err);
  }
};

export {basicAuthMiddleware}