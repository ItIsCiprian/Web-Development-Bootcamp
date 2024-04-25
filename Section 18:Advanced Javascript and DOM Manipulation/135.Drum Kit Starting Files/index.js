// Select all elements with the class 'drum' and count them
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop through each drum button to attach a click event listener
for (var i = 0; i < numberOfDrumButtons; i++) {
  // Select the current drum button in the loop
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // Get the inner HTML of the button that was clicked
    var buttonInnerHTML = this.innerHTML;

    // Use switch-case to handle different button presses
    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      default:
        console.log();
        // Optionally, handle other cases or do nothing
        break;
    }
  });
}
