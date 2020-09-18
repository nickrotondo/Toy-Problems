/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function (apple, orange) {
  if (apple === orange) {
    return true;
  } else if ((typeof (apple) === 'object' && apple !== null) && (typeof (orange) === 'object' && orange !== null)) {
    if (Object.keys(apple).length !== Object.keys(orange).length) {
      return false
    }

    for (var key in apple) {
      if (orange.hasOwnProperty(key)) {
        if (!deepEquals(apple[key], orange[key])) {
          return false;
        }
      } else {
        return false;
      }
    }

    return true;

  } else {
    return false;
  }
};

// Check if apple = orange
// If apple and orange are both objects
  // Check if the lengths of their keys match
  // Iterate over apple's keys
    // Check if they both have the same key values
    // Check if apple[key] = orange[key]

// —————————————————

// if apple === orange
  // return true

// else if the value at apple is an object and value of orange is an object
  // if the length of apple doesn't equal the length of orange
    // return false
  // iterate over keys in apple
    // if orange has the same keys
      // if calling deepEquals on apple[key] and orange[key] is not true
        // return false
    // otherwise
      // return false
  // return true

// otherwise
  // return false
