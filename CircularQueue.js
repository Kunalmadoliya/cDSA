class circularQueue {
  constructor(size) {
    this.size = size;
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;

    console.log("Size of queue is : ", this.queue);
  }

  enqueue(value) {
    // FULL check
    if ((this.rear + 1) % this.size === this.front) {
      console.log("Queue is full");
      return;
    }

    // FIRST insertion
    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.size;
    }

    this.queue[this.rear] = value;
  }

  dequeue() {
    if (this.front === -1) {
      console.log("Queue is empty add some value in it");
      return;
    }

    const result = this.queue[this.front];

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    return result;
  }

  print() {
    console.log(this.queue);

    console.log("Front : ", this.queue[this.front]);
    console.log("Rear : ", this.queue[this.rear]);
  }
}

const myQueue = new circularQueue(5);

myQueue.enqueue(8);
myQueue.enqueue(6);
myQueue.enqueue(7);
myQueue.enqueue(5);
myQueue.enqueue(4);
myQueue.enqueue(4);

myQueue.print();

console.log("dequeue : ", myQueue.dequeue());
console.log("dequeue : ", myQueue.dequeue());
console.log("dequeue : ", myQueue.dequeue());

myQueue.print();
