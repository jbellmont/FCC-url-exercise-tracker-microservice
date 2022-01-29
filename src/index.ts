import cors from "cors";
import express, { Request, Response } from "express";
import mongoose from "mongoose";

require("dotenv").config();
const app = express();
const port = process.env.PORT;

// Middleware.
app.use(cors());
app.use(express.static("public"));
app.get("/", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/views/index.html");
});

const databaseStart = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL || "test");
    console.log("Connected to MongoDB");
    return connection;
  } catch (e) {
    console.error("Could not connect to MongoDB");
    console.error(e);
    process.exit();
  }
};

const appStart = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server online at http://localhost:${port}`);
    });
  } catch (e) {
    console.error(e);
    process.exit();
  }
};

// Initializers.
databaseStart();
appStart();
