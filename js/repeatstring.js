//repeat a string num times. Return an empty string
//if the number is negative.
function repeatStringNumTimes(str, num) {
  var finalStr = [];
  if (num > 0) {
    for (var i=0; i<num; i++) {
    finalStr += str;
  } return finalStr;
  }
  else return '';
}

repeatStringNumTimes("abc", 3);
