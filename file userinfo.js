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