function getIndexToIns(arr, num) {
  var newArr = arr.sort(function(a, b) { return a - b; });
  a = [];
  for (var i in newArr) {
       if (newArr[i] >= num) { return parseInt(i); }

  }  return arr.length;

}  
