const INT_MAX = 4294967296;
const INT_MIN = -4294967296;
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const isValidBST = (root) => {
  return(isBSTUtil(root, INT_MIN, INT_MAX));
};

const isBSTUtil = (root, min, max) => {
  if (root === null) { return true; }

  if (root.val < min || root.val > max) {
    return false;
  }

  return isBSTUtil(root.left, min, root.val - 1) && isBSTUtil(root.right, root.val + 1, max);
};


const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
two.left = one;
two.right = three;

console.log(isValidBST(two));


