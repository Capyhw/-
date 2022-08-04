var deleteDuplicates = function (head) {
  let saveHead = head;
  // 外层while控制循环完整个链表的长度
  while (head && head.next) {
    // 内层循环用于比较当前值是否和下一个值相等，相等则通过改变节点的指向来“删除”元素
    while (head.next && head.next.val === head.val) {
      head.next = head.next.next;
    }
    // 移动head到下一个节点
    head = head.next;
  }
  return saveHead;
};
