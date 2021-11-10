Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = "Arya Stark";
     name.charAt(2); //"y"
     let sentance = "A quick brown fox jumped over a lazy dog";
     sentance(4); // "i"
     let houseName = "Starks";
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Return: A new string representing the calling string converted to uppercase.
   - Example:
   const message = "Did this message arrive on time?"
   console.log(message.toUpperCase())
     <!-- Expected output: "DID THIS MESSAGE ARRIVE ON TIME?" -->

3. `toLowerCase`

   - Return: A new string representing the calling string converted to lowercase.
   - Example:
   const message = "Did this message arrive on time?"
   console.log(message.toUpperCase())
     <!-- Expected output: "did this message arrive on time?" -->

4. `trim`

   - Return: A new string representing str stripped of whitespace from both its beginning and end.
   - Example:
   const message = " This is a message. "
   console.log(message.trim())
     <!-- Expected output: "This is a message." -->

5. `trimEnd`

   - Return: A new string representing str stripped of whitespace from end.
   - Example:
   const message = " This is a message. "
   console.log(message.trimEnd())
     <!-- Expected output: "  This is a message." -->

6. `trimStart`

   - Return: A new string representing str stripped of whitespace from its beginning.
   - Example:
   const message = " This is a message. "
   console.log(message.trimStart())
     <!-- Expected output: "This is a message.     " -->

7. `concat`

   - Parameter: One or more string to concatenate to str.
   - Return: A new string containing the combined text of the strings provided.
   - Example:
     const firstName = "Gurinder"

   console.log(firstName.concat("Khabra"))
     <!-- Expected output: "GurinderKhabra" -->

8. `endsWith`

   - Parameter: The characters to be searched for at the end of str
   - Return: true if the given characters are found at the end of the string: otherwise, false.
   - Example:
     const str1 = "Cats rule."
     const str2 = "This is a test"
     const str3 = "Did this work?"

   console.log(str1.endsWith("rule", 9))
   console.log(str1.endsWith("t")
   console.log(str1.endsWith("w")) // false

9. `includes`

   - Parameter: A string to be search for within str
   - Return: true if the search string is found anywhere within the given string; otherwise, false if not.
   - Example:
     const str1 = "What's Superman's real name?"

   console.log(str1.includes("real"))

10. `indexOf`

- Parameter: The string value to search for
- Return: The index of the first occurrence of (searchValue)-1 if not found.
- Example:
  const str1 = "What's Superman's real name?"

console.log(str1.indexOf(5)) // "s"

11. `lastIndexOf`

- Parameter: The string representing the value to search for.
- Return: The index of the last occurence of -1 if not found.
- Example:
  const str1 = "The lazy something dog in the fox"
  const str2 = "dog"

console.log(`This string ${str2} is located on the ${str1.lastIndexOf(str2).}`)

12. `padEnd`

- Parameter: The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will returned as-is.
- Return: A string of the specific targetLength with padString applied at the end of the current str.
- Example:
  const str1 = "Coco beans"

console.log(str1.padEnd(22, "."))
// Expected Output: "Coco beans............"

13. `padStart`

- Parameter: The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will returned as-is.
- Return: A string of the specific targetLength with padString applied at the start of the current str.
- Example:
  const str1 = "Coco beans"

console.log(str1.padStart(22, "."))
// Expected Output: "............Coco beans"

14. `repeat`

- Parameter: An integer between 0 and +Infinity, indicating the number of times to repeat the string.
- Return: A new string containing the specific number of copies of the given string.
- Example:
  const str1 = "Coco beans. "

console.log(str1.repeat(4))
// Expected Output: "Coco beans. Coco beans. Coco beans. Coco beans."

15. `replace`

- Return: A new string, with some or all matches of the pattern replaced by a replacement.
- Example:
  const str1 = "Coco beans. "

console.log(str1.replace("beans", "strawberry"))
// Expected Output: "Coco strawberry."

16. `slice`

- Return: A new string containing the extracted section of the string.
- Example:
  const str1 = "Coco beans. "

console.log(str1.slice(2, 6))
// Expected Output: "co bea"

17. `split`

- Return: An array of strings, split at each point where the separator occurs in the given string.
- Example:
  const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

18. `substring`

- Return: A new string containing the specified part of the given string.
- Example:
  const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"
