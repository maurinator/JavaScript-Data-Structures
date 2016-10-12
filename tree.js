function Node (data) {
  this.data = data;
  this.parent = null;
  this.children = [];
}

function Tree (data) {
  this._root = new Node(data);
}

Tree.prototype.traverseDF = function (callback) {
  (function recurse (currentNode) {
    for (var i = 0; i < currentNode.children.length; i++) {
      recurse(currentNode.children[i]);
    }
    callback(currentNode);
  })(this._root);
};

Tree.prototype.traverseBF = function (callback) {
  var queue = new Queue();
  queue.enqueue (this._root);
  currentTree = queue.dequeue();
  while (currentTree) {
    for (var i = 0; i < currentTree.children.length; i++) {
      queue.enqueue(currentTree.children[i]);
    }
    callback(currentTree);
    currentTree = queue.dequeue();
  }
};

Tree.prototype.contains = function (callback, traversal) {
  traversal.call(this, callback);
}
// tree is an example of a root node
// tree.contains(function(node){
//     if (node.data === 'two') {
//         console.log(node);
//     }
// }, tree.traverseBF);

Tree.prototype.add = function (data, toData, traversal) {
  var child = new Node(data),
    parent = null,
    callback = function (node) {
      if (node.data === toData) {
        parent = node;
      }
    };
  this.contains (callback, traversal);

  if (parent) {
    parent.children.push(child);
    child.parent = parent;
  } else {
    throw new Error ('Cannot add node to a non-existent parent.');
  }
};

Tree.prototype.remove = function(data, fromData, traversal) {
  function findIndex(arr, data) {
    var index;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].data === data) {
        index = i;
      }
    }
    return index;
  }
  var tree = this,
    parent = null,
    childToRemove = null,
    index;
  var callback = function(node) {
    if (node.data === fromData) {
      parent = node;
    }
  };
  this.contains(callback, traversal);
  if (parent) {
    index = findIndex(parent.children, data);
    if (index === undefined) {
      throw new Error('Node to remove does not exist.');
    } else {
      childToRemove = parent.children.splice(index, 1);
    }
  } else {
      throw new Error('Parent does not exist.');
  }
  return childToRemove;
};
