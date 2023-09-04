import { Context, NextFunction } from "rango";
import * as jwt from "jsonwebtoken";

export const JWT_SECRET = "your-secret-key";

export const authenticateJWT = (context: Context, next: NextFunction) => {
  const { req, res } = context;

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  const tokenWithoutBearer = token.replace("Bearer ", "");

  try {
    jwt.verify(tokenWithoutBearer, JWT_SECRET);
    next();
  } catch (error) {
    return res.status(403).send("Forbidden");
  }
};

export const signJWT = (user: any) => {
  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET);
  return token;
};
