import { Context } from "rango";
import * as fs from "fs";
import * as path from "path";
import jwt from "jsonwebtoken"; // Make sure to import jwt and define JWT_SECRET
import { signJWT } from "../middlewares/jwt.middleware";

const USERS_FILE = path.join(__dirname, "users.json");

async function get(context: Context): Promise<any> {
  try {
    const { res } = context;

    const data = fs.readFileSync(USERS_FILE, "utf-8");
    const users = JSON.parse(data);

    const usernames = users.map((user: any) => user.username);
    return res.json(usernames);
  } catch (err: any) {
    return context.res.status(500).json({ error: err.message });
  }
}

async function register(context: Context): Promise<any> {
  try {
    const { req, res } = context;
    const { username, password } = req.body as any;

    const data = fs.readFileSync(USERS_FILE, "utf-8");
    const users = JSON.parse(data);

    const existingUser = users.find((u: any) => u.username === username);
    if (existingUser) {
      return res.status(400).send("Username already exists");
    }

    const user = { id: users.length + 1, username, password };
    users.push(user);

    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

    const token = signJWT(user);

    return res.json({ token });
  } catch (err: any) {
    return context.res.status(500).json({ error: err.message });
  }
}

async function login(context: Context): Promise<any> {
  try {
    const { req, res } = context;

    const data = fs.readFileSync(USERS_FILE, "utf-8");
    const users = JSON.parse(data);

    const { username, password } = req.body as any;
    const user = users.find(
      (u: any) => u.username === username && u.password === password
    );
    if (!user) {
      return res.status(401).send("Unauthorized");
    }

    const token = signJWT(user);

    return res.json({ token });
  } catch (err: any) {
    return context.res.status(500).json({ error: err.message });
  }
}

export default { get, register, login };
