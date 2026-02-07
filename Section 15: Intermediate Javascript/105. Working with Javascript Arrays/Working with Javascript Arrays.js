// Initialize an empty array to store the FizzBuzz sequence.
var output = [];
// Initialize a counter variable, starting from 1.
var count = 1;

// Define the fizzBuzz function.
function fizzBuzz() {
  // Check if the current count is divisible by both 3 and 5.
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz"); // If true, add "FizzBuzz" to the output array.
  }
  // Else, check if the current count is divisible by 3.
  else if (count % 3 === 0) {
    output.push("Fizz"); // If true, add "Fizz" to the output array.
  }
  // Else, check if the current count is divisible by 5.
  else if (count % 5 === 0) {
    output.push("Buzz"); // If true, add "Buzz" to the output array.
  }
  // If none of the above conditions are met.
  else {
    output.push(count); // Add the current count (number) to the output array.
  }
  count++; // Increment the counter for the next iteration.
}

// Loop 100 times to generate the FizzBuzz sequence.
for (var i = 0; i < 100; i++) {
  fizzBuzz(); // Call the fizzBuzz function in each iteration.
}

// Log the final FizzBuzz sequence to the console.
console.log(output);
