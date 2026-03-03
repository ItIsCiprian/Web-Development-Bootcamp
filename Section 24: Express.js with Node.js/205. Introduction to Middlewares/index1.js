// Import necessary modules: express for creating the server, bodyParser for parsing request bodies, and path utilities for handling file paths.
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Get the current directory name using import.meta.url.
const __dirname = dirname(fileURLToPath(import.meta.url));

// Create an instance of the express application.
const app = express();
// Define the port number for the server to listen on.
const port = 3000;

// Use bodyParser middleware to parse URL-encoded bodies (e.g., from HTML forms).
app.use(express.urlencoded({ extended: true }));

// Define a GET route for the root URL ('/').
// When a GET request is made, send the 'index.html' file from the 'public' directory.
app.get("/", (req, res) => {
res.sendFile(__dirname + "/public/index.html");
});

// Define a POST route for the '/submit' URL.
// When a POST request is made, log the request body to the console.
app.post("/submit", (req, res) => {
  console.log(req.body);
});

// Start the server and listen for incoming requests on the specified port.
app.listen(port, () => {
  // Log a message to the console indicating that the server is listening.
  console.log(`Listening on port ${port}`);
});
