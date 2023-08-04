# Error Handling Middleware

Error handling middleware is used to catch and process errors that occur during request processing. These middleware functions have an additional `error` key on the `Context` object, allowing them to handle errors and respond appropriately.

```ts
// Import RangoJS and http module
import rango, { Context, NextFunction } from "rango";
import http from "http";

// Create an instance of the RangoJS app
const app = rango();

// Error handling middleware example
const errorHandler = ({ error, res }: Context, next: NextFunction) => {
  if (error) {
    // Logs the error
    console.error(error);

    // Respond with a generic error message
    res.status(500).send(`Something went wrong!`);
  }
};

// Applying error handling middleware at the end of the middleware stack
app.use(errorHandler);

app.add([
  // Your route configurations will be added here
]);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

Middlewares in RangoJS is a powerful tool that enables you to handle common tasks, enhance the behavior of your routes, and ensure smooth request processing. By understanding and utilizing middleware effectively, you can create robust and well-structured web applications.
