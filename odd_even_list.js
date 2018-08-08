var oddEvenList = function (head) {
  let oddList = head
  let oddTail = null
  let evenList = head.next
  let evenHead = head.next
  let cur = head.next.next;
  let isOdd = true;

  while (cur !== null) {
    if (isOdd) {
      oddList.next = cur
      oddTail = cur
      cur = cur.next
      isOdd = false;
    } else {
      evenList.next = cur
      cur = cur.next
      isOdd = true;
    }
  }
  oddTail.next = evenHead

  return oddList
};

