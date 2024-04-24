// Select all elements with the class 'drum' and count them
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop through each drum button to attach a click event listener
for (let i = 0; i < numberOfDrumButtons; i++) {
  // Select the current drum button in the loop
Document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    console.log(this.style.color = "white");

  // Add a click event listener to the current drum button
 var.audio = new Audio("sounds/" + this.id + ".wav");
 audio.play()
 
});

}
