/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

/*
* iterate over arr
* if current item in arr is undefined in occuranceStorage
*   add current item of array to the occuranceStorage with value of 1
* otherwise
*   add one to the value in occuranceStorage at key of current item in arr
* iterate over arr again
*   if current item in occuranceStorage modulo 2 = 0
*     return current item
* return null if no even occurance is found
*/
var evenOccurrence = function(arr) {
  var occurrenceStorage = {};
  for (var i = 0; i < arr.length; i++) {
    if (occurrenceStorage[arr[i]] === undefined) {
      occurrenceStorage[arr[i]] = 1;
    } else {
      occurrenceStorage[arr[i]] += 1;
    }
  }
  for (var j = 0; j < arr.length; j++) {
    if (occurrenceStorage[arr[j]] % 2 === 0) {
      return arr[j];
    }
  }
  return null;
};
