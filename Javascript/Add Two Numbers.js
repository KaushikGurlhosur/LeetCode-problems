class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

let addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0); // Placeholder for result
  let current = dummy; // Pointer to construct output list
  let carry = 0; // Store carry-over from sum

  while (l1 !== null || l2 !== null || carry > 0) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10); // Compute carry-over
    current.next = new ListNode(sum % 10); // Store current digit

    // Move to the next node in the lists
    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next; // Return resulting linked list
};
