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
const express_1 = require("express");
const BlogController_1 = __importDefault(require("../../controllers/blog/BlogController"));
class BlogRouter {
    constructor() {
        this._router = (0, express_1.Router)();
        this._controller = BlogController_1.default;
        this._configure();
    }
    get router() {
        return this._router;
    }
    _configure() {
        this._router.get('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            return this._controller.getBlogs(req, res);
        }));
        this._router.get("/blog/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            return this._controller.findBlogs(req, res);
        }));
        this._router.post("/add", (req, res) => __awaiter(this, void 0, void 0, function* () {
            return this._controller.addBlog(req, res);
        }));
        this._router.put("/update/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            return this._controller.updateBlog(req, res);
        }));
        this._router.delete("/delete/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            return this._controller.deleteBlog(req, res);
        }));
    }
}
module.exports = new BlogRouter().router;
