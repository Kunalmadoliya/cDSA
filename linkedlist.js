class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  traverse(data) {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    console.log(current.data);

    while (current.next) {
      current = current.next;
      console.log(current.data);
    }
  }

  deleteValue(value) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    if (current.data === value) {
      this.head = current.next;
      return;
    }

    let previous = null;

    while (current.next) {
      previous = current;
      current = current.next;
      if (current.data === value) {
        previous.next = current.next;
        return;
      }
    }
  }

  searchValue(value) {
    if (this.head === null) {
      return false;
    }
    let current = this.head;

    if (current.data === value) return true;

    while (current.next !== null) {
      if (current.data === value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  length() {
    let count = 1;
    if (this.head === null) {
      return 0;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
      count++;
    }
    return count;
  }
}

let h = new linkedList();

h.addFirst(5);
h.addFirst(6);
h.addFirst(7);
h.addLast(10);
h.addLast(20);
h.addLast(30);
h.addLast(40);

console.log("searching 20", h.searchValue(20));
console.log("searching 20", h.length());

h.length();
