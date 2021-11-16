// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
let strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/
let numbersClone = [...numbers];

// - Find the index of `101` in numbers

console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.indexOf(9));

// - Convert value of strings array into a sentence like "This is a collection of words"
let thisIsAString = strings.toString();
console.log(thisIsAString.replaceAll(",", " "));
// - Add two new words in the strings array "called" and "sentence"
strings.push("called", "sentence");
console.log(strings);
// - Again convert the updated array (strings) into a sentence like "This is a collection of words called sentence"
let thisIsAString1 = strings.toString();
console.log(thisIsAString1.replaceAll(",", " "));
// - Remove the first word in the array (strings)

strings.shift();
console.log(strings);

// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.includes("is"));

// - Find all the words that contain 'is' use string method 'indexOf'
let findIs = [];
let element = "is";

let idx = strings.indexOf(element);
while (idx != -1) {
  findIs.push(idx);
  idx = strings.indexOf(element, idx + 1);
}
console.log(findIs);

// - Check if all the numbers in numbers array are divisible by three use array method (every)

let isDivisibleBy3 = (numbers) => numbers % 3 === 0;
console.log(numbers.every(isDivisibleBy3));

// -  Sort Array from smallest to largest

function compareNumbers(a, b) {
  return a - b;
}

console.log(numbers.sort(compareNumbers));
// - Remove the last word in strings
numbers.pop();
console.log(numbers);

// - Find largest number in numbers

// let max = numbers.reduce(function (a, b) {
//   return Math.max(a, b);
// }, 0);
// console.log(max);

console.log(Math.max(...numbersClone));

// - Find longest string in strings

let longestString = strings.reduce(function (a, b) {
  return a.length > b.length ? a : b;
});
console.log(longestString);

// - Find all the even numbers

let evenNumbers = numbers.filter((numbers) => numbers % 2 == 0);
console.log(evenNumbers);

// - Find all the odd numbers
let oddNumbers = numbers.filter((numbers) => numbers % 2 != 0);
console.log(oddNumbers);

// - Place a new word at the start of the array use (unshift)
strings.unshift("Hello");
console.log(strings);
// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3, 4, 5, 6));
console.log(numbers);
// - Make a subset of strings array ['a','collection']
console.log(strings.slice(2, 3));

// - Replace 12 & 18 with 1221 and 1881
numbers.splice(1, 1, 1221);
console.log(numbers);
numbers.splice(10, 1, 1881);
console.log(numbers);

// - Replace words in strings array with the length of the word
console.log(strings.length);
// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'
// customers.firstname.startsWith("J");

// - Create new array with only first name
let firstName = customers.firstname;
console.log(firstName);
// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
