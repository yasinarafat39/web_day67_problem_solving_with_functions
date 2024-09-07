/**
 * TASK - 1
 * Write a function to convert temperature from Celsius to Fahrenheit.
 *
 */

function celToFer(celsius) {
  const fer = (celsius * 9) / 5 + 32;
  return Math.floor(fer);
}

// console.log(celToFer(30)); // 86

/**
 * TASK - 2
 * You are given an array of numbers. Count how many times the a number is repeated in the array.
 *
 * sample-input: numbers = [5,6,11,12,98, 5]
 * find: 5
 * output: 2
 *
 * sample-input: numbers = [5,6,11,12,98, 5]
 * find: 25
 * output: 0
 */

const numbers = [5, 6, 11, 12, 98, 5];

function counterHowManyHave(array, find) {
  let counter = 0;
  for (let item of array) {
    // console.log(item);
    if (item === find) {
      counter++;
    }
  }
  return counter;
}

const howMuch = counterHowManyHave(numbers, 512);
// console.log(howMuch); // 0

/**
 * TASK - 3
 * Write a function to count the number of vowels in a string.
 *
 */

const str = "Write a function to count the number of vowels in a string.";

function countHowMuchVowelsHave(str) {
  let numbersOfVowels = 0;
  const strArray = str.split("");
  for (let item of strArray) {
    // console.log(item);
    if (
      item.toLowerCase() === "a" ||
      item.toLowerCase() === "e" ||
      item.toLowerCase() === "i" ||
      item.toLowerCase() === "o" ||
      item.toLowerCase() === "u"
    ) {
      numbersOfVowels++;
    }
  }

  return numbersOfVowels;
}

const howMuchVowels = countHowMuchVowelsHave(str);
console.log(howMuchVowels);

// Way-2

function countHowMuchVowelsHave2(str) {
  const vowels = "aeiouAEIOU";
  let numbersOfVowels = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      numbersOfVowels++;
    }
  }
  return numbersOfVowels;
}

const howMuchVowels2 = countHowMuchVowelsHave2(str);
console.log(howMuchVowels2);

/**
 * TASK - 4
 * Write a function to find the longest word in a given string.
 *
 * sample-input: I am learning Programming to become a programmer
 * sample-output: Programming
 *
 */

// step - 1: split(' ') the string into an array of strings
// step - 2: initiate a variable that will hold the lenght of the longest word
// step - 3: create the for loop
// step - 4: return the logest word

const task4 = "The quick brown fox jumped over the lazy dog";
const task4_1 = "I am learning Programming to become a programmer";

function findLongestWord(str) {
  const splitedStr = str.split(" ");
  // console.log(splitedStr);
  let longestWord = "";
  
  for (let item of splitedStr) {
    // console.log(item);
    if(longestWord. length < item.length){
      longestWord = item;
    }
  }

  return longestWord;
}

console.log(findLongestWord(task4)); // jumped
console.log(findLongestWord(task4_1)); // Programming




/**
 * TASK - 5
 * Generate a random number between 10 to 20. 
*/


function generateRandom(min, max){
  const random = Math.floor(Math.random()*(max - min + 1)) + min; 
  return random;
}

console.log(generateRandom(10, 20))
// console.log(generateRandom(50, 55))