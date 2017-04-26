
function palindrome(word) {
  // Good luck!
  lower = word.toLowerCase();
  newWord = lower.replace(/_|\*|,|\./gi, ''); //g is global, i is ignore; these flags in conjunction allow to match

  arrayWord = newWord.split(''); //creates an array from the string;

  for (var i=0; i <= (arrayWord.length); i++) {
    return arrayWord[i] == arrayWord[arrayWord.length-1-i];
  }

  //return arrayOfStrings; //for testing purposes
}



palindrome("My age is 0, 0 si ega ym.");
