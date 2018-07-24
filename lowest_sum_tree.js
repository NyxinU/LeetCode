class Node { 
  constructor(val) { 
    this.val = val; 
    this.left = null;
    this.right = null;
  } 
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
let f = new Node(6);
let g = new Node(7);
let h = new Node(8);
let i = new Node(9);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.left = h;
h.right = i;

const lowestSum = (node) => {
  if( node === null) {return;}
  if (node.left === null && node.right === null) { return node.val; }
  return lowestSum(node.left) < lowestSum(node.right) && lowestSum(node.left) !== null  ? node.val + lowestSum(node.left) : node.val + lowestSum(node.right);
};

console.log(lowestSum(a));