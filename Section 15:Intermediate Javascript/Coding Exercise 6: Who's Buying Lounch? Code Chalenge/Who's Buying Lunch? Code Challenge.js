function whosBuyingLunch(names) {
  // Select a random index from the array
  var randomIndex = Math.floor(Math.random() * names.length);
  // Get the name at the random index
  var randomName = names[randomIndex];
  // Return the message
  return randomName + " is going to buy lunch today!";
}

// Example usage of the function
console.log(whosBuyingLunch(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));
