function fibonacciGenerator(n) {
  // Initialize an empty array to store the Fibonacci sequence.
  var sequence = [];

  // Loop 'n' times to generate the sequence.
  for (var i = 0; i < n; i++) {
    // If it's the first number in the sequence, add 0.
    if (i === 0) {
      sequence.push(0);
    } 
    // If it's the second number in the sequence, add 1.
    else if (i === 1) {
      sequence.push(1);
    } 
    // For subsequent numbers, add the sum of the previous two numbers.
    else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }

  // Return the generated Fibonacci sequence.
  return sequence;
}

// Example usage: Generate the first 3 Fibonacci numbers.
var output = fibonacciGenerator(3); // This will return [0,1,1]
// Log the generated sequence to the console.
console.log(output);
