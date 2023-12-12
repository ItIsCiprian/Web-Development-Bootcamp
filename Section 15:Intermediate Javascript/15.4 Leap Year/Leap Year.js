/ Get input from the user
const year = parseInt(prompt("Enter a year:"));

// Check if it's a leap year or not
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year.");
} else {
  console.log("Not leap year.");
}
