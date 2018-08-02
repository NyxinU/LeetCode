var addTwoNumbers = function (l1, l2) {
  let first = null;
  let next = first;
  let curNode1 = l1;
  let curNode2 = l2;
  let carryOver = false;

  while (curNode1 !== null || curNode2 !== null) {
    if (curNode1 === null) { curNode1 = new ListNode(0); }
    if (curNode2 === null) { curNode2 = new ListNode(0); }

    let val = curNode1.val + curNode2.val;
    if (carryOver) {
      val++;
      carryOver = false;
    }

    if (val >= 10) {
      val = val % 10;
      carryOver = true;
    }

    let node = new ListNode(val);

    if (first === null) {
      first = node;
      next = first;
    } else {
      next.next = node;
      next = next.next;
    }

    curNode1 = curNode1.next;
    curNode2 = curNode2.next;
  }
  if (carryOver) {
    next.next = new ListNode(1);
  }
  return first;
};