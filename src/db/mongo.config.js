
import { configDotenv } from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';
configDotenv();

console.log('database', process.env.MONGODB_URI);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export {client}
