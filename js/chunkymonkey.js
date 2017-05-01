
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var leftover = arr.length % size; //FINALLY A USE FOR MODULULUS ;
  var finalArr = [];

  for (var i = 0; i < arr.length; i += size) {
    newArr += arr.slice(i, size+i);
    newArr = newArr.split(',');
    finalArr.push(newArr);


  }
  for (var j = arr.length-leftover; j< arr.length; j++) {
//
  }

  //finalArr = finalArr.split(',');
  return finalArr;
}

chunkArrayInGroups(["a", "b", "c", "d"],2);


#unfinished.
