"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.connectToDatabase = exports.collections = void 0;
// External Dependencies
const mongoDB = __importStar(require("mongodb"));
// Global Variables
exports.collections = {};
// Initialize Connection
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        let connString = process.env.DB_CONN_STRING;
        let collectionName = process.env.BLOGS_COLLECTION_NAME;
        let userCollectionName = process.env.USERS_COLLECTION_NAME;
        if (connString != null && collectionName != null && userCollectionName != null) {
            const client = new mongoDB.MongoClient(connString);
            yield client.connect();
            const db = client.db(process.env.DB_NAME);
            /**
             * Adding schema validation
             */
            // try {
            //   await db.command({
            //     "collMod": process.env.BLOGS_COLLECTION_NAME,
            //     "validator": {
            //       $jsonSchema: {
            //         bsonType: "object",
            //         required: ["name", "content"],
            //         additionalProperties: false,
            //         properties: {
            //           _id: {},
            //           name: {
            //             bsonType: "string",
            //             description: "title of the blog"
            //           },
            //           content: {
            //             bsonType: "string",
            //             description: "content of the blog"
            //           }
            //         }
            //       }
            //     }
            //   });
            //   await db.command({
            //     "collMod": process.env.USERS_COLLECTION_NAME,
            //     "validator": {
            //       $jsonSchema: {
            //         bsonType: "object",
            //         required: ["email"],
            //         additionalProperties: false,
            //         properties: {
            //           _id: {},
            //           email: {
            //             bsonType: "string",
            //             description: "email of the user"
            //           }
            //         }
            //       }
            //     }
            //   });
            // } catch (error) {
            //   console.log(error);
            // }
            const blogsCollection = db.collection(collectionName);
            const usersCollection = db.collection(userCollectionName);
            exports.collections.blogs = blogsCollection;
            exports.collections.users = usersCollection;
            console.log(`Successfully connected to database: ${db.databaseName} and collection: ${blogsCollection.collectionName}, ${usersCollection.collectionName}`);
        }
    });
}
exports.connectToDatabase = connectToDatabase;
