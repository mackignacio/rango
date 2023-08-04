# Route-Specific Middleware

Route-specific middleware is applied only to specific routes or route groups. You can't add them using `app.use()` with a specific route path or directly within your route definition. You need to define them using the `middlewares` key inside your route definition.

```ts
// Import RangoJS and http module
import rango, { Context, NextFunction } from "rango";
import http from "http";

// Create an instance of the RangoJS app
const app = rango();

// Route-Specific middleware function
const authMiddleware = (context: Context, next: NextFunction) => {
  const { req, res } = context;
  // Check authentication logic
  if (req.isAuthenticated()) {
    next(); // Proceed to the next middleware or route handler
  } else {
    // Stop the request-cycle and send back a response
    res.status(401).send("Unauthorized");
  }
};

app.add([
  {
    path: "users",
    middlewares: [
      // Inline middleware function callback
      (context: Context, next: NextFunction) => {
        const { req, res } = context;

        // Check user 'isAdmin'
        if (req.user.isAdmin()) {
          res.status(401).send("Unauthorized");
        } else {
          next(); // Proceed to the next middleware or route handler
        }
      },
      // route specific middleware function callback
      authMiddleware,
    ],
  },
]);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```
