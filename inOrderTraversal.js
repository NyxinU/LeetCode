var inorderTraversal = function (root, res = []) {
  if (root === null) { return res }

  if (root.left) {
    inorderTraversal(root.left, res)
  }

  res.push(root.val)

  if (root.right) {
    inorderTraversal(root.right, res)
  }

  return res
};