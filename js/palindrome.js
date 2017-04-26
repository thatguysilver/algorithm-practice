palindrome("My age is 0, 0 si ega ym.");

function palindrome(word) {
  // Good luck!
  a = true;
  lower = word.toLowerCase();
  newWord = lower.replace(/ |_|,|\.|-|\(|\)|:|\/|\//gi, ''); //g is global, i is ignore; these flags in conjunction allow to match

  arrayWord = newWord.split(''); //creates an array from the string;
  length = Math.floor((arrayWord.length)/2);
 // return length;
  for (var i=0; i <= (length); i++) {
    a = arrayWord[i] === arrayWord[arrayWord.length-1-i];
    if (a===false) {break;} else {continue;}

  }
  return a;
  //return arrayOfStrings; //for testing purposes
}
palindrome("eye");
