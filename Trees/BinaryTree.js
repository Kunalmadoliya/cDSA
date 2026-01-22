class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addValue(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift();

      if (current.left === null) {
        current.left = newNode;
        console.log(this.root);

        return;
      } else {
        queue.push(current.left);
      }

      if (current.right === null) {
        current.right = newNode;
        console.log(this.root);
        return;
      } else {
        queue.push(current.right);
      }
    }
    console.log(queue);
  }

  search(valueToSearch) {
    const queue = [this.root];

    while (queue.length > 0) {
      let current = queue.shift();

      if (current.value === valueToSearch) {
        return true;
      }

      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    return false;
  }

  levelTraversal() {
    if (this.root === null) return;
    let queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift();

      console.log(current.value);

      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
  }

  preOrderIterative() {
    if (this.root === null) return;

    let stack = [this.root];

    while (stack.length > 0) {
      const current = stack.pop();
      console.log(current.value);

      // Push right first so left is processed first
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
  }

  preOrderRecurssive(node = this.root) {
    if (node === null) return;

    console.log(node.value);

    this.preOrderRecurssive(node.left);
    this.preOrderRecurssive(node.right);
  }

  inOrderRecurssion(node = this.root) {
    if (node === null) return;
    if (node) {
      this.inOrderRecurssion(node.left);
      console.log(node.value);
      this.inOrderRecurssion(node.right);
    }
  }

  postOrderRecurssion(node = this.root) {
    if (node === null) return;
    if (node) {
      this.postOrderRecurssion(node.left);
      this.postOrderRecurssion(node.right);
      console.log(node.value);
    }
  }
}

const bt = new BinaryTree();

bt.addValue(10);
bt.addValue(20);
bt.addValue(30);
bt.addValue(40);
bt.addValue(50);
bt.addValue(60);
bt.addValue(70);
bt.addValue(80);

console.log("-------------------------------------------------");

console.log("Finding 30", bt.search(10));

console.log("-------------------------------------------------");

bt.levelTraversal();

console.log("-------------------------------------------------");

bt.preOrderIterative();

console.log("-------------------------------------------------");

bt.preOrderRecurssive();

console.log("In order");

bt.inOrderRecurssion();

console.log("post order");

bt.postOrderRecurssion();
