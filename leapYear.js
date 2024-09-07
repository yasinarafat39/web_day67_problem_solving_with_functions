/**
 * SIMPLE Logic
 * year will be a leap yeal if the year is divisible by 4
 */

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isLeapYear(2024));

/**
 * 1. those year that is not divisible by 100, if the year is divisible by 4: then it will be a leap year
 * 2. if the year is divisible by 400, then it is a leap year
 * 3. else it is not a leap year 
 */

function isLeapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}


console.log(isLeapYear2(2024));
console.log(isLeapYear2(20));
console.log(isLeapYear2(2026));
console.log(isLeapYear2(2027));
console.log(isLeapYear2(2028));