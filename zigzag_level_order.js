var zigzagLevelOrder = function (root) {
  if (!root) { return [] }
  let res = [[root.val]];
  let cur = [root];
  let rightToLeft = true;

  while (cur.length > 0) {
    let nextVals = [];
    let nextNodes = [];

    for (let i = cur.length - 1; i >= 0; i--) {
      if (rightToLeft) {
        if (cur[i].right) {
          nextNodes.push(cur[i].right)
          nextVals.push(cur[i].right.val)
        }

        if (cur[i].left) {
          nextNodes.push(cur[i].left)
          nextVals.push(cur[i].left.val)
        }
      } else {
        if (cur[i].left) {
          nextNodes.push(cur[i].left)
          nextVals.push(cur[i].left.val)
        }

        if (cur[i].right) {
          nextNodes.push(cur[i].right)
          nextVals.push(cur[i].right.val)
        }
      }
    }
    cur = nextNodes.slice()
    if (nextVals.length > 0) { res.push(nextVals) }
    rightToLeft = !rightToLeft
  }

  return res
};