import { Router } from "rango/lib/app";
import { Middleware } from "rango/lib/types";
import bodyParser from "body-parser";

const middlewares: Middleware[] = [bodyParser.json(), bodyParser.urlencoded({ extended: false })];

const addMiddleWares = (app: Router) => {
  middlewares.forEach((middleware: Middleware) => {
    app.use(middleware);
  });
};

export default addMiddleWares;
