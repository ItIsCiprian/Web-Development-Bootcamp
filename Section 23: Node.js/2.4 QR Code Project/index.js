// Import necessary modules: inquirer for user prompts, qr-image for QR code generation, and fs for file system operations.
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// Use inquirer to prompt the user for a URL.
inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  // Once the user provides input, process the answers.
  .then((answers) => {
    // Extract the URL from the user's answers.
    const url = answers.URL;
    // Generate a QR code image from the URL.
    var qr_svg = qr.image(url);
    // Pipe the QR code image data to a file named 'qr_img.png'.
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    // Write the user-provided URL to a text file named 'URL.txt'.
    fs.writeFile("URL.txt", url, (err) => {
      // If an error occurs during file writing, throw it.
      if (err) throw err;
      // Log a success message to the console.
      console.log("The file has been saved!");
    });
  })
  // Catch any errors that occur during the prompting process.
  .catch((error) => {
    // Check if the error is related to the prompt not being rendered in the current environment.
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
