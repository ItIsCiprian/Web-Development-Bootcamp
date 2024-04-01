// Generate a random number between 1 and 6 for the first dice roll
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Construct the file name for the first dice based on the random number
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // e.g., dice1.png

// Create the file path for the first dice's image
var randomImageSource1 = "images/" + randomDiceImage1; // e.g., images/dice1.png

// Select the first dice image element on the page
var firstDiceImage = document.querySelector("img.img1");

// Update the source attribute of the first dice image to show the correct dice roll
firstDiceImage.setAttribute("src", randomImageSource1);

// Repeat the process for the second dice roll
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // e.g., images/dice2.png
var secondDiceImage = document.querySelector("img.img2");
secondDiceImage.setAttribute("src", randomImageSource2);

// Determine the game outcome based on the two random numbers
if (randomNumber1 > randomNumber2) {
  // If the first dice roll is higher, player 1 wins
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  // If the second dice roll is higher, player 2 wins
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
  // If both dice rolls are the same, it's a draw
  document.querySelector("h1").textContent = "Draw!";
}
