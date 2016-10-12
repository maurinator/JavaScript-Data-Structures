function Node (data) {
  this._data = data;
  this._next = null;
}

function SinglyList ( ) {
  this._length = 0;
  this._head = null;
}

SinglyList.prototype.add = function (value) {
  var currentNode = this._head,
    node = new Node(value);
  if (!currentNode) {
    this.head = node;
    this._length++;
    return;
  }
  while (currentNode._next) {
    currentNode = currentNode._next;
  }
  currentNode.next = node;
  this._length++;
}

SinglyList.prototype.get = function (position) {
  if (this._length == 0 || position < 0 || position >= this._length) {
    throw new Error('Error');
  }
  var i = 0;
  var node = this._head;
  while (i < position) {
    node = node._next;
    i++;
  }
  return node;
}

// needs to be implemented
SinglyList.prototype.remove = function (position) {
  if (position < 0 || position > this._length || this._length == 0) {
    throw new Error('Index out of range...');
  }
};
