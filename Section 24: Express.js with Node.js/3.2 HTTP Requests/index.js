// Import the express module.
import express from "express";
// Create an instance of the express application.
const app = express();
// Define the port number for the server to listen on.
const port = 3000;

// Define a route for the root URL ('/').
// When a GET request is made to the root, send an H1 tag with "Hello".
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

// Define a route for the '/about' URL.
// When a GET request is made to '/about', send an H1 tag with "About Me" and a paragraph with the name.
app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Ciprian</p>");
});

// Define a route for the '/contact' URL.
// When a GET request is made to '/contact', send an H1 tag with "Contact Me" and a paragraph with the phone number.
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +40731419490</p>");
});

// Start the server and listen for incoming requests on the specified port.
app.listen(port, () => {
  // Log a message to the console indicating that the server is running and on which port.
  console.log(`Server started on port ${port}`);
});
