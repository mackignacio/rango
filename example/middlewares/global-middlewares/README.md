# Global Middleware

Global middleware is applied to all routes and is registered using `app.use()` without a specific route path. This type of middleware is typically used for tasks that need to be executed on every request, such as parsing `request bodies`, `setting headers`, or `logging`.

```ts
// Import the RangoJS
import rango from "rango";

// Import middlewares
import bodyParser from "body-parser";
import logger from "./logger";

// Create an instance of the RangoJS app
const app = rango();

// Global middleware example
app.use(bodyParser.json()); // Create application/json parser
app.use(bodyParser.urlencoded({ extended: false })); // Create application/x-www-form-urlencoded parser
app.use(logger); // Custom logging middleware

app.add({
  path: "users",
  GET: (context) => {
    // Get the users body using context.body
    return { body: context.body };
  },
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```
