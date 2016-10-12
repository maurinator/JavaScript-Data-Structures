function Queue () {
  this._container = {};
  this._oldest = 1;
  this._newest = 1;
}

Queue.prototype.size = function () {
  return ( this._newest - this._oldest );
};

Queue.prototype.enqueue = function (data) {
  this._container[this._newest] = data;
  this._newest++;
};

Queue.prototype.dequeue = function () {
  var deleted = this._container[this._oldest];
  if (deleted) {
    delete this._container[this._oldest];
    this._oldest++;
    return deleted;
  }
};
