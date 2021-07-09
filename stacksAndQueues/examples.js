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
    newNode.next = this.top
    this.top = newNode
    this.length++
    return this
  }
  pop(){
    const newTop = this.top.next
    const oldTop = this.top
    this.top = newTop
    this.length--
    return oldTop

  }
  isEmpty() {
    if(!this.length) {
      return true
    }
    return false
  }
}

const myStack = new Stack();




//Discord
//Udemy
//google

