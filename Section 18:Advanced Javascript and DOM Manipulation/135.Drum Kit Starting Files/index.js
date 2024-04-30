// Refactored JavaScript Code for Drum Kit Interaction

// Cache the drum buttons to avoid querying the DOM repeatedly
const drumButtons = document.querySelectorAll(".drum");

// Attach click event listeners to each drum button
drumButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Play sound based on the button's inner HTML
    makeSound(this.innerHTML);
  });
});

// Listen for keypress events to trigger sounds
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

// Function to play sound based on key
function makeSound(key) {
  const soundMap = {
    w: "sounds/tom-1.mp3",
    a: "sounds/tom-2.mp3",
    s: "sounds/tom-3.mp3",
    d: "sounds/tom-4.mp3",
    j: "sounds/snare.mp3",
    k: "sounds/crash.mp3",
    l: "sounds/kick-bass.mp3",
  };

  // Check if the key is mapped to a sound
  if (soundMap[key]) {
    const sound = new Audio(soundMap[key]);
    sound.play();
  } else {
    console.log("Pressed key is not mapped to a drum sound.");
  }
}
