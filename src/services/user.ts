import { User, UserModel } from "../models/user";

export const createUser = async (username: string): Promise<User> => {
  try {
    const userDocument: User = new UserModel({
      username,
    });
    await userDocument.save();

    return userDocument;
  } catch (error) {
    throw new Error("Database failed to create a new user");
  }
};
