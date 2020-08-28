/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  result.storage = [];
  result.storageLimit = 4;
  result.size = 0;

  result.insert = function( key, value ) {
    var storageIndex = getIndexBelowMaxForKey(key, result.storageLimit);
    var bucket = result.storage[storageIndex]

    // if bucket at storageIndex doesn't exist
    if ( !bucket ) {
      // create new bucket
      result.storage[storageIndex] = [];
      bucket = result.storage[storageIndex];
    }

    var found = false;
    // iterate over bucket
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      // if the key exists in the bucket
      if (tuple[0] === key) {
        // update the value
        result.storage[index][1] = value;
        found = true;
      }
    }

    // if no key was found
    if (!found) {
      // insert new key and value as tuple in bucket
      result.storage[storageIndex].push([key, value]);
      result.size++;
      // Resize:
      if (result.size > result.storageLimit * .75) {
        result.resize(result.storageLimit * 2);
      }
    }
  };

  result.retrieve = function( key ) {
    var storageIndex = getIndexBelowMaxForKey(key, this.storageLimit);
    var bucket = this.storage[storageIndex]

    // if bucket at storageIndex doesn't exist
    if (bucket === undefined) {
      // return undefined
      return undefined;
    }

    // iterate over bucket
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      // if the key exists in the bucket
      if (tuple[0] === key) {
        // update the value
        return tuple[1];
      }
    }

    // if no key was found, return undefined
    return undefined;
  };

  result.remove = function( key ) {
    // call hashing function on key with storageLimit to get a storageIndex
    var storageIndex = getIndexBelowMaxForKey(key, result.storageLimit);
    var bucket = result.storage[storageIndex]

    if ( !bucket ) {
      return undefined;
    }

    // iterate over bucket
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      // if the key exists in the bucket
      if (tuple[0] === key) {
        // delete the tuple
        result.storage[storageIndex].splice(i, 1);
        return tuple[1];
        result.size--;
        // Resize:
        if (result.size < result.storageLimit * .25) {
          result.resize(result.storageLimit / 2);
        }
        // delete result.storage[storageIndex][0];
        // delete result.storage[storageIndex][1];
      } else {
        return undefined;
      }
    }
  };

  result.resize = function( newLimit ) {
    var oldStorage = result.storage;
    result.storage = [];
    result.storageLimit = newLimit;
    result.size = 0;

    // iterate over old storage
    for (var i = 0; i < oldStorage.length; i ++) {
      // if current bucket is not undefined
      if (oldStorage[i] !== undefined) {
        // iterare over bucket
        for (var j = 0; j < oldStorage[i].length; j++) {
          // call insert on each tuple key value pair
          result.insert(oldStorage[i][j][0], oldStorage[i][j][1]);
        }
      }
    }
  }

  return result;
};
