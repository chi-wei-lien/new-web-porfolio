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
class LoginController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (conn_1.collections.users != null) {
                    const users = (yield conn_1.collections.users.find({}).toArray());
                    res.status(200).send(users);
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).send(error.message);
                }
            }
        });
    }
    findUsers(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
            try {
                const query = { _id: new mongodb_1.ObjectId(id) };
                const user = (yield ((_b = conn_1.collections.users) === null || _b === void 0 ? void 0 : _b.findOne(query)));
                if (user) {
                    res.status(200).send(user);
                }
            }
            catch (error) {
                res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
            }
        });
    }
    addUser(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = req.body;
                const result = yield ((_a = conn_1.collections.users) === null || _a === void 0 ? void 0 : _a.insertOne(newUser));
                result
                    ? res.status(201).send(`Successfully created a new user with id ${result.insertedId}`)
                    : res.status(500).send("Failed to create a new user.");
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).send(error.message);
                }
            }
        });
    }
    updateUser(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
            try {
                const updatedUser = req.body;
                const query = { _id: new mongodb_1.ObjectId(id) };
                const result = yield ((_b = conn_1.collections.users) === null || _b === void 0 ? void 0 : _b.updateOne(query, { $set: updatedUser }));
                result
                    ? res.status(200).send(`Successfully updated user with id ${id}`)
                    : res.status(304).send(`User with id: ${id} not updated`);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).send(error.message);
                }
            }
        });
    }
    deleteUser(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
            try {
                const query = { _id: new mongodb_1.ObjectId(id) };
                const result = yield ((_b = conn_1.collections.users) === null || _b === void 0 ? void 0 : _b.deleteOne(query));
                if (result && result.deletedCount) {
                    res.status(202).send(`Successfully removed user with id ${id}`);
                }
                else if (!result) {
                    res.status(400).send(`Failed to remove user with id ${id}`);
                }
                else if (!result.deletedCount) {
                    res.status(404).send(`User with id ${id} does not exist`);
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
module.exports = new LoginController();
