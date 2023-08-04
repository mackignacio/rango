# Path Params

Path Params are a powerful feature that allows you to extract dynamic values from the URL path, making your routes more flexible and versatile. Path Params are placeholders in the URL path that allow you to capture dynamic values and access them in your route handlers. You can define a Path Param using a colon followed by the param name. In this section, we'll explore how to use Path Params in your RangoJS routes, so let's hit the trail and get started!

```ts
// Import RangoJS
import rango from "rango";

// Create an instance of the RangoJS app
const app = rango();

// Add route with path params of 'id' in single path
app.add({
  path: "users/:id",
  GET: (context) => {
    const userId = context.params.id;
    return `Hello, user with ID: ${userId}`;
  },
});

// Add route with path params of 'id' in child path
app.add({
  path: "users"
  children: [
    {
      path: ":id",
      GET: (context) => {
        const userId = context.params.id;
        return `Hello, user with ID: ${userId}`;
      }
    }
  ],
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

In the example above, we've defined a route **`/users/:id`** with a Path Param named `id`. When a request is made to this route with a specific ID, we can access that ID inside the route object using `context.params.id`.
