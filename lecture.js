let fruit = ["banana", "apple", "kiwi", "orange"];


// process.stdout.write("First item in the array is " + fruit[0] + '.\n\n')

// for (let i = fruit.length-1; i >= 0; i--) {
//   process.stdout.write(fruit[i] + '\n')
// }

fruit.unshift("grapefruit");
fruit.push("watermelon");
let fruitInOrder =  fruit.sort().reverse();

process.stdout.write(fruitInOrder + '\n');


