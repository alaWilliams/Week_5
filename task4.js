// Task 4: Linear Search
// Create a program that finds specific items in an array.
// 1. Create an array with the following items: 55, 23,
// 6456, 324, 21, 234, 72, 21
// 2. Ask the user what they want to search for in the
// integer array.
// 3. Loop through the array and compare the values with the input given by the user.
// 4. If the item is found, print out in which index the value was found.
// 5. If the item is not found, print out a message saying item was not found.

let array = [55, 23, 6456, 324, 21, 234, 72, 21]; 

process.stdout.write('The number you would like to search for: ');
process.stdin.on('data', function(input) {
  let number = Number(input);
  let found = false;
  array.forEach((element, index) => { 
    if (element === number) {
      process.stdout.write(number + ' was found at index ' + index + '.\n');
      found = true;
    }; 
    
    });
    if (!found) {
      process.stdout.write(number + ' was not found. ')
    }
  process.exit();
})