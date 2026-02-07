// This function swaps the values of two variables, a and b.
function test() {
  // Declare and initialize variable 'a' with the value "3".
  var a = "3";
  // Declare and initialize variable 'b' with the value "8".
  var b = "8";
  // Declare variable 'c' and assign it the value of 'a' to temporarily store it.
  var c = a;
  // Assign the value of 'b' to 'a'.
  a = b;
  // Assign the value of 'c' (which holds the original value of 'a') to 'b'.
  b = c;

  // Log the final value of 'a' to the console.
  console.log("a is " + a);
  // Log the final value of 'b' to the console.
  console.log("b is " + b);
}
