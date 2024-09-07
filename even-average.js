function evenAverage(numbers) {
  const evens = [];

  for (num of nums) {
    // console.log(num);
    if (num % 2 === 0) {
      //   console.log(num);
      evens.push(num);
    }
  }
  console.log(evens);

  let sumOfAllEven = 0;
  for (num of evens) {
    sumOfAllEven += num;
  }

  const avgOfEven = sumOfAllEven / evens.length;
  console.log(`avg mark is: ${avgOfEven}`);
}

const nums = [15, 32, 65, 98, 48, 14, 20, 55, 61, 77];
const avg = evenAverage(nums);
console.log(avg);
