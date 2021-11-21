let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(words) {
  return words.reduce((a, b) => (a.length < b.length ? b : a), "");
}

console.log(findLongestWord(words));

// - Convert the above array "words" into an array of length of word instead of word.
console.log(words.map((word) => word.length));
// - Create a new array that only contains word with atleast one vowel.
let vowelsOnly = words.filter((word) => /^aeiou/i.test(word));
console.log(vowelsOnly);

// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));
// - Create a new array that consonants words not starting with vowel.
// let vowels = ["a", "e", "i", "o", "u"];
// let consonantsOnly = vowels.some(function (vowel) {
//   return words.startsWith(vowel);
// });

// - Create a new array that consonants words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(accumulator, currentValue) {
  return accumulator + currentValue;
}
let sum = numbers.reduce(sumArray, 0);
console.log(sum);

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
function tripled(num) {
  return num * 2;
}
let tripleNumbers = numbers.map(tripled);
console.log(tripleNumbers);

// - Create a new array that contains only even numbers
function isEven(num) {
  return num % 2 == 0;
}
let evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

// - Create  a new array that contains only odd numbers.
function isOdd(num) {
  return num % 2 !== 0;
}
let oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);

// - Create a new array that should have true for even number and false for odd numbers.

function evenOrOdd(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(evenOrOdd(numbers));

// - Sort the above number in assending order.
numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);
// - Does sort mutate the original array?
// yes
// - Find the sum of the numbers in the array.
function sumArray(accumulator, currentValue) {
  return accumulator + currentValue;
}
let sumNumbers = numbers.reduce(sumArray, 0);
console.log(sumNumbers);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let avgNumbers = sumNumbers / numbers.length;
console.log(avgNumbers);

function averageNumbers() {
  return sumNumbers / numbers.length;
}
console.log(averageNumbers());

let strings = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let stringLength = strings.map((string) => string.length);

console.log(stringLength);
console.log(numbers);

function sumArrayString(accumulator, currentValue) {
  return accumulator + currentValue;
}
let sumNumbersString = stringLength.reduce(sumArrayString, 0);
console.log(sumNumbersString);

let avgNumbers1 = sumNumbersString / stringLength.length;
console.log(avgNumbers1);
