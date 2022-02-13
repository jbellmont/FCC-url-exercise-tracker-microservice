import { Request } from "express";

import * as userService from "../services/user.service";

import { createNewUser } from "./user.controller";

const MOCK_RESPONSE: any = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
const MOCK_NEXT = jest.fn();

describe("User controller", () => {
  it("should respond with JSON user data after creating new user", async () => {
    const MOCK_USERNAME = "test123";
    const MOCK_USER_DOCUMENT = {
      _id: "abc123",
      username: MOCK_USERNAME,
    };
    const createUserSpy = jest.spyOn(userService, "createUser");
    createUserSpy.mockResolvedValueOnce(MOCK_USER_DOCUMENT as any);
    const MOCK_REQUEST = { body: { username: MOCK_USERNAME } } as Request;

    await createNewUser(MOCK_REQUEST, MOCK_RESPONSE, MOCK_NEXT);

    expect(userService.createUser).toBeCalledWith(MOCK_USERNAME);
    expect(MOCK_RESPONSE.status).toBeCalledWith(201);
    expect(MOCK_RESPONSE.json).toBeCalledWith({
      data: MOCK_USER_DOCUMENT,
    });
  });

  it("should throw an error if non-string data is passed in body", async () => {
    const MOCK_USERNAME: number = 123;
    const createUserSpy = jest.spyOn(userService, "createUser");
    createUserSpy.mockResolvedValueOnce(new Error() as any);
    const MOCK_REQUEST = { body: { username: MOCK_USERNAME } } as Request;

    expect(
      createNewUser(MOCK_REQUEST, MOCK_RESPONSE, MOCK_NEXT)
    ).rejects.toThrow("Incorrect data type passed in the request body");
    expect(MOCK_RESPONSE.status).toBeCalledWith(400);
  });
});
