//It's getting easier!


function largestOfFour(arr) {
  var biggestSoFar = [];                 /initializes biggestSoFar as an empty array
  var finalArr = [];
  for (var i=0; i<arr.length; i++) {     //iterates through each subarray in arr
    for (var j=0; j<arr[i].length; j++){ //iterates through each item in each subarray
       if (biggestSoFar < arr[i][j]) {   //Sets biggestSoFar equal to the next-largest number in subarray
         biggestSoFar = arr[i][j];
       }

      finalArr[i] = biggestSoFar;        //makes the first item of our subarray equal to biggestSoFar
    }
    biggestSoFar = 0;                    //VERY NECESSARY. We have to reset this
  }                                      // to zero to keep it from being compared to the first item in the next string.


  return finalArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*note: +=ing each version of biggestSoFar to finalArr just added a string of
characters to a single item in an array. We had to actually iterate through our
potential array, hence line 13.*/
