# Query Params

Query Params are a mighty tool that allows you to pass data to your server through the URL query string, making your routes more versatile and powerful. Query Params are key-value pairs that come after the ? in the URL. You can access them in your route handlers using the req.query object. In this section, we'll explore how to use Query Params in your RangoJS routes, so let's saddle up and get started!

```ts
// Import RangoJS
import rango from "rango";

// Create an instance of the RangoJS app
const app = rango();

// Using Query Params in route
app.add({
  path: "users",
  GET: (context) => {
    const userId = context.query.name || "stranger";
    return `Howdy, Cowboy coder ${name}!`;
  },
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

In the example above, we've defined a route `/user`, and you can pass a Query Param named name to personalize the greeting. If no name is provided, it defaults to `'stranger'`.
