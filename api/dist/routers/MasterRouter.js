"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const BlogRouter_1 = __importDefault(require("./blog/BlogRouter"));
const LoginRouter_1 = __importDefault(require("./login/LoginRouter"));
class MasterRouter {
    constructor() {
        this._router = (0, express_1.Router)();
        this._subBlogRouter = BlogRouter_1.default;
        this._subUserRouter = LoginRouter_1.default;
        this._configure();
    }
    get router() {
        return this._router;
    }
    /**
     * Connect routes to their matching routers.
     */
    _configure() {
        this._router.use('/blogs', this._subBlogRouter);
        this._router.use('/users', this._subUserRouter);
    }
}
module.exports = new MasterRouter().router;
