                                                                                       // задача 16/32

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
let newArray = firstArray.concat(secondArray);

const message = newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray;

  return message;

    // Change code above this line
  }



                                                                                    // задача 17/32

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Change this line
  console.log(i);
}

                                                                                    // задача 18/32

function calculateTotal(number) {
 // Change code below this line
  let total = 0;

for (let i = 0; i <= number; i += 1) { // Change this line
  total += i;
}

return total
  // Change code above this line
}

                                                                                    // задача 19/32

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i +=1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

                                                                                    // задача 20/32
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (let i = 0; i < order.length; i += 1) {
  total += order[i];
}
  // Change code above this line
  return total;
}

                                                                                    // задача 21/32
function findLongestWord(string) {
  // Change code below this line
let stringSplit= string.split(" ");
 let longestWord= " "; 
 for (let word of stringSplit){
   if (word.length > longestWord.length) {
   longestWord = word;
   }
 }
return longestWord;
  // Change code above this line
}

                                                                                    // задача 22/32
