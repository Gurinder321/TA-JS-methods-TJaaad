// After knowing about string methods, practice those by solving problems given below.

let from = "Syrio Forel";
let quote = "There is only one thing we say to death: Not today";
let to = "Arya Stark";

/*
1. Find the index of the first 'is' in the variable quote. And store it in a new variable named indexOfIs
*/
let indexOfIs = quote.indexOf("is");
console.log(indexOfIs);
/*
2. Find the character at the index indexOfIs (Problem 1) in quote.
*/
// let indexOfIs = quote.indexOf("is");
console.log(indexOfIs);

/*
3. Log the message saying `The index of first is in quote is 7`
*/
console.log(`The index of first is in quote is ${indexOfIs}`);
/*
4. Log the message for first 6 characters of quote like this.
  The character at index 0 is 'T'
  The character at index 1 is 'h'
  The character at index 2 is 'e'
  The character at index 3 is 'r'
  The character at index 4 is 'e'
  The character at index 5 is ' '
*/
console.log(`The character at index ${quote.indexOf("T")} is 'T'`);
console.log(`The character at index ${quote.indexOf("h")} is 'h'`);
console.log(`The character at index ${quote.indexOf("e")} is 'e'`);
console.log(`The character at index ${quote.indexOf("r")} is 'r'`);
console.log(`The character at index ${quote.indexOf("e")} is 'e'`);
console.log(`The character at index ${quote.indexOf(" ")} is ' '`);

/*
5. Using the variable from , to and quote variable display this message
  "Syrio Forel said There is only one thing we say to death: Not today to Arya Stark." (use concat method)
*/

// let from = "Syrio Forel";
// let quote = "There is only one thing we say to death: Not today";
// let to = "Arya Stark";

array1 = from.concat(quote);

console.log(`${from} said ${quote.toLowerCase()} to ${to}`);

/*
6. Does from, to and quote ends with "rk". Check all three.
*/

/*
7. Does quote includes the word "Only"
*/
console.log(quote.includes("Only"));
/*
8. Does quote includes the word " we"
*/
console.log(quote.includes("we"));

/*
9. Find the index of the the word `we` in quote
*/
console.log(quote.indexOf("we"));
/*
10. Split the quote into individual word and store it in a variable name quoteSplitted
*/
let quoteSplitted = quote.split(" ");
console.log(quoteSplitted);
/*
11. Change the word "today" in quoteSplitted to "tomorrow" and join all the words to form a sentence.
*/
quoteSplitted.splice(10, 1, "tomorrow");
console.log(quoteSplitted);

/*
12. Find the index of second "o" in quote. Use indexOf
*/

console.log(quote.indexOf("o", 2));

/*
13. Find the last index of letter "a" in quote.
*/

console.log(quote.lastIndexOf("a"));
/*
14. Find the second last index of letter "a" in quote.
*/
console.log(quote.lastIndexOf("a", 2));

/*
15. Make the quote 70 character long. If it has less characters add rest as .......
Example: "Hello" (convert to 10 characters) => "Hello....."
Store the output in a new variable
*/

let longerQuote = quote.padEnd(70, ".");
console.log(longerQuote);

/*
16. Do same as (15) but the ... should come in start. Store the output in a new variable
*/
let longerStartQuote = quote.padStart(70, ".");
console.log(longerStartQuote);

/*
17. Log the repeat of "Hello World!" 10 times.
*/
let helloWorld = "Hello, World!";
console.log(helloWorld.repeat(3));
/*
18. Replace today to tomorrow in quote.
*/
console.log(quote.replace("today", "tomorrow"));
/*
19. Replace Stark to Lannister in quoteTo
*/
console.log(to.replace("Stark", "Lannister"));

/*
20. Make the quote of length 30 and put ... at the end. (use slice)
*/
console.log(quote.slice(0, 30));

/*
21. Find out does quote, from, to starts with "A"
*/
console.log(quote.startsWith("A"));

/*
let fruits = ["Banana", "Orange", "Apple", "Mango"];

// Add a new element ('Papaya') into fruits array at end
fruits.push("Papaya");
// Remove the last element from fruits array
fruits.pop();

// Log the current length of fruits array
// console.log(fruits.length);
// Remove the first element from fruits and log the value of fruits (use delete arr[0])
fruits.splice(0, 1);
// Log the element on index 0 and 1
// console.log(fruits[0], fruits[1]);

// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
fruits.shift();
// console.log(fruits);

// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift("Guava");
// console.log(fruits);
// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift("Dragon Fruits");
// console.log(fruits);

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not

// Update the value of index 1 to `Pears`
console.log(fruits);

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)

fruits.splice(1, 0, "Kiwi", "Lemon");
// Remove (slice) all the element from index 5
console.log(fruits.slice(6));
// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits = ["Berries", "Melons"];
console.log(moreFruits);

// Concat moreFruits into fruits array (re-assign so the value gets updated)

fruits.concat(moreFruits);

// Log the name of all fruit in console
console.log(fruits.concat(moreFruits));

// Convert each fruit name to lowercase and log it
let extraFruits = fruits.concat(moreFruits);
console.log(extraFruits.join(", ").toLowerCase());

// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let lowercaseFruits = extraFruits.join(", ").toLowerCase();
// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let uppercaseFruits = extraFruits.join(", ").toUpperCase();

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
console.log(numbers.flat());

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
console.log(numbersTwo.flat(2));

// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
let flatArray = numbersTwo.flat(Infinity);

// Use forEach to log all the elements of numberThree array
console.log(numbersThree.forEach((element) => console.log(element)));

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
let doubleNumbers = flatArray.map((x) => x * 2);
console.log(doubleNumbers);
// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
let tripleNumbers = flatArray.map((x) => x * 3);
console.log(tripleNumbers);

// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
let halfNumbers = flatArray.map((x) => x / 2);
console.log(halfNumbers);

// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
let oddNumbers = flatArray.filter(function (x) {
  return x % 2 !== 0;
});
console.log(oddNumbers);

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
let evenNumbers = flatArray.filter(function (x) {
  return x % 2 === 0;
});
console.log(evenNumbers);

// Find the index of 10 in numbersThree array
console.log(flatArray[10]);
// Reverse the values of numbersThree array
console.log(numbersThree.reverse());
// Reverse the values of numbersTwo array
console.log(numbersTwo.reverse());

// Join all fruits with '-', convert to uppercase and log it
console.log(extraFruits.join("-").toUpperCase());
// Join all fruits with '&', convert to lowercase and log it
console.log(extraFruits.join("&").toLowerCase());
*/
