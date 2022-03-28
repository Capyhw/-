/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let slow = head
    let fast = head
    while (fast != null && fast.next != null) {
        //慢指针每次走一步
        slow = slow.next;
        //快指针每次走两步
        fast = fast.next.next;
        //如果相遇，说明有环，直接返回true
        if (slow == fast) return true;
    }
    return false
};