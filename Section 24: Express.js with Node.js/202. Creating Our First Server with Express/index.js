// Import the express module.
import express from "express";
// Create an instance of the express application.
const app = express();
// Define the port number for the server to listen on.
const port = 3000;

// Start the server and listen for incoming requests on the specified port.
app.listen(port, () => {
  // Log a message to the console indicating that the server is running and on which port.
  console.log(`Server running on port ${port}.`);
});
