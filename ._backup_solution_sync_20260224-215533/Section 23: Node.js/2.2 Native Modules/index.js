// Import the built-in 'fs' (file system) module.
const fs = require("fs");

// Write content to a file named 'message.txt'.
// If the file doesn't exist, it will be created. If it exists, its content will be overwritten.
fs.writeFile("message.txt", "Hello Node", (err) => {
  // Check for errors during file writing.
  if (err) throw err;
  // Log a success message to the console if the file is saved without errors.
  console.log("The file has been saved!");
});

// Read the content of the file named 'message.txt'.
// The 'utf8' encoding is specified to read the file as a string.
fs.readFile("message.txt", "utf8", (err, data) => {
  // Check for errors during file reading.
  if (err) throw err;
  // Log the content of the file to the console.
  console.log(data);
});
