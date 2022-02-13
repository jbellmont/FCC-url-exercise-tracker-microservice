import mongoose, { Document, Model } from "mongoose";

export interface User extends Document {
  _id: string;
  username: string;
}

export const username = { username: String };

const userSchema = new mongoose.Schema<User>({
  ...username,
});

export const UserModel: Model<User> = mongoose.model("user", userSchema);
