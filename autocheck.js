// задача 16/32

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
let newArray = firstArray.concat(secondArray);

const message = newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray;

  return message;


    // Change code above this line
  }

// задача 17/32
