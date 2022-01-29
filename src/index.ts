import express, { Request, Response } from "express";
import cors from "cors";

require("dotenv").config();
const app = express();
const port = process.env.PORT;

// Middleware.
app.use(cors());
app.use(express.static("public"));
app.get("/", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/views/index.html");
});

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server online at http://localhost:${port}`);
    });
  } catch (e) {
    console.error(e);
    process.exit();
  }
};

start();
