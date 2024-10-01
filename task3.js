// Create a program that asks user for number and the average for them. Numbers will be asked till the user enters a letter

let numbersArr = [];
process.stdout.write('This program calculates the average of the numbers you entered.\nThe program stops when you enter a letter.\n\n')

process.stdout.write('Enter a number: ')

process.stdin.on('data', function(input) {
  let number = Number(input);
  process.stdout.write('Enter a number: ')
  if (isNaN(number)) {
    process.stdout.write('You entered not a number.\n');
    let sum = numbersArr.reduce((acc, currValue) => acc + currValue, 0);
    let average = (sum / numbersArr.length).toFixed(2);
    process.stdout.write('The average: is ' + average)
    process.exit();
  } else {
    numbersArr.push(number);
  }
  } 
)