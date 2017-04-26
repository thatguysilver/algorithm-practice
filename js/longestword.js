//Find the longest word in the string. Return ts length.

function findLongestWord(str) {
  var a = str.split(' ');              //Splits into array around spaces in sentence
  var biggestSoFar = a[0].length;      //IMPORTANT: DO THIS SHIT OUTSIDE OF FOR LOOPS
  for (i = 1; i < a.length; i++) {     //iterates from the second item of the list through the last
    if(biggestSoFar < a[i].length) {
      biggestSoFar = a[i].length;}     //changes the value of biggestSoFar to be bigger if the next item is bigger
  }
  return biggestSoFar;

}
findLongestWord("Google do a barrel roll");
