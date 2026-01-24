class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  addValue(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) {
        return;
      }

      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
        } else {
          current = current.right;
        }
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
        } else {
          current = current.left;
        }
      }
      console.log(current);
    }
  }

  search(value) {
    if (this.root === null) return false;

    let current = this.root;

    while (current) {
      if (current.value === value) {
        return true;
      }

      if (value < current.value) {
        current = current.left;
      }

      if (value > current.value) {
        current = current.right;
      }
    }
    return false;
  }

  levelOrderTraversal() {
    if (this.root === null) return;

    let stack = [this.root];

    while (stack.length > 0) {
      let current = stack.shift();

      console.log(current.value);

      if (current.left !== null) stack.push(current.left);
      if (current.right !== null) stack.push(current.right);
    }
  }

  preOrderTraversal(node = this.root) {
    if (node === null) return;

    console.log(node.value);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }

  inOrderTraversal(node = this.root) {
    if (node === null) return;

    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  postOrderTraversal(node = this.root){
    if(node === null) return 

    if(node){
      this.postOrderTraversal(node.left)
      this.postOrderTraversal(node.right)
      console.log(node.value);
      
    }
  }
}

const bst = new BST();

console.log("---------------------------------------------------------------");

bst.addValue(10);
bst.addValue(15);
bst.addValue(5);
bst.addValue(7);
bst.addValue(3);

console.log("---------------------------------------------------------------");

console.log("SEARCH", bst.search(50));

console.log("---------------------------------------------------------------");

bst.levelOrderTraversal();

console.log("---------------------------------------------------------------");

bst.preOrderTraversal();

console.log("---------------------------------------------------------------");

bst.inOrderTraversal();

console.log("---------------------------------------------------------------");

bst.postOrderTraversal()