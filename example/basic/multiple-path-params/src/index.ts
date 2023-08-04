// Import RangoJS and http module
import rango from "rango";

// Create an instance of the RangoJS app
const app = rango();

// Add route with path params of 'id' and 'postId' in a single path
app.add({
  path: "users/:id/posts/:postId",
  GET: (context) => {
    const userId = context.params.id;
    const postId = context.params.postId;
    return `User ${userId} posted with ID: ${postId}`;
  },
});

// Add route with path params of 'id' in parent path
app.add({
  path: "users/:id",
  children: [
    {
      // Add path params 'postId' in child path
      path: "posts/:postId",
      GET: (context) => {
        const userId = context.params.id;
        const postId = context.params.postId;
        return `User ${userId} posted with ID: ${postId}`;
      },
    },
  ],
});

// Add route with nested children and path params
app.add({
  path: "users",
  children: [
    {
      // Add path params 'id'
      path: "/:id",
      children: [
        {
          // Add path for 'users/:id/posts'
          path: "posts",
          children: [
            {
              // Add path params 'postId' in child path
              path: ":postId",
              GET: (context) => {
                const userId = context.params.id;
                const postId = context.params.postId;
                return `User ${userId} posted with ID: ${postId}`;
              },
            },
          ],
        },
      ],
    },
  ],
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
