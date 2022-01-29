import mongoose from "mongoose";

export const username = { username: String };

const userSchema = new mongoose.Schema({
  username,
});

export const User = mongoose.model("user", userSchema);
