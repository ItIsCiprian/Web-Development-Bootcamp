// Get the total number of drum buttons.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop through each drum button.
for (var i = 0; i < numberOfDrumButtons; i++) {

  // Add a click event listener to each drum button.
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // Get the inner HTML (text content) of the clicked button.
    var buttonInnerHTML = this.innerHTML;

    // Play sound based on the button's inner HTML.
    makeSound(buttonInnerHTML);

    // Animate the button.
    buttonAnimation(buttonInnerHTML);

  });

}

// Add a keypress event listener to the entire document.
document.addEventListener("keypress", function(event) {

  // Play sound based on the pressed key.
  makeSound(event.key);

  // Animate the button corresponding to the pressed key.
  buttonAnimation(event.key);

});

// Function to play sound based on the key/button pressed.
function makeSound(key) {

  // Use a switch statement to determine which sound to play.
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    // Default case for any other key pressed (logs the key to console).
    default: console.log(key);

  }
}

// Function to add and remove animation class for buttons.
function buttonAnimation(currentKey) {

  // Select the active button based on the current key.
  var activeButton = document.querySelector("." + currentKey);

  // Add the 'pressed' class to trigger the animation.
  activeButton.classList.add("pressed");

  // Remove the 'pressed' class after a short delay to reset the animation.
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
