/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function (headA, headB) {
  //如果其中至少有一个链表为空，则两个链表一定不相交，返回 \text{null}null。
  if (headA === null || headB === null) {
    return null;
  }
  let pA = headA,
    pB = headB;
  /**
   * 情况一：两个链表相交
   * 链表 headA 和 headB 的长度分别是 m 和 n。假设链表headA 的不相交部分有 a 个节点，链表 headB 的不相交部分有
   * b 个节点，两个链表相交的部分有c 个节点，则有 a+c=m，b+c=n。
   * 如果 a=b，则两个指针会同时到达两个链表相交的节点，此时返回相交的节点；
   * 如果 a!=b，则指针pA 会遍历完链表headA，指针pB 会遍历完链表 headB，两个指针不会同时到达链表的尾节点，
   * 然后指针 pA 移到链表 headB 的头节点，指针 pB 移到链表 headA 的头节点，然后两个指针继续移动，
   * 在指针pA 移动了 a+c+b次、指针 pB 移动了 b+c+a次之后，两个指针会同时到达两个链表相交的节点，
   * 该节点也是两个指针第一次同时指向的节点，此时返回相交的节点。
   * 情况二：两个链表不相交
   * 如果 m=n，则两个指针会同时到达两个链表的尾节点，然后同时变成空值null，此时返回null；
   * 如果 m!=n，则由于两个链表没有公共节点，两个指针也不会同时到达两个链表的尾节点，因此两个指针都会遍历完两个链表，
   * 在指针pA 移动了 m+n 次、指针 pB 移动了 n+m次之后，两个指针会同时变成空值 null，此时返回null
   */
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
};
