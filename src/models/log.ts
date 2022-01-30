import mongoose from "mongoose";

import { exercise } from "./exercise";
import { username } from "./user";

const logSchema = new mongoose.Schema({
  username,
  count: Number,
  log: [exercise],
});

export const Log = mongoose.model("log", logSchema);
