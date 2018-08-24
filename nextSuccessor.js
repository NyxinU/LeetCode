// Data structure to store a Binary Search Tree node
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  // Recursive function to insert an key into BST
  insert(root, key) {
    // if the root is null, create a new node an return it
    if (root == null) {
      return new Node(key);
    }

    // if given key is less than the root node, recurse for left subtree
    if (key < root.data) {
      root.left = this.insert(root.left, key);
    }

    // if given key is more than the root node, recurse for right subtree
    else {
      root.right = this.insert(root.right, key);
    }

    return root;
  }


  // Helper function to find minimum value node in given BST
  findMinimum(root) {
    while (root.left !== null) {
      root = root.left;
    }
    return root;
  }

  // Recursive function to find inorder successor for given key in a BST
  findSuccessor(root, succ, key) {
    // base case
    if (root === null) {
      return succ;
    }

    // if node with key's value is found, the successor is minimum value
    // node in its right subtree (if any)
    // console.log(key, parseInt(root.data))
    if (root.data === parseInt(key)) {
      if (root.right !== null) {
        return this.findMinimum(root.right);
      }
    }

    // if given key is less than the root node, recuse for left subtree
    else if (key < parseInt(root.data)) {
      // update successor to current node before recursing in left subtree
      succ = root;
      return this.findSuccessor(root.left, succ, key);
    }

    // if given key is more than the root node, recuse for right subtree
    else {
      return this.findSuccessor(root.right, succ, key);
    }

    return succ;
  }
}
// main function

let root = null;

/* Construct below tree
      15
      /  \
    /    \
    10     20
  / \     / \
  /   \   /   \
8    12 16   25
*/

let bst = new BST
let keys = [8, 10, 12, 15, 16, 20, 25];
for (let key in keys) {
  root = bst.insert(root, keys[key]);
}

// find inorder successor for each key
// for (let key in keys) {
//   console.log(keys[key] + " ");

//   let succ = bst.findSuccessor(root, null, keys[key]);
//   if (succ !== null) {
//     console.log("Successor is " + succ.data);
//   } else {
//     console.log("No Successor");
//   }
// }

const nextSuccessor = (root, target) => {
  if (root.left) {
    let res = nextSuccessor(root.left, target)
    if (res) return res
  }

  if (root.data > target) {
    return root.data
  }
  
  if (root.right) {
    let res = nextSuccessor(root.right, target)
    if (res) return res
  }
  // return null
}

// let root = new Node(15);
// root.left = new Node(10);
// root.right = new Node(20);
// root.left.left = new Node(8);
// root.left.right = new Node(12);

// root.right = new Node(20);
// root.right.left = new Node(16);
// root.right.right = new Node(25);

// console.log(nextSuccessor(root, 16))
console.log(root)

