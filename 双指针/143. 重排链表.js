var reorderList = function (head) {
  // 找到中间结点
  let mid = findMid(head);
  let head2 = mid.next; // 后半部分  当head为偶数，如：1234，会分成【1，2，3】和【4】两部分，不过合并链表后与【1，2】和【3，4】结果一致
  mid.next = null;
  let head1 = head;

  // 反转后半部分
  head2 = reverseList(head2);

  // 合并前后链表
  mergeList(head1, head2);
};

//偶数返回下中点，奇数是中点
var findMid = function (head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

//反转链表
var reverseList = function (head) {
  let newNode = null;
  while (head !== null) {
    let temp = head.next;
    head.next = newNode;
    newNode = head;
    head = temp;
  }
  return newNode;
};
//合并链表
var mergeList = function (head1, head2) {
  while (head1 && head2) {
    let next1 = head1.next,
      next2 = head2.next;

    head1.next = head2;
    head1 = next1;

    head2.next = head1;
    head2 = next2;
  }
};
