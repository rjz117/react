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
exports.authRouter = void 0;
const router = require("express").Router();
exports.authRouter = router;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userSchema_1 = require("../schema/userSchema");
require("dotenv").config();
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUser = yield userSchema_1.userModel.findOne(req.body).exec();
        const myUser = allUser;
        const username = myUser === null || myUser === void 0 ? void 0 : myUser.username;
        const accessToken = jsonwebtoken_1.default.sign({ username }, "Raviraj", {
            expiresIn: "100s",
        });
        return res.status(200).json({
            status: "success",
            role: myUser === null || myUser === void 0 ? void 0 : myUser.role,
            accessToken: accessToken,
        });
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            status: "fail",
            msg: "authentication failed",
        });
    }
}));
router.post("/coockie", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const token = req.body.tkn;
    console.log(token);
    jsonwebtoken_1.default.verify(token, "Raviraj", (err, decodedToken) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            console.log({ status: 'failed', msg: err.message });
            res.json({ status: 'failed', msg: err.message });
        }
        else {
            const tokn = decodedToken;
            const uname = tokn.username;
            const usrname = { username: uname };
            console.log(usrname);
            const usr = yield userSchema_1.userModel.findOne(usrname).exec();
            const myUser = usr === null || usr === void 0 ? void 0 : usr.toJSON();
            console.log(usr);
            res.json({
                status: "success",
                username: myUser.username,
                role: myUser.role,
            });
        }
    }));
}));
