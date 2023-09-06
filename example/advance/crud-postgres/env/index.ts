import dotenv from "dotenv";
dotenv.config();
const DB_URL = process.env.DB_URL || "localhost:3306";
const DB_USERNAME = process.env.DB_USERNAME || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const PORT = Number(process.env.PORT) || 3000;

export { DB_URL, DB_USERNAME, DB_PASSWORD, PORT };
