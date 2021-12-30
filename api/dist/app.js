"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const MasterRouter_1 = __importDefault(require("./routers/MasterRouter"));
const body_parser_1 = __importDefault(require("body-parser"));
const conn_1 = require("./db/conn");
// load the environment variables from the .env file
dotenv_1.default.config({
    path: '.env'
});
/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.router = MasterRouter_1.default;
        this.jsonParser = body_parser_1.default.json();
        this.urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
    }
}
// initialize server app
const server = new Server();
//Connecting to db
(0, conn_1.connectToDatabase)();
server.app.use(cors_1.default);
// make server app handle any route starting with '/api'
server.app.use('/api', server.jsonParser, server.router);
// make server listen on some port
((port = process.env.PORT || 5000) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
