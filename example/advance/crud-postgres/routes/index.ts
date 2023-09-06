import { Router } from "rango/lib/app";
import users from "./users";

const routes = [users];

const addRoutes = (app: Router) => {
  routes.forEach((route: any) => {
    app.use(route);
  });
};

export default addRoutes;
