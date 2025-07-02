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
// Initialize an empty string to store the generated band name.
var bandName = "";

// Use bodyParser middleware to parse URL-encoded bodies (e.g., from HTML forms).
app.use(bodyParser.urlencoded({ extended: true }));

// Define a custom middleware function named 'bandNameGenerator'.
// This middleware logs the request body and generates a band name.
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  // Concatenate the 'street' and 'pet' values from the request body to form the band name.
  bandName = req.body["street"] + req.body["pet"];
  next(); // Call next() to pass control to the next middleware function or route handler.
}

// Use the custom 'bandNameGenerator' middleware for all incoming requests.
app.use(bandNameGenerator);

// Define a GET route for the root URL ('/').
// When a GET request is made, send the 'index.html' file from the 'public' directory.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Define a POST route for the '/submit' URL.
// When a POST request is made, send an H1 tag with the generated band name.
app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

// Start the server and listen for incoming requests on the specified port.
app.listen(port, () => {
  // Log a message to the console indicating that the server is listening.
  console.log(`Listening on port ${port}`);
});