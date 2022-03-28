let isPalindrome = function (head) {
    let fast = head, slow = head;
    //通过快慢指针找到中点
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    //如果fast不为空，说明链表的长度是奇数个,slow指向中点，需要向后再走一步
    if (fast != null) slow = slow.next;
    //反转后半部分链表
    slow = reverse(slow);
    fast = head;
    while (slow != null) {
        //然后比较fast和翻转后的slow是否相等
        if (fast.val != slow.val) return false;
        fast = fast.next;
        slow = slow.next;
    }
    return true;
}
//反转链表
let reverse = function (head) {
    let prev = null;
    while (head != null) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}