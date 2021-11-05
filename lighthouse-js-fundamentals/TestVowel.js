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
