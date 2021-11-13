Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - No it does not mutate the original array
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.

2. `join`

   - Parameter: Specifies a string to seperate each pair by.
   - Return: A string with all array elents joined.
   - Example:
     ```js
     let letters = ["Wind", "Water", "Earth"];
     letters.join(",-"); // 'Wind,-Water,-Earth'
     letters.join(""); // 'WindWaterEarth'
     letters.join(", "); // 'Wind, Water, Earth'
     ```
   - It basically replaces the commas with the string of your choice
   - No it does not mutate the original array

3. `flat`

   - Parameter: The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
   - Return: A new array with sub-array elements concatenated into it
   - Example:
     ```js
     let array1 = [1, 2, 3, [4, 5, [6, 7, [9]]]];
     array1.flat(); // [1, 2, 3, 4, 5, [6, 7, [9]]]
     array1.flat(2); // [1, 2, 3, 4, 5, 6, 7, [9]]
     array1.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 9]
     ```
   - How many levels of array do you want to remove
   - No it does not mutate the original array

4. `push`

   - Parameter: The elements to add to the end of the array
   - Return: The new length property of the object upon which the method was called
   - Example:
     ```js
     let animals = ["pigs", "pugs", "horse"];
     animals.push("cow"); // ["pigs", "pugs", "horse", "cows"];
     animals.flat("dogs"); // ["pigs", "pugs", "horse", "cows", "dogs"];
     animals.flat("rabbit", "chickens"); // ["pigs", "pugs", "horse", "cows", "dogs", 'rabbit', 'chickens'];
     ```
   - Adding a word to the end of the array
   - Yes, it does mutate the original array

5. `indexOf`

   - Parameter: Element to locate in the array.
   - Return: The first index fo the element in the array; -1 if not found.
   - Example:
     ```js
     let animals1 = [["pigs", "pugs", "horse", "cows", "dogs", "cows", 'chickens'];
     animals1.indexOf("pugs"); // 1
     animals1.indexOf("cows", 2); // 5
     animals1.indexOf("apples"); // -1
     ```
   - Tells you the index of where the element is
   - No it does not mutate the original array

6. `lastIndexOf`

   - Parameter: Element to locate in the array.
   - Return: The last index fo the element in the array; -1 if not found.
   - Example:
     ```js
     let animals2 = [["pigs", "pugs", "horse", "cows", "dogs", "cows", 'chickens'];
     animals2.lastIndexOf("pugs"); // 1
     animals2.lastIndexOf("cows"); // 5
     animals2.lastIndexOf("apples"); // -1
     ```
   - Tells you the index of where the element is
   - No it does not mutate the original array

7. `includes`

   - Parameter: Element to locate in the array.
   - Return: The last index fo the element in the array; -1 if not found.
   - Example:
     ```js
     let animals3 = [["pigs", "pugs", "horse", "cows", "dogs", "cows", 'chickens'];
     animals3.includes("pugs"); // true
     animals3.includes("horse", "cows", "dogs"); // true
     animals3.includes("apples"); // false
     ```
   - Whether there is the element you specified in the array.
   - No it does not mutate the original array

8. `reverse`

   - Return: The reversed array
   - Example:

     ```js
     let animals4 = ["pigs", "pugs", "horse"];
     animals4.reverse(); // ["pigs", "pugs", "horse"];
     ```

   - It reverses the order of the array
   - Yes, it does mutate the original array

9. `every`

   - Parameter: Element to locate in the array.
   - Return: The last index fo the element in the array; -1 if not found.
   - Example:
     ```js
     let numbers = [190, 110, 543, 345, 874];
     function isOver100(n) {
       return n > 100;
     }
     numbers.every(isOver100); // true
     ```
   - Is check if every element is **\_** in the array
   - No it does not mutate the original array

10. `shift`

- Return: The removed element from the array; undefined if the array is empty
- Example:
  ```js
  let animals3 = ["pigs", "pugs", "horse", "cows", "dogs", "cows", "chickens"];
  animals3.shift(); // "pigs"
  console.log(animals3); // ["pugs", "horse", "cows", "dogs", "cows", 'chickens'];
  ```
- Removes the first element in the array
- Yes, it does mutate the original array

11. `splice`

- Parameter: splice(start, deleteCount, item1, item2, item3, ...)
  index: the index at which to start changing the array
  deleteCount: An integer indicating the number of elements in the array to remove from the start.
  item1, item2, ...: The elements to add to the array, beginning from start.
- Return: An array containing the deleted elements.
- Example:
  ```js
  let animals3 = ["pigs", "pugs", "horse", "cows", "dogs", "chickens"];
  animals3.splice(1, 0, "test"); // ["pigs", "test", "pugs", "horse", "cows", "dogs", "chickens"];
  animals3.splice(4, 1, "pumpkins"); // ["pigs", "test", "pugs", "horse", "pumpkin", "dogs", "chickens"];
  ```
- adds, replaces certain words from the array
- Yes, it does mutate the original array

12. `find`

- Parameter: find(callbackFn, thisArg) -
  callbackFn: Function to execute on each value in the array, taking 3 arguements:
  element: The current element in the array.
  index: The index of the current element in the array.
  array: The array that find was called on
  thisArg: Object to use as this inside callbackFn.
- Return: The valye of the first element int he array that satidfied the provided testing function. Otherwise, undefinded is returned.
- Example:

  ```js
  const array1 = [32, 54, 6, 76, 878];
  const found = array1.find((element) => element > 10);

  console.log(found); // 32
  ```

- Finds the result of your condition
- No it does not mutate the original array

13. `unshift`

- Parameter: The element to add to the fron of the arr
- Return: The new length property of the object upon which the method was called.
- Example:
  ```js
  let numbers = [1, 2, 3, 4];
  numbers.unshift(4, 5); //
  console.log(numbers); //  [1, 2, 3, 4, 4, 5];
  ```
- Adds elements to the end of the array
- Yes, it does mutate the original array

14. `findIndex`

- Parameter: find(callbackFn, thisArg) -
  callbackFn: Function to execute on each value in the array, taking 3 arguements:
  element: The current element in the array.
  index: The index of the current element in the array.
  array: The array that find was called on
  thisArg: Object to use as this inside callbackFn.
- Return: The valye of the first element int he array that satidfied the provided testing function. Otherwise, undefinded is returned.
- Example:

  ```js
  const array1 = [32, 54, 6, 76, 878];
  const found = array1.findIndex((element) => element > 600);

  console.log(found); // 4
  ```

- Find the index of the element that's true
- No it does not mutate the original array

15. `filter`

- Parameter: find(callbackFn, thisArg) -
  callbackFn: Finction is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.
  It accepts 3 arguements:
  element: The current element in the array.
  index: The index of the current element in the array.
  array: The array that filter was called on
  thisArg: Value to use as this when exceting callbackFn.
- Return: A new array with the elements that pass the test. If no elements pass the test, an empty array will returned.
- Example:

  ```js
  let animals3 = ["pigs", "pugs", "horse", "cows", "dogs", "cowsmans", "chickens"];
  let result = animals3.filter((words) => word.length > 6);
  console.log(result); // ["chickens", "cowsmans"]
  ```

- Helps filter the array.
- No it does not mutate the original array

17. `forEach`

- Parameter: forEach(callbackFn, thisArg) -
  callbackFn: functionds to execute on each element. It accepts between one and three arguments
  It accepts 3 arguements:
  element: The current element in the array.
  index: The index of the current element in the array.
  array: The array that filter was called on
  thisArg: Value to use as this when exceting callbackFn.
- Return: undefined
- Example:

  ```js
  let array1 = ["a", "b", "c"];
  array1.forEach((element) => console.log(element));

  Output: "a";
  ("b");
  ("c");
  ```

- executes a provided function for each array element.
- No it does not mutate the original array

18. `map`

- Parameter: map(callbackFn, thisArg) -
  callbackFn: Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.
  It accepts 3 arguements:
  element: The current element in the array.
  index: The index of the current element in the array.
  array: The array that filter was called on
  thisArg: Value to use as this when exceting callbackFn.
- Return: A new array with each element being the result of the callback function.
- Example:

  ```js
  let array1 = [1, 2, 3, 4, 50];
  let map1 = array1.map((x) => x * 2);
  console.log(map1); // [2, 4, 6, 100]
  ```

- Creates a new array with the new conditions setout
- No it does not mutate the original array

19. `pop`

- Return: The removed element from the array; undefined if the array is empty
- Example:

  ```js
  let animals3 = ["pigs", "pugs", "horse", "cows", "dogs", "cows", "chickens"];
  console.log(animals3.pop()); // "chickens"
  ```

- Removes the last element from the array.
- Yes, it does mutate the original array

20. `reduce`

- Parameter: reduce((previousValue, currentValue, currentIndex, array) => {...})
- Return: the value that results from running the reducer callback function to completion over the entire array.
- Example:
  ```js
  let array1 = [1, 2, 3, 4];
  ```

console.log(array1.reduce(reducer)) // 10
console.log(array1.reduce(reducer, 5)) // 15

````
- It adds all the values and reduces them to one function
- No it does not mutate the original array

21. `slice`

- Parameter: It removes the values before the index indicated. Not the index indicated, just before
- Return: A new array containing the extracted elements.
- Example:
```js
let animals3 = ["pigs", "pugs", "horse", "cows", "dogs", "cows", "chickens"];
animals3.slice(2); // ["horse", "cows", "dogs", "cows", "chickens"]
animals3.slice(4); // ["dogs", "cows", "chickens"]
animals3.slice(2, -1); // ["horse", "cows", "dogs", "cows"]
````

- Slices the sides of the element
- No it does not mutate the original array

22. `some`

- Parameter: a function to test for each element, takes three arguments (element, index, array).
- Return: trye if the callback function returns a truthy value for at least one element in the array. Otherwise false.
- Example:
  ```js
  let array = [1, 2, 3, 4, 5, 6, 7];
  let oddNumbers = (element) => % 2 !== 0;
  console.log(array.some(oddNumbers))
  ```
- Returns certain values back
- No it does not mutate the original array
