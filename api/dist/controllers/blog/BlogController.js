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
const mongodb_1 = require("mongodb");
const conn_1 = require("../../db/conn");
class BlogController {
    getBlogs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (conn_1.collections.blogs != null) {
                    const blogs = (yield conn_1.collections.blogs.find({}).toArray());
                    res.status(200).send(blogs);
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).send(error.message);
                }
            }
        });
    }
    findBlogs(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
            try {
                const query = { _id: new mongodb_1.ObjectId(id) };
                const blog = (yield ((_b = conn_1.collections.blogs) === null || _b === void 0 ? void 0 : _b.findOne(query)));
                if (blog) {
                    res.status(200).send(blog);
                }
            }
            catch (error) {
                res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
            }
        });
    }
    addBlog(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newGame = req.body;
                const result = yield ((_a = conn_1.collections.blogs) === null || _a === void 0 ? void 0 : _a.insertOne(newGame));
                result
                    ? res.status(201).send(`Successfully created a new blog with id ${result.insertedId}`)
                    : res.status(500).send("Failed to create a new blog.");
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).send(error.message);
                }
            }
        });
    }
    updateBlog(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
            try {
                const updatedBlog = req.body;
                const query = { _id: new mongodb_1.ObjectId(id) };
                const result = yield ((_b = conn_1.collections.blogs) === null || _b === void 0 ? void 0 : _b.updateOne(query, { $set: updatedBlog }));
                result
                    ? res.status(200).send(`Successfully updated blog with id ${id}`)
                    : res.status(304).send(`Blog with id: ${id} not updated`);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).send(error.message);
                }
            }
        });
    }
    deleteBlog(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
            try {
                const query = { _id: new mongodb_1.ObjectId(id) };
                const result = yield ((_b = conn_1.collections.blogs) === null || _b === void 0 ? void 0 : _b.deleteOne(query));
                if (result && result.deletedCount) {
                    res.status(202).send(`Successfully removed game with id ${id}`);
                }
                else if (!result) {
                    res.status(400).send(`Failed to remove game with id ${id}`);
                }
                else if (!result.deletedCount) {
                    res.status(404).send(`Game with id ${id} does not exist`);
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).send(error.message);
                }
            }
        });
    }
}
module.exports = new BlogController();
