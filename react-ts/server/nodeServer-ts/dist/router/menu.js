"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuRouter = void 0;
const express_1 = __importDefault(require("express"));
const data = require("../data/data.json");
const menuService_1 = __importDefault(require("../services/menuService"));
const router = express_1.default.Router();
exports.menuRouter = router;
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
router.get("/:role", menuService_1.default);
