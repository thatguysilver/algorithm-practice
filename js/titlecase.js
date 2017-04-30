//The goal is to title-case any alphanumeric string.

function titleCase(str) {
  splitStr = str.split(' '); //we must make it an array, since strings are bitchy in js.
  var firstLetter = [];  //Initializes the empty arrays we'll be manipulating
  var otherLetters = [];
  var finalString =[];

  for (i=0; i < splitStr.length; i++) {       //iterates through every *word*
    firstLetter += splitStr[i][0];            //adds the first letter of each word to a blank array
    firstLetter = firstLetter.toUpperCase();  //uppercases the that letter

    otherLetters = splitStr[i];               //Unnecessary in retrospect, but I don't feel like changing it.
    otherLetters = otherLetters.toLowerCase();//Lowercases each word.
    otherLetters.split('');                   //Splits those into an array

    finalString += firstLetter[i];            //Adds the first letter to an empty array
    for (j=1; j < otherLetters.length; j++){  //Iterates through each letter of the array, minus the first
      finalString += otherLetters[j];         //Adds the subsequent letters to the rest of word (index i)
    }
    if (i<splitStr.length-1) {                //This is necessary so we don't have a blank space at the end of our string.
       finalString += ' ';
    }
  }
  return finalString;                         //praise Jesus. We're done.
}

titleCase("I'm a little tea pot");
