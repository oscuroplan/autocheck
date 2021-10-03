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
