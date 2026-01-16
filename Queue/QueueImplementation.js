import Queue from "./Queue.js";


const queue = new Queue()


queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log("size : " , queue.size());

queue.dequeue() 
queue.dequeue() 
queue.dequeue() 

console.log("size : " , queue.size());
queue.traverse();
