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

  //   addValue(value) {
  //     const newNode = new Node(value);

  //     if (this.root === null) {
  //       this.root = newNode;
  //       return;
  //     }

  //     let queue = [this.root];

  //     while (queue.length > 0) {
  //       const current = queue.shift();

  //       if (current.left === null) {
  //         current.left = newNode;
  //         console.log(this.root);

  //         return;
  //       } else {
  //         queue.push(current.left);
  //       }

  //       if (current.right === null) {
  //         current.right = newNode;
  //         console.log(this.root);
  //         return;
  //       } else {
  //         queue.push(current.right);
  //       }
  //     }
  //     console.log(queue);
  //   }

  search(valueToSearch) {
    const queue = [this.root];
    console.log(queue);

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
}

const bt = new BinaryTree();


bt.search(30);
