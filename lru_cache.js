
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.linkedList = new LinkedList;
  this.hash = {};
};

LRUCache.prototype.get = function (key) {
  if (this.hash[key]) {
    const node = this.hash[key];
    this.remove(node);
    this.append(node);
    return node.val;
  } else {
    return -1;
  }
};

LRUCache.prototype.put = function (key, value) {
  if (!this.capacity) {
    this.remove(this.linkedList.head.next);
  }
  const newNode = new Node(value);
  this.append(newNode);
  this.hash[key] = newNode;

  if (this.capacity) {
    this.capacity--;
  }
};

LRUCache.prototype.append = function (node) {
  node.prev = this.linkedList.tail.prev;
  this.linkedList.tail.prev.next = node;
  node.next = this.linkedList.tail;
  this.linkedList.tail.prev = node;
};

LRUCache.prototype.remove = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
  node.prev = null;
  node.next = null;
};

var Node = function (val) {
  this.val = val;
  this.prev = null;
  this.next = null;
};

var LinkedList = function () {
  this.head = new Node('head');
  this.tail = new Node('tail');
  this.head.next = this.tail;
  this.tail.prev = this.head;
};