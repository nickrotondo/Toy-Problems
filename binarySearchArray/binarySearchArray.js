/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {

  var result = null;

  var findIt = (array, start, end, target) => {
    var searchIndex = Math.floor((end + start) / 2);
    // Check for match:
    if (array[searchIndex] === target) {
      result = searchIndex;
      return;
    }
    // Base:
    if (start === end) {
      return;
    }
    // Eliminate lower or upper half and search again:
    if (array[searchIndex] > target) {
      findIt(array, start, searchIndex - 1, target);
    } else {
      findIt(array, searchIndex + 1, end, target);
    }
  }

  findIt(array, 0, array.length - 1, target);

  return result;

};

