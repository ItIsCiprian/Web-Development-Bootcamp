// Select all elements with the class 'drum' and count them
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop through each drum button to attach a click event listener
for (let i = 0; i < numberOfDrumButtons; i++) {
  // Select the current drum button in the loop
  let drumButton = document.querySelectorAll(".drum")[i];

  // Add a click event listener to the current drum button
  drumButton.addEventListener("click", function () {
    // Alert the user when the drum button is clicked
    alert("I got clicked!");
  });
}
