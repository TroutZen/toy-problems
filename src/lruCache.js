// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set.
// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// set(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The LRU cache is a hash table of keys and double linked nodes. The hash table makes the time of get() to be O(1). The list of double linked nodes make the nodes adding/removal operations O(1).


/**
 * @constructor
 */

// HEAD--------------TAIL
  //   <.older   .newer>
var LRUCache = function(limit) {
	this.limit = limit;
	this.keyMap = {};
	this.list = new DoublyLinkedList();
};

/**
 * @param {number} key
 * @returns {number}
 */

/**
 * Get and register recent use of <key>. Returns the value associated with <key>
 * or undefined if not in cache.
 */
LRUCache.prototype.get = function(key) {
	//  a get could theoretically change the order of the least recently used object
	//  if the get is the newest, then it should stay in the same order
	//  if the get is the not the newest, it should move to the front
};

LRUCache.prototype.moveToFront = function(key) {
	var size = this.list.getSize();
	var node = this.keyMap[key];
	if (this.list.tail === node) {
		return;
	} else if (this.list.head === node) {
		this
	}
}

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */

/**
 * Put <value> into the cache associated with <key>. Returns the entry which was
 * removed to make room for the new entry. Otherwise undefined is returned
 * (i.e. if there was enough room already).
 */

LRUCache.prototype.set = function(key, value) {
	var node = new Node(key, value);
	this.keyMap[key] = node;
	var removedNode;
	
	if (this.limit < this.list.getSize() + 1) {
		var removedNode = this.list.shift();
	}
	// add new node
	this.list.append(node);
	// remove from keyMap
	if (removedNode) delete removedNode.key;
	return removedNode;
};

function DoublyLinkedList() {
	this.tail = null;
	this.head = null;
	this.size = 0;
}

DoublyLinkedList.prototype.append = function(node){
	if (!this.size) {
		this.tail = node;
		this.head = node;
		this.size++;
	} else {
		// if head and tail are the same
		if (this.tail === this.head) {
			this.tail = node;
			this.head.newer = tail;
			this.tail.older = head;
		} else {
			this.tail
		}
	}
}

DoublyLinkedList.prototype.getSize = function(){
	return this.size;
}

DoublyLinkedList.prototype.shift = function(){
	var nodeToRemove;
	if (this.getSize() === 1) {
		this.tail = this.head = null;
	} else {
		nodeToRemove = this.head;
		this.head = this.head.newer;
		// remove older reference since its now at head
		this.head.older = null;
	}
	// remove pointer
	if (nodeToRemove.newer) {
		delete nodeToRemove.newer;
	}
	return nodeToRemove;
}

function Node(key, value) {
	this.key = key;
	this.value = value;
	this.older = null;
	this.newer = null;
}

Node.prototype.getNewer = function() {
	return this.newer;
}

Node.prototype.getOlder = function() {
	return this.older;
}