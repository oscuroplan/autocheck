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
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for (let i = min; i <= max; i += 1) {
numbers.push(i);
}
  // Change code above this line
  return numbers;
}


                                                                                    // задача 23/32
function filterArray(numbers, value) {
   // Change code below this line
let newArray = [];
  for (let number of numbers) {
    if (number > value) {
    newArray.push(number)
    }
  }
  return newArray;
  // Change code above this line
}


                                                                                    // задача 24/32
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

                                                                                    // задача 25/32
// Функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, 
// состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
function getCommonElements(array1, array2) {
  // Change code below this line
const newArray = [];
  for (let number of array1) {
    if (array2.includes(number)){
  newArray.push(number)
    }
  }

return newArray;
 // Change code above this line
}


                                                                                    // задача 26/32
// рефакторинг кода 
// for (let i = 0; i < order.length; i += 1) {
//     total += order[i];}
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (let item of order){
total += item;}
  // Change code above this line
  return total;
}

                                                                                    // задача 27/32
// Рефакторинг
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let number of numbers){
    if (number > value) {
     filteredNumbers.push(number);
   }
  }
  
 // for (let i = 0; i < numbers.length; i += 1) {
 //   const number = numbers[i];

//    if (number > value) {
  //    filteredNumbers.push(number);
   // }
 // }

  return filteredNumbers;
  // Change code above this line
}


                                                                                    // задача 28/32
// Change code below this line
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;


                                                                                    // задача 29/32
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. 
// Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).
function getEvenNumbers(start, end) {
   // Change code below this line
let evenNumbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
 return evenNumbers;}

                                                                                    // задача 30/32
// Дополни код так, чтобы в переменную number записывалось первое число от start до end,
// которое делится на 5 без остатка.

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}


                                                                                    // задача 31/32
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

function findNumber(start, end, divisor) {
  // Change code below this line
 // let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      //number = i;
      //break;
      return i;
    }
  }

 // return number;
  
  // Change code above this line
}

                                                                                    // задача 32/32
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) -
// проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
function includes(array, value) {
  // Change code below this line
for (let number of array){
  if (number === value) {
    return true;}
  
}
  return false;
  // Change code above this line
}
