function bmiCalculator(weight, height) {
    // Calculate BMI using the formula: weight (kg) / (height (m) * height (m))
    const bmi = weight / (height * height);
    
    // Round the BMI to the nearest whole number
    const roundedBMI = Math.round(bmi);
