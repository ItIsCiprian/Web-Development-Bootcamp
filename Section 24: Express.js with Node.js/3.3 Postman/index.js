// Import the express module.
import express from "express";
// Create an instance of the express application.
const app = express();
// Define the port number for the server to listen on.
const port = 3000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

// GET request to the root URL.
// Sends an H1 tag with "Home Page".
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

// POST request to the '/register' URL.
// Sends a 201 Created status.
app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

// PUT request to the '/user/ionutcipriananescu' URL.
// Sends a 200 OK status.
app.put("/user/ionutcipriananescu", (req, res) => {
  res.sendStatus(200);
});

// PATCH request to the '/user/ionutcipriananescu' URL.
// Sends a 200 OK status.
app.patch("/user/ionutcipriananescu", (req, res) => {
  res.sendStatus(200);
});

// DELETE request to the '/user/ionutcipriananescu' URL.
// Sends a 200 OK status.
app.delete("/user/ionutcipriananescu", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

// Start the server and listen for incoming requests on the specified port.
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
