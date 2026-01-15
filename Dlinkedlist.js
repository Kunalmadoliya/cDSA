class Node {
  constructor(data) {
    this.previous = null;
    this.data = data;
    this.next = null;
  }
}

class DoubleLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addFirst(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      newNode.next = current;
      current.previous = newNode;
      this.head = newNode;
    }
  }

  addLast(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.tail;

      current.next = newNode;
      newNode.previous = current;

      this.tail = newNode;
    }
  }

  
}


let ab = new DoubleLL()
