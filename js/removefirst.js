//Take howMany items from the front of an array.
function slasher(arr, howMany) {
  var finalArray = [];
  for (var i = howMany; i < arr.length ; i++) {
    finalArray.push(arr[i]);// += arr[i];
  }
    return finalArray;

}

slasher([1, 2, 3], 1);
