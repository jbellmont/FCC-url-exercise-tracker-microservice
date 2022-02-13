import { NextFunction, Request, Response } from "express";

import { createUser } from "../services/user.service";

export const createNewUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { username } = request.body;

  if (typeof username !== "string") {
    response.status(400);
    throw new Error("Incorrect data type passed in the request body.");
  }

  try {
    const newUser = await createUser(username);
    response.status(201);
    response.json({ data: newUser });
  } catch (error) {
    response.status(400);
    throw new Error("Unable to create a new user.");
  }
};
