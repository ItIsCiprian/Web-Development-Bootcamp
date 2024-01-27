function fibonacciGenerator(n) {
  var sequence = [];

  for (var i = 0; i < n; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }

  return sequence;
}

// Example usage:
var output = fibonacciGenerator(3); // This will return [0,1,1]
console.log(output);
