import mongoose from "mongoose";

import { exercise } from "./exercise.model";
import { username } from "./user.model";

const logSchema = new mongoose.Schema({
  username,
  count: Number,
  log: [exercise],
});

export const Log = mongoose.model("log", logSchema);
