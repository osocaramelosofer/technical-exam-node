
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config()
const mongoConnectionString = process.env.MONGO_CONNECTION_STRING || ''

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// export const mongoClient = new MongoClient(mongoConnectionString, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoConnectionString);
    console.log('Mongoose is connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB with Mongoose:', error);
    process.exit(1); // Finaliza la app si falla la conexión
  }
};