/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {

    // stack storage
    this.storage = {};
    // stack start reference
    this.start = 0;
    // stack end reference
    this.end = 0;
    // min value
    this.minValue;

  };

  // add an item to the top of the stack
  Stack.prototype.push = function(value) {
    this.storage[this.end++] = value;
    if (this.minValue === undefined || this.minValue > value) {
      this.minValue = value;
    }
  };

  // remove an item from the top of the stack
  Stack.prototype.pop = function() {
    if ( (this.end - this.start) > 0 ) {
      this.end--
      var popped = this.storage[this.end];
      delete this.storage[this.end];
      return popped;
    }
  };

  // return the number of items in the stack
  Stack.prototype.size = function() {
    return (this.end - this.start);
  };

  // return the minimum value in the stack
  Stack.prototype.min = function() {
    return this.minValue;
  };