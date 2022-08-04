var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  const dummy = new ListNode(null, head);
  let p = dummy;
  let q = dummy.next;
  while (q && q.next) {
    if (q.val == q.next.val) {
      while (q.next && q.val == q.next.val) {
        q = q.next;
      }
      q = q.next;
      p.next = q;
    } else {
      p = p.next;
      q = q.next;
    }
  }
  return dummy.next;
};
