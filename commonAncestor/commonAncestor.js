
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandma = new Tree();
  * var mom = new Tree();
  * grandma.addChild(mom);
  * var me = new Tree();
  * mom.addChild(me);
  * grandma.getAncestorPath(me); // => [grandma, mom, me]
*/

var Tree = function() {
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a woman can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */
Tree.prototype.getClosestCommonAncestor = function(child1, child2) {
  Tree.prototype.getClosestCommonAncestor = function(child1, child2){
    // Get ancestor paths of child1 and child2
    var path1 = this.getAncestorPath(child1)
    var path2 = this.getAncestorPath(child2)

    if (!path1 || !path2) return null
    ancestor = null;

    // Get the shorter length
    var shorterLength = Math.min(path1.length, path2.length)

    // Compare each index and get the furthest common index
    for (var i = 0; i < shorterLength; i++) {
      if (path1[i] === path2[i]) {
        ancestor = path[i]
      }
    }

    return ancestor;
  }
};

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
Tree.prototype.getAncestorPath = function(target, path = []) {
  // Did we find the target?
  if (this === target) {
    // Add to the path and return path
    path.unshift(this)
    return path;
  } else {
    // iterate over possible decisions (children)
    for (let i = 0; i < this.children.length; i++) {
      // Make the decision and check if it's valid recursively
      if (this.children[i].getAncestorPath(target, path)) {
        path.unshift(this);
        return path;
      }
    }
  }
  // if no path, return null
  return null;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};
