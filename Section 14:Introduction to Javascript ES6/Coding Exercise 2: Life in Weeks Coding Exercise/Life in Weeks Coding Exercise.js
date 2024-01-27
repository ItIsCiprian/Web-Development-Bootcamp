function lifeInWeeks(age) {
  const maxAge = 90;
  const daysPerYear = 365;
  const weeksPerYear = 52;
  const monthsPerYear = 12;

  // Calculate the time left in days, weeks, and months
  var daysLeft = (maxAge - age) * daysPerYear;
  var weeksLeft = (maxAge - age) * weeksPerYear;
  var monthsLeft = (maxAge - age) * monthsPerYear;

  // Create the message with the calculated time left
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

// Example usage of the function
lifeInWeeks(56);
