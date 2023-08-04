# Howdy, Let Start

Welcome to the RangoJS Getting Started Guide, where we'll help you wrangle your way through the wild world of RangoJS and become a true cowboy coder! Saddle up your code and get ready to ride like a seasoned trailblazer!

In this guide, we'll show you how to set up your RangoJS application, lasso those routes, and round up your data like a pro wrangler. So grab your hat, tighten them boots, and let's hit the trail with RangoJS! 🤠🚀

## Prerequisites

Listen up, code cowboy! Before you saddle up and ride the RangoJS trail, make sure you've got the essentials roped and ready on your local machine:

1. Your trusty steed, **Node.js**. You can download it from the official website [here](https://nodejs.org).

2. A sturdy sidekick **NPM** (Node Package Manager) comes bundled with Node.js. However, it's essential to have the latest version. To update npm, run the following command in your terminal:

    ```sh
    npm install -g npm
    ```

Once you've got these mighty tools, you're all set to wrangle RangoJS and conquer the digital frontier like a true code cowboy! Giddy-up and let's hit the trail!

## Setting up a New RangoJS Project

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

## Understanding the Code

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
