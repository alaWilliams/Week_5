// Create a program that keeps asking the user to input numbers. These numbers are stored in an array. Keep asking till zero is entered. After that the numbers are printed out in a reverse order. Don’t use array methods for this but only simple loops.

process.stdout.write('This program reads numbers from the keyboard.\nAfter receiving a zero, it prints the numbers in reverse order. Please, start entering numbers.\nThe program will stop when you enter zero.\n')

let numbersArray = new Array();

process.stdout.write(numbersArray.length + ' Enter a number: ')
process.stdin.on('data', function(input) {
  let number = Number(input);
  if (isNaN(number)) {
    process.stdout.write('Please, enter a number.');
  } else if(number === 0) {
      numbersArray.push(number);
      process.stdout.write('Reversed order:\t')
      for (let i = numbersArray.length-1; i >= 0; i--) {
        process.stdout.write( numbersArray[i] + ' ');
      }
      process.exit()
    } else {
        numbersArray.push(number);
        process.stdout.write(numbersArray.length + ' Enter a number: ');
    }
})