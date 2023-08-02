// Import the RangoJS and http module
import rango from "rango";
import http from "http";

// Create an instance of the RangoJS app
const app = rango();

// Define a route for the home page
app.add({
  path: "/",
  GET: () => {
    return "Hello, RangoJS!";
  },
});

// Start the server
const port = 3000;
http.createServer(app).listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
