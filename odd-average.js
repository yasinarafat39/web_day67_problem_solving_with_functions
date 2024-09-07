/**
 * function takes an array as parameter
 * give me the average of the
 */

function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      //   console.log(number);
      odds.push(number);
    }
  }

  //   odds is the array that contains only the odd numbers

  let sum = 0;
  for (const num of odds) {
    sum += num;
  }

  const avg = sum / odds.length;
  return `Avg mark is: ${avg}`;
}

const nums = [15, 32, 65, 98, 48, 14, 20, 55, 61, 77];
const avg = oddAverage(nums);
console.log(avg);
