
function mutation(arr) {
  var firstWordStr = arr[0];
  firstWordStr = firstWordStr.toUpperCase();

  var secondWordStr = arr[1];
  secondWordStr = secondWordStr.toUpperCase();

  var found = "";

  for (var i = 0; i < secondWordStr.length; i++) {
    if (firstWordStr.indexOf(secondWordStr[i]) === -1) {found = "no"; break;}
    else {found = "yes";}
  }
  return found === "yes";
}
mutation(["hello", "neo"]);
