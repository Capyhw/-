function removeNode(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
}

function addToHead(node) {
  node.prev = head;
  node.next = head.next;
  head.next.prev = node;
  head.next = node;
}

function moToHead(node) {
  removeNode(node);
  addToHead(node);
}

function removeTail(node) {
  node.prev.next = null;
}
