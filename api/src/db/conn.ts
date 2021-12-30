// External Dependencies
import * as mongoDB from "mongodb";

// Global Variables
export const collections: { blogs?: mongoDB.Collection, users?: mongoDB.Collection } = {}

// Initialize Connection
export async function connectToDatabase() {
  let connString = process.env.DB_CONN_STRING;
  let collectionName = process.env.BLOGS_COLLECTION_NAME;
  let userCollectionName = process.env.USERS_COLLECTION_NAME;

  if (connString != null && collectionName != null && userCollectionName != null) {
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(connString);
    await client.connect();
    const db: mongoDB.Db = client.db(process.env.DB_NAME);

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


    const blogsCollection: mongoDB.Collection = db.collection(collectionName);
    const usersCollection: mongoDB.Collection = db.collection(userCollectionName);
    collections.blogs = blogsCollection;
    collections.users = usersCollection;
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${blogsCollection.collectionName}, ${usersCollection.collectionName}`);
  }
}