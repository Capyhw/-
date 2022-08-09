/**
 * 方法一：两两合并
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let res = new ListNode(-Infinity);
  for (let i = 0; i < lists.length; i++) {
    res = mergeTwoLists(res, lists[i]);
  }
  return res.next;
};
//合并两个升序列表
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode(null);
  let temp = head;
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }
  if (list1 !== null) {
    temp.next = list1;
  }
  if (list2 !== null) {
    temp.next = list2;
  }
  return head.next;
};

/**
 * 方法二：分治+递归
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  return merge(lists, 0, lists.length - 1);
};

var merge = function (lists, l, r) {
  if (l == r) {
    return lists[l];
  }
  if (l > r) {
    return null;
  }
  let mid = (l + r) >> 1;
  return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r));
};
