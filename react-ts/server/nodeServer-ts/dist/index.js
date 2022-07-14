"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookieParser = require("cookie-parser");
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const buffer_1 = require("buffer");
const menu_1 = require("./router/menu");
const auth_1 = require("./router/auth");
const cors_1 = __importDefault(require("cors"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, body_parser_1.default)());
app.use(cookieParser());
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect("mongodb+srv://raviraj:raviraj117@cluster0.4s6mv.mongodb.net/user?retryWrites=true&w=majority");
        app.listen(5000, () => console.log("Server started on port 5000"));
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
});
const authentication = (req, res, next) => {
    let authheader = req.headers.authorization;
    if (!authheader) {
        let err = new Error("You are not authenticated!");
        res.setHeader("WWW-Authenticate", "Basic");
        res.status(401);
        return next(err);
    }
    console.log(authheader);
    let auth = new buffer_1.Buffer(authheader.split(" ")[1], "base64")
        .toString()
        .split(":");
    let user = auth[0];
    let pass = auth[1];
    if (user == "admin" && pass == "password") {
        return res.send('done');
    }
    else {
        let err = new Error("You are not authenticated!");
        res.setHeader("WWW-Authenticate", "Basic");
        res.status(401);
        return next(err);
    }
};
// First step is the authentication of the client
// app.use(authentication)
start();
app.use("/auth", auth_1.authRouter);
app.use("/menu", menu_1.menuRouter);
