var insertionSortList = function (head) {
  if (!head) return head;

  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let lastSorted = head,
    curr = head.next;
  while (curr !== null) {
    if (lastSorted.val <= curr.val) {
      lastSorted = lastSorted.next;
    } else {
      let prev = dummyHead;
      //找到curr应插入的位置的前一个node
      while (prev.next.val <= curr.val) {
        prev = prev.next;
      }
      lastSorted.next = curr.next;
      curr.next = prev.next;
      prev.next = curr;
    }
    curr = lastSorted.next;
  }
  return dummyHead.next;
};
