//Pointer example

let obj1 = { a: true };
let obj2 = obj1;

// both of these point to the same location in memory obj2 and obj1 point to the same piece of data in memory
obj1.a = "love"
obj1 = null
// console.log(obj1)
// console.log(obj2)

// Because there is a pointer to it, {a: true} does not actually get deleted and is still accessible by obj2

obj2 = "love"
//now the {a: true} will be completely deleted this is called garbage collection

//garbage collected = memory is managed automatically

//in low level languages we'd have to delete unused memory manually

//10-->5-->16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   } 
// }
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedListTest {
  constructor(value){
    this.head = {
      value: value,
      prev: null,
      next: null
    }
    this.tail = this.head
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value)
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length ++
    return this
  }
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    this.length ++
    return this
  }
  printList(){
    const array = []
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
  insert(index, value) {
    if(index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if(index >= this.length) {
      this.append(value)
      return this.printList();
    }
    let traverse = 0
    let prevNode = null
    let currentNode = this.head
    while (traverse !== index) {
      prevNode = currentNode
      currentNode = currentNode.next
      traverse++
    }

    if(traverse === index) {
      const newNode = new Node(value)
      newNode.next = currentNode
      prevNode.next = newNode
      newNode.prev = prevNode
      this.length++
    }
    return this
  }
  insert2(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      console.log('yes')
      return this.append(value);
    }
    
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    newNode.prev = leader
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {

    const prevNode = this.traverseToIndex(index-1)
    const delNode = prevNode.next
    prevNode.next = delNode.next
    delNode.next = null
    delNode.prev = null
    this.length--
    return this.printList()
  }
}

// const myLinkedList = new LinkedList(10)
// myLinkedList.append(5)
// myLinkedList.append(16)
// myLinkedList.prepend(1)
// // myLinkedList.insert(2,99)
// // console.log(myLinkedList.printList())
// // myLinkedList.remove(2)
// // myLinkedList.remove(3)
// console.log(myLinkedList)
// console.log(myLinkedList.printList())

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    console.log(newNode)
    newNode.prev = this.tail
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    newNode.next = this.head;
    this.head.prev = newNode
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      return this.append(value);
    }
    
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    console.log(this)
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

// let myLinkedList = new DoublyLinkedList(10);
// myLinkedList.append(5)
// myLinkedList.append(16)
// myLinkedList.prepend(1)
// myLinkedList.insert(2, 99)
// // myLinkedList.insert(20, 88)
// // myLinkedList.printList()
// // myLinkedList.remove(2)
// // myLinkedList.reverse()

// Reversing a Linked List
class LinkedList {
  constructor(value) {
      this.head = {
          value: value,
          next: null
      };
      this.tail = this.head;
      this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    console.log(newNode)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      console.log('yes')
      return this.append(value);
    }
    
    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters      
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    if (!this.head.next) {
      return this.head
    }
    //Loop through list
    //change pointer for each node to next in reversed list
    //switch tail and head
    //set tail pointer (former head) to null
    //[ 1, 10, 99, 5, 16, 88 ] to [88, 16, 5, 99, 10, 1]

    let currentNode = this.head
    let newNext = null
    let prevNode = null
    this.tail = currentNode

    for(let i = 0; i < this.length; i++){
      prevNode = currentNode
      currentNode = currentNode.next
      prevNode.next = newNext
      newNext = prevNode
      
    }
    this.head = prevNode
    

    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.printList()
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
console.log(myLinkedList.printList())
myLinkedList.reverse()
console.log(myLinkedList.printList())
console.log(myLinkedList)