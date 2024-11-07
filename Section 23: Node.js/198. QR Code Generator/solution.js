import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input", // specify input type for clarity
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_svg = qr.image(url, { type: 'png' }); // specify image type explicitly
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) {
        console.error("Error saving URL to text file:", err);
        return;
      }
      console.log("The QR code image and URL file have been saved successfully!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt could not be rendered in this environment.");
    } else {
      console.error("An error occurred:", error);
    }
  });
