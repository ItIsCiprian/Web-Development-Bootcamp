var output = []; // Initialize an empty array to hold the FizzBuzz output
var count = 1; // Start counting from 1

function fizzBuzz() {
  // Check if 'count' is divisible by both 3 and 5 (i.e., 15, 30, etc.)
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz"); // Add "FizzBuzz" to the array
  }
  // Check if 'count' is divisible by 3
  else if (count % 3 === 0) {
    output.push("Fizz"); // Add "Fizz" to the array
  }
  // Check if 'count' is divisible by 5
  else if (count % 5 === 0) {
    output.push("Buzz"); // Add "Buzz" to the array
  }
  // If 'count' is not divisible by 3 or 5
  else {
    output.push(count); // Add the number itself to the array
  }
  count++; // Increment 'count' for the next function call
}

// Populate the output array with FizzBuzz sequence up to 100
for (var i = 0; i < 100; i++) {
  fizzBuzz();
}

console.log(output); // Print the entire FizzBuzz sequence
