function isLeapYear(year) {
  // A year is a leap year if it is divisible by 4.
  if (year % 4 === 0) {
    // However, if the year is divisible by 100, it must also be divisible by 400 to be a leap year.
    if (year % 100 === 0) {
      return year % 400 === 0; // Returns true if divisible by 400, false otherwise.
    }
    // If the year is divisible by 4 but not by 100, it is a leap year.
    return true;
  }
  // If the year is not divisible by 4, it is not a leap year.
  return false;
}

// Example usage of the function:
console.log(isLeapYear(2024)); // Expected output: true (2024 is a leap year)
console.log(isLeapYear(2100)); // Expected output: false (2100 is not a leap year, as it's divisible by 100 but not 400)
