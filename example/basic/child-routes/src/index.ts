// Import the RangoJS and http module
import rango from "rango";

// Create an instance of the RangoJS app
const app = rango();

// Define parent and child routes
app.add([
  {
    // Define parent route
    path: "parent",
    GET: () => {
      // Logic to handle GET request for '/parent'
      return "This is a GET request  for '/parent'!";
    },
    POST: () => {
      // Logic to handle POST request for '/parent'
      return "This is a POST request  for '/parent'!";
    },
    PUT: () => {
      // Logic to handle PUT request for '/parent'
      return "This is a PUT request  for '/parent'!";
    },
    PATCH: () => {
      // Logic to handle PATCH request for '/parent'
      return "This is a PATCH request  for '/parent'!";
    },
    DELETE: () => {
      // Logic to handle DELETE request for '/parent'
      return "This is a DELETE request  for '/parent'!";
    },
    children: [
      {
        // Define child route
        path: "child",
        GET: () => {
          // Logic to handle GET request for '/parent/child'
          return "This is a GET request for '/parent/child'!";
        },
        POST: () => {
          // Logic to handle POST request for '/parent/child'
          return "This is a POST request for '/parent/child'!";
        },
        PUT: () => {
          // Logic to handle PUT request for '/parent/child'
          return "This is a PUT request for '/parent/child'!";
        },
        PATCH: () => {
          // Logic to handle PATCH request for '/parent/child'
          return "This is a PATCH request for '/parent/child'!";
        },
        DELETE: () => {
          // Logic to handle DELETE request for '/parent/child'
          return "This is a DELETE request for '/parent/child'!";
        },
      },
    ],
  },
]);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
