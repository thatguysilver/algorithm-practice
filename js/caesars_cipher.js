function rot13(string) { // LBH QVQ VG!
  arr = string.toLowerCase().split('');
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (string.charCodeAt(i) > 192 || string.charCodeAt(i) < 65 )  {
      newArr.push(string[i]);
    }

    else if (arr[i].charCodeAt(0) >= 110) {
          newArr.push(String.fromCharCode(arr[i].charCodeAt(0) - 13));
    }
    else {
      newArr.push(String.fromCharCode(arr[i].charCodeAt(0) + 13));
    }


  }
  return newArr.toString().toUpperCase().replace(/,/g, '')
  ;
}
