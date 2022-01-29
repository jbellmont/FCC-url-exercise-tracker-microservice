import mongoose from "mongoose";

import { username } from "./user.model";

export const exercise = {
  description: String,
  duration: Number,
  date: String,
};

const exerciseSchema = new mongoose.Schema({
  username,
  exercise,
});

export const Exercise = mongoose.model("exercise", exerciseSchema);
