//TASK 1
function processArray(numbers) {
  return numbers.map(num => {
    if (num % 2 === 0) {
      return num * num;
    } else {
      return num * 3;
    }
  });
}

const inputNumbers = [1, 2, 3, 4, 5];
const resultNumbers = processArray(inputNumbers);
console.log(resultNumbers); 
