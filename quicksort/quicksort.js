/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {

  if (array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lowerHalf = [];
  var upperHalf = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      lowerHalf.push(array[i]);
    } else if (array[i] > pivot ) {
      upperHalf.push(array[i]);
    }
  }

  return quicksort(lowerHalf).concat(pivot, quicksort(upperHalf));

};
