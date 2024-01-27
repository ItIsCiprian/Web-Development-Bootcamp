function isLeapYear(year) {
  // If a year is evenly divisible by 4
  if (year % 4 === 0) {
    // If the year is also divisible by 100, it must also be divisible by 400 to be a leap year
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    // Otherwise, it is a leap year
    return true;
  }
  // If not divisible by 4, it's not a leap year
  return false;
}

// Example usage of the function
console.log(isLeapYear(2024)); // Should log true, as 2024 is a leap year
console.log(isLeapYear(2100)); // Should log false, as 2100 is not a leap year
