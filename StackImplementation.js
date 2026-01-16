import Stack from "./Stack.js";

let newStack = new Stack();

newStack.push(10);

console.log("Stack result :-", newStack.peek());

newStack.pop();

console.log("Stack result :-", newStack.peek());

newStack.push(10);
newStack.push(20);
newStack.push(30);

console.log("Empty :-", newStack.isEmpty());

console.log("Size :-" , newStack.size());
