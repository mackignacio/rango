// Import the RangoJS and http module
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
