import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

import { UserModel } from "../models/user.model";

import { createUser } from "./user";

const MOCK_USERNAME = "test123";

let connection: typeof mongoose;
let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  connection = await mongoose.connect(mongoServer.getUri(), {});
});

afterAll(async () => {
  if (connection) {
    await connection.connection.close();
  }
  if (mongoServer) {
    await mongoServer.stop();
  }
});

describe("User service", () => {
  it("should create a new user in the database", async () => {
    const newUser = await createUser(MOCK_USERNAME);
    const storedNewUser = await UserModel.findOne({
      username: newUser.username,
    });

    expect(storedNewUser!.username).toBe(MOCK_USERNAME);
  });

  it("should throw an error if database is unable to create new user", async () => {
    //@ts-expect-error
    expect(createUser(123)).rejects.toThrow(
      "Database failed to create a new user"
    );
  });
});
