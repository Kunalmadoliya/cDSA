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

  traverseFromStart() {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== null);
  }

  traverseFromEnd() {
    if (this.tail === null) return;

    let current = this.tail;
    do {
      console.log(current.data);
      current = current.previous;
    } while (current !== null);
  }

 deleteValue(value) {
  if (!this.head) return;

  let current = this.head;

  while (current) {
    if (current.data === value) {

      // head
      if (current === this.head) {
        this.head = current.next;
        if (this.head) this.head.previous = null;
      }

      // tail
      else if (current === this.tail) {
        this.tail = current.previous;
        if (this.tail) this.tail.next = null;
      }

      // middle
      else {
        current.previous.next = current.next;
        current.next.previous = current.previous;
      }

      return; // ✅ stop after delete
    }
    current = current.next;
  }
}


  search(value) {
    if (this.head === null) {
      return;
    }

    let current = this.head;

    while (current !== null) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  count() {
    if (this.head === null) return 0;
    let current = this.head;

    let count = 0;
    while (current !== null) {
      current = current.next;
      count++;
    }
    return count;
  }
}

let ab = new DoubleLL();

ab.addLast(10);
ab.addLast(20);
ab.addLast(30);
ab.addLast(50);
ab.addLast(70);
ab.addLast(60);
ab.addFirst(4);

ab.traverseFromStart();

console.log("value", ab.search(70));
 ab.deleteValue(70)
console.log("count", ab.count());

ab.traverseFromStart()

ab.count();
