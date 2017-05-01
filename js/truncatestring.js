//Sets a character limit for a string.
function truncateString(str, num) {
  var shorterStr=str.slice(0, [num-3]);
  var shortestPossibleStr=str.slice(0, [num]);
  if (num <=3) {return shortestPossibleStr + '...';}
  else if (num < str.length-3) {
      return shorterStr + '...';
}
  else {return str;}

}

truncateString("Absolutely longer", 2);
