import rango from "rango";
import connect from "./db";
import { Router } from "rango/lib/app";
import addMiddleWares from "./middlewares";
import addRoutes from "./routes";
import { PORT } from "./env";

const app: Router = rango();

addMiddleWares(app);
addRoutes(app);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  connect();
});
