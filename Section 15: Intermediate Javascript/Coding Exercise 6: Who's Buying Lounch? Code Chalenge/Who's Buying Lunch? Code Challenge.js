function whosBuyingLunch(names) {
  // Generate a random index based on the length of the 'names' array.
  var randomIndex = Math.floor(Math.random() * names.length);
  // Retrieve the name at the randomly generated index from the 'names' array.
  var randomName = names[randomIndex];
  // Return a string indicating who is going to buy lunch today.
  return randomName + " is going to buy lunch today!";
}

// Example usage of the function with an array of names.
console.log(whosBuyingLunch(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));
