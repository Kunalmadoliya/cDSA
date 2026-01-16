class Stack {
  #item = [];
  constructor() {}

  push(element) {
    this.#item.push(element);
  }

  pop() {
    if (this.#item.length === 0) return null;

    return this.#item.pop();
  }

  peek() {
    if (this.#item.length === 0) return null;

    return this.#item[this.#item.length - 1];
  }

  isEmpty() {
      return this.#item.length === 0
  }

  size() {
    return this.#item.length;
  }
  traverse() {
    if (this.isEmpty()) return null;

    let i = 0;
    while (i < this.#item.length) {
      console.log(this.#item[i]);
      i++;
     
    }
  }
}

export default Stack;
