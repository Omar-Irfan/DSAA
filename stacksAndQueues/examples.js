// Stack with linkedlist

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top
  }
  push(value){
    const newNode = new Node(value)
    if(this.length === 0){
      this.top = newNode
      this.bottom = newNode
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer
  }
  this.length++
  return this
}
  pop(){
    if(!this.top){
      return null
    }
    if(this.top === this.bottom) {
      this.botom = null
    }
    this.top = this.top.next
    this.length--
    return this


  }
  isEmpty() {
    if(!this.length) {
      return true
    }
    return false
  }
}

// const myStack = new Stack();
// myStack.push("Discord")
// myStack.push("Udemy")
// // console.log(myStack)
// // console.log(myStack.peek())
// myStack.push("Google")
// myStack.pop()
// myStack.pop()
// myStack.pop()
// console.log(myStack)


//Discord
//Udemy
//google

//Stack with Arrays

class Stack {
  constructor(){
    this.array = []
    this.top = array[array.length-1];
    this.bottom = array[0];
    this.length = 0;
  }
  peek() {
    return this.top
  }
  push(value){
   this.array.push(value)
}
  pop(){
    this.array.pop()
  }
 
}