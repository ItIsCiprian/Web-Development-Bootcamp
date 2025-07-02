function lifeInWeeks(age) {
  // Define constants for maximum age and conversion factors.
  const maxAge = 90;
  const daysPerYear = 365;
  const weeksPerYear = 52;
  const monthsPerYear = 12;

  // Calculate the time left in days, weeks, and months based on the given age.
  var daysLeft = (maxAge - age) * daysPerYear;
  var weeksLeft = (maxAge - age) * weeksPerYear;
  var monthsLeft = (maxAge - age) * monthsPerYear;

  // Construct and log the message with the calculated time left.
  console.log(
    "You have " +
      daysLeft +
      " days, " +
      weeksLeft +
      " weeks, and " +
      monthsLeft +
      " months left."
  );
}

// Example usage of the function, calling it with an age of 56.
lifeInWeeks(56);
