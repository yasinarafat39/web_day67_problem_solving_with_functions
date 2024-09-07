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
  for (item of array) {
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
  for (item of strArray) {
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

function countHowMuchVowelsHave2 (str){
    const vowels = 'aeiouAEIOU'
    let numbersOfVowels = 0;
    for(char of str){
        if(vowels.includes(char)){
            numbersOfVowels++;
        }
    }
    return numbersOfVowels;
}

const howMuchVowels2 = countHowMuchVowelsHave2(str);
console.log(howMuchVowels2);