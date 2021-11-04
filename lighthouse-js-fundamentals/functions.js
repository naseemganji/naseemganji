// This functin is used to concatenate two arrays into one
function concat(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }

  return newArr;
}

//This Function is used to merge two values into one and order it
function merge(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }

  return newArr.sort();
}
// This function is used to count vowels in a given string
function numberOfVowels(str) {
  let vowelsCount = 0;

  //turn the input into a string
  let string = str.toString();

  //loop through the input value/string
  for (let i = 0; i <= string.length - 1; i++) {

  //if any vowel exists add that to vowel count
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1; 
    
    }
  }
  return vowelsCount;
}
