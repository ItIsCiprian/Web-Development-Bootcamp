// Import necessary modules: express for creating the server, and morgan for logging HTTP requests.
import express from "express";
import morgan from "morgan";

// Create an instance of the express application.
const app = express();
// Define the port number for the server to listen on.
const port = 3000;

// Use the morgan middleware with the 'combined' format for logging HTTP requests.
app.use(morgan("combined"));

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
