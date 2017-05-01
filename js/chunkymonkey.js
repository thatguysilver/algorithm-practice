//Group an array (arr) into [size] groups.
//The typeofs must agree (which made this a pain in the ass)
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var leftover = arr.length % size; //FINALLY A USE FOR MODULULUS ;
  var finalArr = [];

  for (var i = 0; i < arr.length; i += size) {
    newArr += arr.slice(i, size+i);
    newArr = newArr.split(',');
    finalArr.push(newArr);
    newArr = [];
  }
 for (var j = 0; j < finalArr.length; j++) {
   for (var k = 0; k < finalArr[j].length; k++) {
     {
       if (isNaN(Number(finalArr[j][k]))) {continue;} else {
       finalArr[j][k] = Number(finalArr[j][k]);}}
   }
 }

/*
Note to future Adam: the isNan() function was the only way to do this, as
trying to do boolean comparisons involving null in js only bring insane, unpredictable,
hair-pulling-out results. Do NOT compare the a Number() or parseInt() function
to null. I know that, supposedly, in 100% of cases, the operator is at fault.
But the things I've learned about js today would lead me to believe that sometimes,
just sometimes, a programming language will have some truly insane logic going
on under the hood. Rant over.
*/
