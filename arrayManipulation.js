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



//TASK 2
function formatArrayStrings(strings, numbers) {
  return strings.map((str, i) => {
    if (numbers[i] % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}

const inputStrings = ["school", "church", "farm", "mosque", "shop"];
const resultStrings = formatArrayStrings(inputStrings, resultNumbers);
console.log(resultStrings);


//TASK 3
function createUserProfiles(names, modifiedNames) {
  return names.map((name, i) => {
    return {
      originalName: name,
      modifiedName: modifiedNames[i],
      id: i + 1,
    };
  });
}

const inputNames = (inputStrings);
const resultNames = (resultStrings);
const resultProfiles = createUserProfiles(inputStrings, resultStrings);
console.log(resultProfiles);