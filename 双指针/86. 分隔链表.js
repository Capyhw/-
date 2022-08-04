/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let smallHead = new ListNode(null);
  let small = smallHead;
  let largeHead = new ListNode(null);
  let large = largeHead;
  while (head) {
    if (head.val >= x) {
      large.next = head;
      large = large.next;
    } else {
      small.next = head;
      small = small.next;
    }
    head = head.next;
  }
  large.next = null;
  small.next = largeHead.next;
  return smallHead.next;
};
