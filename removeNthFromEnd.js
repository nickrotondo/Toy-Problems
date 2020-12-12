/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?

Example 1:
  Input: head = [1,2,3,4,5], n = 2
  Output: [1,2,3,5]

Example 2:
  Input: head = [1], n = 1
  Output: []

Example 3:
  Input: head = [1,2], n = 1
  Output: [1]

Constraints:
  The number of nodes in the list is sz.
  1 <= sz <= 30
  0 <= Node.val <= 100
  1 <= n <= sz
*/


// Definition for singly-linked list.
// const ListNode = function (val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }

var removeNthFromEnd = function(head, n) {
  var dummyHead = new ListNode(0);
  dummyHead.next = head;
  var fast = dummyHead;
  var slow = dummyHead;

  for (let i = 1; i <= n + 1; i++) {
    fast = fast.next;
  }

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummyHead.next;
};

// Create dummy head set to value 0 and next = head for a refence to the head
// set a slow pointer and fast pointer to 0
// increment fast pointer so it is n ahead of slow pointer
// while fast is not null
  // increment fast and slow
// set slow.next to the next one in order to skip over one item
// return dummyHead.next which is the original head