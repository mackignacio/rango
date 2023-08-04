// Import the RangoJS and http module
import rango from "rango";

// Create an instance of the RangoJS app
const app = rango();

// Define a multiple route for the home, about and contact page
app.add([
  {
    path: "home",
    GET: () => {
      return "Welcome to the RangoJS!";
    },
  },
  {
    path: "about",
    GET: () => {
      return "About Us: Learn more about our library.";
    },
  },
  {
    path: "contact",
    GET: () => {
      return "Contact Us: Reach out to us for any issues/questions.";
    },
  },
]);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
