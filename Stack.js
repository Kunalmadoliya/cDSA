class Stack {
    #item = [];
  constructor() {
  }

  push(element) {
    this.#item.push(element);
  }

  pop() {
    if (this.#item.length === 0) return null;

    return this.#item.pop();
  }

  peek(){
    if (this.#item.length === 0) return null;

    return this.#item[this.#item.length - 1]

  }

  isEmpty(){
    if(this.#item.length === 0) return true 
    return false
  }
 
  size(){  
    return this.#item.length
  }
}


export default Stack