import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const mongoMemoryServer = new MongoMemoryServer();

export const connectToDatabase = async () => {
  const uri = mongoMemoryServer.getUri();
  await mongoose.connect(uri);
};

export const closeDatabase = async () => {
  mongoose.connection.dropDatabase();
  mongoose.connection.close();
  mongoMemoryServer.stop();
};

export const clearDatabase = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
};
