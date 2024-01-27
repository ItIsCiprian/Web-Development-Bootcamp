function bmiCalculatorAdvanced(weight, height) {
  // Calculate BMI
  var bmi = weight / (height * height);

  // Determine the BMI category and return the corresponding message
  if (bmi < 18.5) {
    return "Your BMI is " + bmi.toFixed(1) + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Your BMI is " + bmi.toFixed(1) + ", so you have a normal weight.";
  } else {
    return "Your BMI is " + bmi.toFixed(1) + ", so you are overweight.";
  }
}

// Example usage of the function
var exampleBmiMessage = bmiCalculatorAdvanced(68, 1.75);
console.log(exampleBmiMessage);
