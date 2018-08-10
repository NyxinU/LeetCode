var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) { return null }
  let curA = headA
  let curB = headB
  let firstPassA = true
  let firstPassB = true

  while (firstPassA || firstPassB) {
    if (curA === curB) { return curA }
    if (curA === null) {
      curA = headB
      firstPassA = false
    }

    if (curB === null) {
      curB = headA
      firstPassB = false
    }
    curA = curA.next
    curB = curB.next
  }

  while (curA !== null || curB !== null) {
    if (curA === curB) { return curA }
    curA = curA.next
    curB = curB.next
  }
  return null
};