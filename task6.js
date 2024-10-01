// Task 6: Battleship
// Create a 5x5 Battleship game using a multidimensional array. Use asterisks to mark the ships. Ask the user
// for coordinates to shoot and give feedback to the user whether they hit a ship or not. Keep asking for as
// long as there are ships left. Keep count of how many shots the player needed.

let battleField = [
  ['*','*','*','',''],
  ['','','','',''],
  ['','','','*',''],
  ['','','','*',''],
  ['','','','*','']];


process.stdout.write('Lets play battleship. There are two ships on the sea. Try to hit them.\n');
process.stdout.write('Enter x and y coordinates separated by space: ');
process.stdin.on('data', function(inputFromUser) {
  let input = inputFromUser.toString()
  let counter = 0;
  console.table(battleField);
  // console.log(battleField[0])
  // console.log(input[0]);
  // console.log(battleField[input[0]][input[2]])

  if (battleField[input[0]][input[2]] === '') {
    console.log('missed')
  } if (battleField[input[0]][input[2]] === '*') {
    console.log('You hit a ship!');
    for ( let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (battleField[input[0]][input[2]] === '*') {
      battleField[input[0]][input[2]]= '';
      //   // console.log(i + ': ' + j + '')
      }
    }
    battleField[input[0]][input[2]] = '';
    // console.log(battleField[input[0]][input[2]])
  }  
   console.table(battleField)
  }

  process.exit();
})