/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
  Input: l1 = [2,4,3], l2 = [5,6,4]
  Output: [7,0,8]
  Explanation: 342 + 465 = 807.

Example 2:
  Input: l1 = [0], l2 = [0]
  Output: [0]

Example 3:
  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  Output: [8,9,9,9,0,0,0,1]

Constraints:
  * The number of nodes in each linked list is in the range [1, 100].
  * 0 <= Node.val <= 9
  * It is guaranteed that the list represents a number that does not have leading zeros.
*/


// Definition for singly-linked list:
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
  // create a node to start
  const dummy = new ListNode();
  // create a copy of the dummy node to point to the node we want to edit
  let cursor = dummy;
  // create a carryOver variable and set to 0
  let carryOver = 0;

  // While there is an l1, l2 and carryover value
  while (l1 || l2 || carryOver) {
    // assign cursor.next to a new ListNode
    cursor.next = new ListNode();
    // move cursor to the the next node
    cursor = cursor.next;

    // The value of cursor is l1(or 0) + l2(or 0) + carryOver
    cursor.val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carryOver;
    // new carryOver is cursor value >= 10
    carryOver = cursor.val >= 10;
    // set cursor.value to value modulo 10
    cursor.val %= 10;

    // If l1 is not null, set l1 to l1.next
    if (l1) l1 = l1.next;
    // If l2 is not null, set l2 to l2.next
    if (l2) l2 = l2.next;
  }

  // return dummy node.next
  return dummy.next;
};
