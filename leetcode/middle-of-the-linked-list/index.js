/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {
  let count = 1;
  let current = head;

  // Find length of list
  while (current) {
    count += 1;
    current = current.next;
  }

  const middle = Math.round(count / 2);

  // Reset for second walk through
  count = 1;
  current = head;

  // Find the middle node
  while (current) {
    if (count === middle) {
      return current;
    }

    count++;

    current = current.next;
  }
};
