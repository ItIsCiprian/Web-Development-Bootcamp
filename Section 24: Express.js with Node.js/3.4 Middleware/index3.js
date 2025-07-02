// Import the express module.
import express from "express";

// Create an instance of the express application.
const app = express();
// Define the port number for the server to listen on.
const port = 3000;

// Define a custom middleware function named 'logger'.
// This middleware logs the request method and URL to the console.
function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next(); // Call next() to pass control to the next middleware function or route handler.
}

// Use the custom 'logger' middleware for all incoming requests.
app.use(logger);

// Define a GET route for the root URL ('/').
// When a GET request is made, send "Hello" as the response.
app.get("/", (req, res) => {
  res.send("Hello");
});

// Start the server and listen for incoming requests on the specified port.
app.listen(port, () => {
  // Log a message to the console indicating that the server is listening.
  console.log(`Listening on port ${port}`);
});
