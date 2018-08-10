var oddEvenList = function (head) {
  if (head === null) return head;
  let oddTail = head
  let evenTail = head.next
  const evenHead = head.next

  while (evenTail !== null && evenTail.next !== null) {
    oddTail.next = evenTail.next
    evenTail.next = evenTail.next.next
    oddTail.next.next = evenHead

    oddTail = oddTail.next
    evenTail = evenTail.next
  }

  return head
};