/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  let dummy = head,
    count = 0,
    left = head,
    right = head;
  //链表长度
  while (head) {
    count++;
    head = head.next;
  }
  if (count == 0) return dummy;
  num = k % count;
  //快慢指针
  while (num--) {
    right = right.next;
  }
  while (right.next) {
    right = right.next;
    left = left.next;
  }
  //首尾相连
  right.next = dummy;
  //把慢指针的下一位存下来
  let res = left.next;
  //断开
  left.next = null;
  return res;
};
