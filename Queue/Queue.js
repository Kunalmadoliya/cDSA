class Queue{
    #items = []


    enqueue(value){
        this.#items.push(value)
    }

    dequeue(){
        if(this.isEmpty()) return 0
        this.#items.shift()
    }

    peek(){
         if(this.isEmpty()) return 0

         return this.#items[0]
    }

    isEmpty(){
       return this.#items.length === 0 
    }

    size(){
        return this.#items.length
    }

    traverse(){
     if(this.isEmpty()) return 0

     let i = 0 
     while(i < this.#items.length){
        console.log(this.#items[i]);
        i++
     }
    }
}

export default  Queue