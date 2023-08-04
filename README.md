<h1 align="center">
  Blazingly-Fast, Featherweight, Fearlessly Efficient and Gunslinging Web Framework for Node.js
</h1>

<p align="center">
  <img width="60%" height="60%" src="https://github.com/mackignacio/rango/blob/main/rango_logo.png">
</p>

*The name "**Rango**" comes from the animated adventure comedy film released in 2011. The story follows a chameleon named Rango, voiced by the legendary actor Johnny Depp. However, it's worth noting that "Rango" is originally a Spanish word that means "range" or "to range." It seems that the movie title "Rango" is also the same in Tagalog and has been kept as is, possibly due to its original Spanish origin.*

## Introduction

> **"Ace Up, Ride the Code, Bullet Fast Your APIs" - The Wild West of Node.js!**

Welcome to the untamed frontier of wild wild web development with RangoJS, the all-new, gunslinging Node.js library that will revolutionize the way you create APIs. Just like a skilled gunslinger, RangoJS delivers precision, speed, and unmatched performance, making your API development journey a thrilling adventure.

Say goodbye to clunky frameworks and embrace the lightning-fast power of RangoJS. Our lightweight and agile library ensures that your APIs hit the target with bullet-fast response times, leaving your users amazed by the lightning-quick performance.

In the spirit of a sure aim, RangoJS provides you with an intuitive and developer-friendly interface that lets you effortlessly handle routes, middleware, and endpoints. With the confidence of a sharpshooter, you can craft APIs that are robust, scalable, and built to handle any challenge that comes your way.

Speaking of ace-high API development, RangoJS equips you with the tools to secure your applications like a fortress. Our battle-tested security measures and error handling capabilities ensure that your APIs stand strong against any threats that might lurk in the shadows.

## Features

- **Blazingly-Fast Performance**

  Built on top of Node.js and Typescript, RangoJS harnesses the full potential of asynchronous I/O operations to deliver unmatched speed and responsiveness, even under heavy loads.

- **Featherweight Footprint**

  RangoJS streamlined design guarantees minimal resource consumption, allowing you to create lean and efficient APIs without compromising on functionality.

- **Gunslinger-Friendly**

  Embrace the gunslinger way of coding with RangoJS's intuitive syntax approach and well-documented features, making API development a breeze for developers of all backgrounds.

- **Fearlessly Efficient**

  We take pride in RangoJS's lightweight nature, ensuring minimal overhead and resource consumption, so your APIs can shoot to the top in terms of efficiency.

- **Trail-Wise Routing**

  Simplified route handling empowers developers to structure APIs effortlessly, making it a breeze to define endpoints, request types, and middleware functions.

- **Unyielding Reliability**

  Just like a seasoned gunslinger, RangoJS comes prepared. Built-in error handling and comprehensive testing tools guarantee your APIs stand tall with unwavering stability.

- **Showdown-Ready Extensibility**

  RangoJS embraces the spirit of adventure, providing a modular architecture that lets you customize and enhance functionalities with ease, whether you're drawing from third-party packages or crafting your own solutions.

- **Sharpshooting Community Support**

  At RangoJS, we ride together. Expect continuous updates, active community support, and a lively environment where gunslingers exchange ideas and celebrate triumphs.

Prepare to reload your coding skills and unleash the gunslinging fury of RangoJS. Whether you're an experienced trailblazer or a greenhorn eager to learn, our library invites you to forge powerful APIs with unmatched speed, developer-friendliness, and reliability.

Join us in the fast-paced showdown of API development as we ride into the future with RangoJS. Embrace the gunslinging spirit, and together, we'll paint the wild west of web development with unmatched success and innovation.

## Howdy, Let Start

Welcome to the RangoJS Getting Started Guide, where we'll help you wrangle your way through the wild world of RangoJS and become a true cowboy coder! Saddle up your code and get ready to ride like a seasoned trailblazer!

In this guide, we'll show you how to set up your RangoJS application, lasso those routes, and round up your data like a pro wrangler. So grab your hat, tighten them boots, and let's hit the trail with RangoJS! 🤠🚀

### Prerequisites

Listen up, code cowboy! Before you saddle up and ride the RangoJS trail, make sure you've got the essentials roped and ready on your local machine:

1. Your trusty steed, **Node.js**. You can download it from the official website [here](https://nodejs.org).

2. A sturdy sidekick **NPM** (Node Package Manager) comes bundled with Node.js. However, it's essential to have the latest version. To update npm, run the following command in your terminal:

    ```sh
    npm install -g npm
    ```

Once you've got these mighty tools, you're all set to wrangle RangoJS and conquer the digital frontier like a true code cowboy! Giddy-up and let's hit the trail!

### Setting up a New RangoJS Project

Let's begin by setting up a new RangoJS project. Ride along with these instructions:

1. Create a new project directory:

    ```sh
    mkdir my-rangojs-app
    cd my-rangojs-app
    ```

2. Initialize a new Node.js project:

    ```sh
    npm init -y
    ```

3. Install RangoJS:

    ```sh
    npm install rango
    ```

4. Install Typescript:

    ```sh
    npm install typescript ts-node -D
    ```

5. Install Nodemon:

    ```sh
    npm install nodemon -D
    ```

### Creating a Basic RangoJS Server

Well, howdy, cowboy coder! Now that we've got RangoJS lassoed and ready, it's high time to build ourselves a sturdy corral for our code. So, saddle up and crack open that trusty text editor or IDE of yours - the one that feels like an old friend.

With your cowboy hat on tight, let's wrangle some code and create a basic server that'll stand tall like a strong, dependable stallion. Get ready to ride the RangoJS wave and blaze the trail in this digital frontier! Just follow the steps below, cowboy!

1. Create a new file named **app.ts** in the project root directory.

2. In **app.ts**, add the following code:

    ```ts
    // Import RangoJS and http module
    import rango from "rango";
    import http from "http";

    // Create an instance of the RangoJS app
    const app = rango();

    // Define a route for the home page
    app.add({
      path: "",
      GET: () => {
        return "Hello, RangoJS!";
      }
    });

    // Start the server
    const port = 3000;
    http.createServer(app).listen(port, () => {
      console.log(`Server listening on port ${port}.`);
    });
    ```

> [See the full code here.](https://github.com/mackignacio/rango/blob/main/example/basic/getting-started/README.md)

### Starting the RangoJS Server

To kickstart that trusty server, just mosey on over to your terminal and wrangle up this command:

```sh
nodemon app.ts
```

Now that our trusty server's up and running, it's time to hitch our wagon to the trail and see what RangoJS has rustled up for us! Head on over to your web browser, and pay a visit to this link:

> [http://localhost:3000](http://localhost:3000)

There, right before your very eyes, you'll find the message **"Hello, RangoJS!"** all shiny and gleaming like the stars in the night sky. Ain't that something? RangoJS sure knows how to make an impression!

## Yeehaw! Code Cowboy

You've successfully set up a RangoJS project, created a basic server, and sent a response to a user request. Now you can dive deeper into RangoJS and explore its powerful features to build robust and sophisticated web applications.

### **Happy gunslinging and coding, Code Cowboy! 🌵🤠🚀**

Saddle up and let your code roam free like a wild mustang, breaking new ground and blazing trails in this digital frontier. Ride with the wind in your hair and the thrill in your heart as you wrangle them bugs and rope up them features. Keep your eyes on the horizon, 'cause the sky's the limit when you're a code cowboy! So kick back, relax, and enjoy the ride with RangoJS as your trusty sidekick.

### Understanding the Code

Let's break down the code in your **app.ts**.

We imported the RangoJS module using `import rango from 'rango'`.

We created an instance of the RangoJS application with `const app = rango()`.

We defined a route for the home page using

```ts
app.add({
  path: "",
  GET: () => {
    return "Hello, RangoJS!";
  },
})
```

When a user accesses the root URL (i.e., /), the provided callback function is executed, and the response **"Hello, RangoJS!"** is sent back. RangoJS automatically detects the returned data from the callback and assign the correct `content-type` in the header.

We started the server on `port 3000` using

```ts
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

The server is now running and ready to handle incoming requests.

To test each method, you can use tools like `curl`, `Postman`, or using a frontend application built from `React` or `Angular` that sends requests to your server using various methods.

Well, now that you've got your spurs on, it's time to ride into unexplored territories and uncover the boundless capabilities that RangoJS has in store for you. Keep your eyes peeled as you mosey on ahead to discover all the remarkable things RangoJS can do for ya.

## Configuring Multiple Routes

Now that we have the RangoJS project structure in place, let's configure multiple routes. In this example, we will create three routes: home, about, and contact.

In **app.ts**, update the `app.add` function and replace it with the following code:

```ts
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
  }
])
```

> [See the full code here.](https://github.com/mackignacio/rango/blob/main/example/basic/multiple-routes/README.md)

By updating the `app.add` to handle an array of `routeObject`, you can now efficiently process multiple routes in one function call. This modification enhances the function's versatility, allowing it to adapt to different routing scenarios.

## Define a Single Route with Multiple HTTP Methods

Now, let's create a single route that supports multiple HTTP methods (**GET**, **POST**, **PUT**, **DELETE**, and **DELETE**). We'll handle each method differently based on the action we want to perform using a `callback` function. We call these callback function route `endpoints`.

In **app.ts**, update the `app.add` function and add the following code:

```ts
app.add([

    // Existing routes ....

  {
    path: "users",
    GET: () => {
      // Logic to handle GET request for '/users'
      return "This is a GET request!";
    },
    POST: () => {
      // Logic to handle POST request for '/users'
      return "This is a POST request!";
    },
    PUT: () => {
      // Logic to handle PUT request for '/users'
      return "This is a PUT request!";
    },
    PATCH: () => {
      // Logic to handle PATCH request for '/users'
      return "This is a PATCH request!";
    },
    DELETE: () => {
      // Logic to handle DELETE request for '/users'
      return "This is a DELETE request!";
    },
  }
])
```

> [See the full code here.](https://github.com/mackignacio/rango/blob/main/example/basic/single-route/README.md)

In this example, we use a common name for each `HTTP Methods` (**GET**, **POST**, **PUT**, **PATCH**, and **DELETE**) as function to handle all the supported HTTP methods. This makes your application more flexible and efficient, as it can perform different actions based on the HTTP method used and managing it in one place.

## Why this Approach in Routing

In Express.js, there are two ways to define routes to handle HTTP requests: using individual route methods (**app.get**, **app.post**, etc.) or using a single route method (**app.all**) to handle multiple HTTP methods. Let's compare the two approaches and discuss their use cases:

### Individual Route Methods (app.get, app.post, etc.)

With individual route methods, you define separate route handlers for each specific HTTP method:

```ts
// Using individual route methods
app.get('/users', (req, res) => {
  // Logic to handle GET request for '/users'
  res.send('GET request for /users');
});

app.post('/users', (req, res) => {
  // Logic to handle POST request for '/users'
  res.send('POST request for /users');
});

app.put('/users', (req, res) => {
  // Logic to handle PUT request for '/users'
  res.send('PUT request for /users');
});

app.patch('/users', (req, res) => {
  // Logic to handle PATCH request for '/users'
  res.send('PATCH request for /users');
});

app.delete('/users', (req, res) => {
  // Logic to handle DELETE request for '/users'
  res.send('DELETE request for /users');
});
```

### Single Route Method (app.all)

With the single route method approach, you use **app.all** to define a route that handles all HTTP methods:

```ts
// Using a single route method
const handleUsersRequest = (req, res) => {
  switch (req.method) {
    case 'GET':
      // Logic to handle GET request for '/users'
      res.send('GET request for /users');
      break;
    case 'POST':
      // Logic to handle POST request for '/users'
      res.send('POST request for /users');
      break;
    case 'PUT':
      // Logic to handle PUT request for '/users'
      res.send('PUT request for /users');
      break;
    case 'PATCH':
      // Logic to handle PATCH request for '/users'
      res.send('PATCH request for /users');
      break;
    case 'DELETE':
      // Logic to handle DELETE request for '/users'
      res.send('DELETE request for /users');
      break;
    default:
      res.status(405).send('Method not allowed!');
  }
};

app.all('/users', handleUsersRequest);
```

### Which Approach to Choose?

The choice between individual route methods and the single route method approach depends on the complexity and organization of your application.

Use **Individual Route Methods** when you have different actions and significant logic for each HTTP method and want the code to be more explicit.

Use the **Single Route Method** when you have shared logic between multiple HTTP methods and want a more concise and DRY codebase.

By combining the Individual Route Methods approach and the Single Route Method approach in one. RangoJS can provide a balanced and flexible approach to handling HTTP requests. By using both approaches strategically, you can take advantage of their respective strengths and address their limitations.

### Pros of Combining both Approaches in RangoJS

- **Explicitness**: Each HTTP method has its dedicated route handler, making the code easier to read and understand.

- **Granular Control**: You can handle different HTTP methods differently, which is useful when the actions vary significantly for each method.

- **No Code Duplication**: If you have shared logic between different methods, you don't need to duplicate the code across multiple route handlers, leading to  DRY (Don't Repeat Yourself) code.

- **Decreased Number of Route Handlers**: For complex applications with many routes and methods, the number of individual route handlers can grow significantly, making the codebase larger and harder to manage. Managing each route handler in a single `routeObject` makes it easier.

- **Code Reusability**: With this approach, you can centralize the shared logic for multiple HTTP methods within a single route object.

- **Conciseness**: The codebase can be more concise with fewer route handlers, especially when handling similar actions for different HTTP methods.

Overall, combining the Individual Route Methods approach and the Single Route Method approach allows you to create a well-structured and maintainable application. By choosing the appropriate approach for each route based on the complexity and similarity of actions, you can achieve a codebase that is both expressive and efficient.

> **Code Cowboy Advice**
>
> Listen up, buckaroo! In this wild frontier of code, remember that keepin' your code maintainable and easy on the eyes is as important as water in the desert. Strive to strike that perfect harmony between makin' your code crystal clear and wranglin' it to be reusable, all while keepin' in mind the unique needs and demands of your blazinfly-fast application. So saddle up, partner, and ride steady on that fine line 'cause in this coding rodeo, balancin' is the name of the game!

## Configuring Child Routes

In RangoJS, child routes refer to routes that are nested or mounted within another route. This allows you to organize your routes in a hierarchical manner, making your codebase more modular and maintainable. In this section, we'll explore how to create and use child routes in an RangoJS application.

Now, let's create child routes within an existing route. To do this, we'll use the **children** key to define the child routes in our parent `routeObject`.

In **app.ts**, update the `app.add` function and add the following code:

```ts
app.add([

    // Existing routes ....

  {
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
      }
    ]
  }
])
```

> [See the full code here.](https://github.com/mackignacio/rango/blob/main/example/basic/child-routes/README.md)

You see, in Express.js, when we want to create child routes, we gotta use the `express.Router()` method to wrangle them together. Once we've got them rounded up, we then mount those child routes to a parent route using the `app.use()` method. It's like making a fancy corral for each route, just to keep them all organized and separated.

But RangoJS, now that's a different breed altogether! With RangoJS, we ain't building corral after corral. Nope! RangoJS brings all the routes right into one place, like bringing the whole herd together. That means we manage both the parent route and the child routes, all in a single file. Ain't that something?

This approach in RangoJS makes the codebase incredibly easy to wrangle and scale. No more riding all over the codebase trying to find the right file for each route. Nope, we got them all right there in one place, making it easier to maintain.

## Middlewares

In RangoJS, middleware plays a vital role in managing and processing incoming HTTP requests before they reach the route handlers. Middleware functions are executed in the order they are defined, allowing you to perform various tasks such as authentication, logging, data parsing, error handling, and more.

### What is Middleware?

A middleware, in the context of RangoJS, are functions that have access to the `requestObject` and `responseObjects` inside the `Context` object and the `next()` function. They can modify the request and response objects, terminate the request-response cycle, or pass control to the next middleware in the stack.

### Using Middleware

To use middleware in RangoJS, you can employ the `app.use()` method or specify middleware functions directly in your route definitions. The order of middleware registration matters, as they are executed sequentially. This is similar to what Express.js implements on their API.

> [See the full list of middleware here.](https://github.com/mackignacio/rango/blob/main/example/middlewares/README.md)

### Global Middleware

Global middleware is applied to all routes and is registered using app.use() without a specific route path. This type of middleware is typically used for tasks that need to be executed on every request, such as parsing `request bodies`, `setting headers`, or `logging`.

```ts
// Import RangoJS
import rango from "rango";

// Import middlewares
import bodyParser from "body-parser";
import logger from "./logger";

// Create an instance of the RangoJS app
const app = rango();

// Global middleware example
app.use(bodyParser.json()); // Create application/json parser
app.use(bodyParser.urlencoded({ extended: false })); // Create application/x-www-form-urlencoded parser
app.use(logger); // Custom logging middleware

app.add({
  path: "users",
  GET: (context) => {
    // Get the users body using context.body
    return { body: context.body };
  },
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

> [See the full code here.](https://github.com/mackignacio/rango/blob/main/example/middlewares/global-middlewares/README.md)

### Route-Specific Middleware

Route-specific middleware is applied only to specific routes or route groups. You can't add them using `app.use()` with a specific route path or directly within your route definition. You need to define them using the `middlewares` key inside your route definition.

```ts
// Import RangoJS and http module
import rango, { Context, NextFunction } from "rango";
import http from "http";

// Create an instance of the RangoJS app
const app = rango();

// Route-Specific middleware function
const authMiddleware = (context: Context, next: NextFunction) => {
  const { req, res } = context;
  // Check authentication logic
  if (req.isAuthenticated()) {
    next(); // Proceed to the next middleware or route handler
  } else {
    // Stop the request-cycle and send back a response
    res.status(401).send("Unauthorized");
  }
};

app.add([
  {
    path: "users",
    middlewares: [
      // Inline middleware function callback
      (context: Context, next: NextFunction) => {
        const { req, res } = context;

        // Check user 'isAdmin'
        if (req.user.isAdmin()) {
          res.status(401).send("Unauthorized");
        } else {
          next(); // Proceed to the next middleware or route handler
        }
      },
      // route specific middleware function callback
      authMiddleware,
    ],
  },
]);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

> [See the full code here.](https://github.com/mackignacio/rango/blob/main/example/middlewares/route-specific-middlewares/README.md)

### Error Handling Middleware

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

> [See the full code here.](https://github.com/mackignacio/rango/blob/main/example/middlewares/error-handling-middlewares/README.md)

Middlewares in RangoJS is a powerful tool that enables you to handle common tasks, enhance the behavior of your routes, and ensure smooth request processing. By understanding and utilizing middleware effectively, you can create robust and well-structured web applications.

### Legacy Middlewares

In RangoJS, we can use Express.js middlewares as legacy middlewares. These are the same good old middlewares you're used to in Express.js - they help us manage requests, enhance routes, and more. With RangoJS, you can easily hook 'em into your application, creating a smooth and seamless migration experience.

### How to Use Legacy Middlewares

Here's how we can wrangle them Express.js middlewares into RangoJS:

1. First, install any Express.js middleware using NPM: For this example we install `cors`

    ```sh
    npm install cors
    ```

2. Import the middleware you installed and mount it on RangoJS

    ```ts
    // Import RangoJS and http module
    import rango from "rango";
    import http from "http";

    // Import the Express.js `cors` middleware
    import cors from "cors";

    // Create an instance of the RangoJS app
    const app = rango();

    // Mounting Express.js `cors` middleware
    app.use(cors());

    app.add([
      // Your route configurations will be added here
    ]);

    // Start the server
    const port = 3000;
    http.createServer(app).listen(port, () => {
      console.log(`Server listening on port ${port}.`);
    });
    ```

> [See the full code here.](https://github.com/mackignacio/rango/blob/main/example/middlewares/legacy-middlewares/README.md)

And that's it, cowboy coder! You've successfully integrated Express.js middlewares as legacy middlewares in your RangoJS application. With RangoJS and Express.js middlewares, you've got yourself a powerful combo that'll keep your application riding smooth and your codebase well-organized.

## Path Params

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
  path: "users",
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

> [See the full code here.](https://github.com/mackignacio/rango/blob/main/example/basic/path-params/README.md)

In the example above, we've defined a route **`/users/:id`** with a Path Param named `id`. When a request is made to this route with a specific ID, we can access that ID inside the route object using `context.params.id`.

### Multiple Path Params

You can use multiple Path Params in a single route by defining them in the URL path.

```ts
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
      }
    }
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
              }
            }
          ]
        }
      ],
    }
  ],
});
```

> [See the full code here.](https://github.com/mackignacio/rango/blob/main/example/basic/multiple-path-params/README.md)

In this example, we've defined two Path Params: `id` and `postId`. They will be accessible inside the route callback using `context.params.id` and `context.params.postId`, respectively.

With this powerful feature of Path Params, you can create dynamic and flexible routes to handle various scenarios in your web applications.

## Query Params

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
    const name = context.query.name || "stranger";
    return `Howdy, Cowboy coder ${name}!`;
  },
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

> [See the full code here.](https://github.com/mackignacio/rango/blob/main/example/basic/query-params/README.md)

In the example above, we've defined a route `/user`, and you can pass a Query Param named name to personalize the greeting. If no name is provided, it defaults to `'stranger'`.

### Multiple Query Params

You can use multiple Query Params in a single route by adding them to the URL query string.

```ts
// Add route with multiple query params
app.add({
  path: "search",
  GET: (context) => {
    const searchTerm = context.query.q || 'No search term';
    const sortBy = context.query.sort || 'date';
    return `Searching for "${searchTerm}" sorted by "${sortBy}"`;
  },
});
```

> [See the full code here.](https://github.com/mackignacio/rango/blob/main/example/basic/multiple-query-params/README.md)

In this example, we've used two Query Params: `q` for the search term and sort to specify the sorting order. With this nifty feature, you can pass data to your server in a flexible and convenient way.

## Conclusion

Our Blazingly-Fast Featherweight Gunslinging Fearless Web Framework for Node.js, aptly named RangoJS, brings the cowboy spirit of coding to the forefront while delivering top-notch performance and versatility. With RangoJS, you can blaze through the digital wilderness with ease, harnessing the power of modern web development without the weight of complexity.

As a fearless gunslinger, RangoJS is designed to empower developers to ride the trail of web development with confidence. Its featherweight nature ensures lightning-fast response times, while its intuitive API allows for easy integration of Express.js middlewares, making it a seamless transition for those familiar with Express.js.

So saddle up, partner, and embrace the cowboy spirit as you code fearlessly with RangoJS. Let this gunslinging framework be your trusted companion on your journey through the vast digital frontier of web development. Happy coding, and may your web applications be as fearless as the gunslingers of old! 🌵🤠🚀

## Contributing

Join the pioneers of web development and set out on a wild west adventure with RangoJS. Get ready to experience bullet-fast performance, sure aim precision, and ace-high results like never before. It's time to strap on your coding holster and let RangoJS lead you to API greatness. Are you up for the challenge? Let's ride into the sunset of web development together with RangoJS!
