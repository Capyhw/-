/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * @description 双链表
 */
var reverseList = function (head) {
    let newNode = null
    while (head !== null) {
        let temp = head.next
        head.next = newNode
        //往后移动
        newNode = head
        head = temp
    }
    return newNode
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 * @description 递归
 */
var reverseList = function (head) {
    if (head == null || head.next == null) return head
    let reverse = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reverse;
};