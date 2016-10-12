/*
  Mauricio Amezcua
  Implementation of Stack Data Structure on Javascript
  October 11th, 2016
*/

function Stack () {
  this._size = 0;
  this._container = {};
}

Stack.prototype.push = function (data) {
  this._container[this._size++] = data;
}

Stack.prototype.pop = function () {
  if (this._size) {
    var deletedItem = this._container[this._size-1];
    delete this._container[--this._size];
    return deletedItem;
  }
}
