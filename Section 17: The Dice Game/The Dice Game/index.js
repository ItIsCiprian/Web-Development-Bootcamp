
// Generate a random number between 1 and 6 for the first dice.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Construct the image file name for the first dice.
var randomDiceImage = "dice" + randomNumber1 + ".png";

// Construct the full path to the image file for the first dice.
var randomImageSource = "images/" + randomDiceImage;

// Select the first image element in the HTML.
var image1 = document.querySelectorAll("img")[0];

// Set the 'src' attribute of the first image to display the random dice image.
image1.setAttribute("src", randomImageSource);

// Generate a random number between 1 and 6 for the second dice.
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Construct the full path to the image file for the second dice.
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Select the second image element in the HTML and set its 'src' attribute.
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// Compare the random numbers to determine the winner and update the heading.
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
