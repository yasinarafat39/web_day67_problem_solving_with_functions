/**
 * array has some duplicate elements
 * []
 *
 */

const friends = [
  "abul",
  "babul",
  "kabul",
  "sabul",
  "mabul",
  "babul",
  "sabul",
  "babul",
  "arju",
  "joinal",
];

function noDuplicate(arr) {
  const uniqueArr = [];
  for (const item of arr) {
    if (uniqueArr.includes(item) === false) {
      uniqueArr.push(item);
    }
  }

  return uniqueArr;
}

const unique = noDuplicate(friends);
console.log(unique);
