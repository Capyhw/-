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
    temp.next = list1 ? list1 : list2;
    return head.next;
  };
  
  var sortList = function (head) {
    if (head == null || head.next == null) return head;
    let slow = head,
      fast = head.next;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    const mid = slow.next;
    slow.next = null;
    return mergeTwoLists(sortList(head), sortList(mid));
  };
  