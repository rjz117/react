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
Object.defineProperty(exports, "__esModule", { value: true });
const menuSchema_1 = require("../model/menuSchema");
const menuService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const role = req.params.role;
    try {
        let menus;
        if (role === "admin") {
            menus = yield menuSchema_1.menuModel.find({}).exec();
        }
        else {
            menus = yield menuSchema_1.menuModel.find({ flag: role }).exec();
        }
        res.status(200).json({
            status: "success",
            menus: menus,
        });
    }
    catch (error) {
        res.status(401).json({
            status: "fail",
            msg: "something went wrong",
        });
    }
});
exports.default = menuService;
