// Import RangoJS
import rango from "rango";

// Create an instance of the RangoJS app
const app = rango();

// Using Query Params in route
app.add({
  path: "users",
  GET: (context) => {
    const name = context.query.name || "stranger";
    return `Howdy, Cowboy coder ${name}!`;
  },
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
