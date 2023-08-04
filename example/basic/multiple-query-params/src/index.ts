// Import RangoJS and http module
import rango from "rango";

// Create an instance of the RangoJS app
const app = rango();

// Add route with multiple query params
app.add({
  path: "search",
  GET: (context) => {
    const searchTerm = context.query.q || "No search term";
    const sortBy = context.query.sort || "date";
    return `Searching for "${searchTerm}" sorted by "${sortBy}"`;
  },
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
