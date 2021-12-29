// External Dependencies
import * as mongoDB from "mongodb";

// Global Variables
export const collections: { blogs?: mongoDB.Collection } = {}

// Initialize Connection
export async function connectToDatabase() {
  let connString = process.env.DB_CONN_STRING;
  let collectionName = process.env.GAMES_COLLECTION_NAME;

  if (connString != null && collectionName != null) {
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(connString);          
    await client.connect();
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
    const blogsCollection: mongoDB.Collection = db.collection(collectionName);
    collections.blogs = blogsCollection;
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${blogsCollection.collectionName}`);
  }
}