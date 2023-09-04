import { Context } from "rango";
import * as fs from "fs";
import * as path from "path";
import { mocked } from "ts-jest/utils";
import userController from "./users.controller"; // Import the module containing your get function
import { authenticateJWT } from "../middlewares/jwt.middleware";

// Mock the dependencies
jest.mock("fs");

describe("get function", () => {
  let mockContext: any;

  beforeEach(() => {
    // Initialize a mock context object
    mockContext = {
      res: {
        json: jest.fn(),
        status: jest.fn(() => mockContext.res),
      },
    };
  });

  it("should return an array of usernames when reading the file succeeds", async () => {
    const mockUsers = [
      { username: "user1" },
      { username: "user2" },
      { username: "user3" },
    ];

    // Mock fs.readFileSync to return user data
    mocked(fs.readFileSync).mockReturnValueOnce(JSON.stringify(mockUsers));

    await userController.get(mockContext);

    expect(mockContext.res.json).toHaveBeenCalledWith(
      mockUsers.map((user) => user.username)
    );
  });

  it("should return a 500 status response when reading the file fails", async () => {
    const mockError = new Error("File read error");

    // Mock fs.readFileSync to throw an error
    mocked(fs.readFileSync).mockImplementation(() => {
      throw mockError;
    });

    await userController.get(mockContext);

    expect(mockContext.res.status).toHaveBeenCalledWith(500);
    expect(mockContext.res.json).toHaveBeenCalledWith({
      error: mockError.message,
    });
  });
});

describe("register function", () => {
  let mockContext: any;

  beforeEach(() => {
    // Initialize a mock context object
    mockContext = {
      req: {
        body: {
          username: "newUser",
          password: "newPassword",
        },
      },
      res: {
        json: jest.fn(),
        status: jest.fn(() => mockContext.res),
        send: jest.fn(),
      },
    };
  });

  it("should successfully register a new user", async () => {
    // Mock the fs.readFileSync function to return an empty array of users
    mocked(fs.readFileSync).mockReturnValueOnce(JSON.stringify([]));

    // Mock the fs.writeFileSync function to do nothing
    mocked(fs.writeFileSync).mockReturnValueOnce(undefined);

    // Call the register function
    await userController.register(mockContext);

    // Verify that the response includes a JWT token
    expect(mockContext.res.json).toHaveBeenCalledWith(
      expect.objectContaining({ token: expect.any(String) })
    );
  });

  it("should return an error response if the username already exists", async () => {
    // Mock the fs.readFileSync function to return an array of existing users
    const existingUsers = [{ username: "newUser", password: "password" }];
    mocked(fs.readFileSync).mockReturnValueOnce(JSON.stringify(existingUsers));

    // Call the register function
    await userController.register(mockContext);

    // Verify the expected behavior
    expect(mockContext.res.status).toHaveBeenCalledWith(400);
    expect(mockContext.res.send).toHaveBeenCalledWith(
      "Username already exists"
    );
  });

  it("should return a 500 status response when an error occurs", async () => {
    // Mock the fs.readFileSync function to throw an error
    mocked(fs.readFileSync).mockImplementation(() => {
      throw new Error("File read error");
    });

    // Call the register function
    await userController.register(mockContext);

    // Verify the expected behavior
    expect(mockContext.res.status).toHaveBeenCalledWith(500);
    expect(mockContext.res.json).toHaveBeenCalledWith({
      error: "File read error",
    });
  });
});

describe("login function", () => {
  let mockContext: any;

  beforeEach(() => {
    // Initialize a mock context object
    mockContext = {
      req: {
        body: {
          username: "testUser",
          password: "testPassword",
        },
      },
      res: {
        json: jest.fn(),
        status: jest.fn(() => mockContext.res),
        send: jest.fn(),
      },
    };
  });

  it("should successfully log in a user", async () => {
    const mockUsers = [
      { username: "testUser", password: "testPassword" },
      { username: "otherUser", password: "otherPassword" },
    ];

    mocked(fs.readFileSync).mockReturnValueOnce(JSON.stringify(mockUsers));

    await userController.login(mockContext);

    expect(mockContext.res.json).toHaveBeenCalledWith(
      expect.objectContaining({ token: expect.any(String) })
    );
  });

  it("should return a 401 status response for unauthorized login", async () => {
    const mockUsers = [
      { username: "testUser", password: "wrongPassword" },
      { username: "otherUser", password: "wrongPassword2" },
    ];

    mocked(fs.readFileSync).mockReturnValueOnce(JSON.stringify(mockUsers));

    await userController.login(mockContext);

    expect(mockContext.res.status).toHaveBeenCalledWith(401);
    expect(mockContext.res.send).toHaveBeenCalledWith("Unauthorized");
  });

  it("should return a 500 status response when an error occurs", async () => {
    mocked(fs.readFileSync).mockImplementation(() => {
      throw new Error("File read error");
    });

    await userController.login(mockContext);

    expect(mockContext.res.status).toHaveBeenCalledWith(500);
    expect(mockContext.res.json).toHaveBeenCalledWith({
      error: "File read error",
    });
  });
});
