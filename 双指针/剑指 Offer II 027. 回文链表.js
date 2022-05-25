/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//快慢指针+翻转链表+双指针
var isPalindrome = function (head) {
  //翻转链表
  const reverseL = (head2) => {
    if (head2 == null || head2.next == null) return head2;
    let reverse = reverseL(head2.next);
    head2.next.next = head2;
    head2.next = null;
    return reverse;
  };
  //快慢指针
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  //链表长度为奇数再移动一次slow
  if (fast !== null) slow = slow.next;
  //双指针
  let right = reverseL(slow);
  let left = head;
  while (right !== null && left !== null) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }
  return true;
};

//把链表放到数组里+双指针
var isPalindrome = function (head) {
  let arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  let l = 0,
    r = arr.length - 1;
  while (l < r) {
    if (arr[l] != arr[r]) return false;
    l++;
    r--;
  }
  return true;
};
