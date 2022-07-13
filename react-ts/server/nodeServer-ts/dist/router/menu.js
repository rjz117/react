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
exports.menuRouter = void 0;
const router = require("express").Router();
exports.menuRouter = router;
const data = require("../data/data.json");
const menuSchema_1 = require("../schema/menuSchema");
router.get("/posts", (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {
        next: { page: 0, limit: 0 },
        previous: { page: 0, limit: 0 },
        results: [{
                userId: 0,
                id: 0,
                title: '',
                body: ''
            }]
    };
    if (endIndex < data.length) {
        results.next = {
            page: page + 1,
            limit: limit,
        };
    }
    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit,
        };
    }
    results.results = data.slice(startIndex, endIndex);
    res.json(results);
});
router.get("/:role", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const role = req.params.role;
    console.log(role);
    try {
        let allMenus;
        if (role === "admin") {
            allMenus = yield menuSchema_1.menuModel.find({}).exec();
            console.log(allMenus);
        }
        else {
            allMenus = yield menuSchema_1.menuModel.find({ flag: role }).exec();
        }
        const menus = allMenus;
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
}));
