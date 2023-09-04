import rango, { Context, NextFunction } from "rango";
import * as jwt from "jsonwebtoken";
import * as bodyParser from "body-parser";
import * as fs from "fs";
import * as path from "path";
import UsersRoute, { Login, Register } from "./routes/users.routes";

export const app = rango();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.add(UsersRoute);
app.add(Register);
app.add(Login);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
