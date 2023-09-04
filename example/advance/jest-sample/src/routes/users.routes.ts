import users from "../controllers/users.controller";
import { authenticateJWT } from "../middlewares/jwt.middleware";

export default {
  path: "users",
  GET: users.get,
  middlewares: [authenticateJWT],
};

export const Register = {
  path: "register",
  POST: users.register,
  middlewares: [],
};

export const Login = {
  path: "login",
  POST: users.login,
  middlewares: [],
};
