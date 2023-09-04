import { Context } from "rango";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET, authenticateJWT } from "./jwt.middleware"; // Import your JWT middleware and secret

describe("authenticateJWT middleware", () => {
  let mockContext: any;
  let mockNextFunction: jest.Mock;

  beforeEach(() => {
    // Initialize a mock context object
    mockContext = {
      req: {
        headers: {},
      },
      res: {
        status: jest.fn(() => mockContext.res),
        send: jest.fn(),
      },
    };

    // Initialize a mock for the next function
    mockNextFunction = jest.fn();
  });

  it("should return a 401 status response for missing token", () => {
    // Call the authenticateJWT middleware
    authenticateJWT(mockContext, mockNextFunction);

    // Verify the expected behavior for missing token
    expect(mockContext.res.status).toHaveBeenCalledWith(401);
    expect(mockContext.res.send).toHaveBeenCalledWith("Unauthorized");
    expect(mockNextFunction).not.toHaveBeenCalled(); // Next function should not have been called
  });

  it("should return a 403 status response for an invalid token", () => {
    // Set an invalid token in the request headers
    mockContext.req.headers.authorization = "Bearer invalid-token";

    // Call the authenticateJWT middleware
    authenticateJWT(mockContext, mockNextFunction);

    // Verify the expected behavior for an invalid token
    expect(mockContext.res.status).toHaveBeenCalledWith(403);
    expect(mockContext.res.send).toHaveBeenCalledWith("Forbidden");
    expect(mockNextFunction).not.toHaveBeenCalled(); // Next function should not have been called
  });

  it("should call the next function for a valid token", () => {
    // Generate a valid token for testing
    const validToken = jwt.sign({ id: 123, username: "testUser" }, JWT_SECRET);

    // Set the valid token in the request headers
    mockContext.req.headers.authorization = `Bearer ${validToken}`;

    // Call the authenticateJWT middleware
    authenticateJWT(mockContext, mockNextFunction);

    // Verify that the next function has been called
    expect(mockNextFunction).toHaveBeenCalled();
    expect(mockContext.res.status).not.toHaveBeenCalled();
    expect(mockContext.res.send).not.toHaveBeenCalled();
  });
});
