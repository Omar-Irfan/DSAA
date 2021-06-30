const strings = 
['a', 'b', 'c', 'd'];

//4 items * 4 shelves = 16 bytes of storage

strings[2] //O(1)

//push
strings.push('e'); //O(1) adds to the end. because we aren't looping through anything, we are simply adding an item to the end our computer knows what the last index is

//pop
strings.pop(); //O(1) removes from the end.

//unshift
strings.unshift('x'); //O(n) add to the begining of the array. adding a new value in the array shifts all other indexes forward 1 (+1). We are looping through the array and reassigning the indexes

//splice
strings.splice(2, 0, 'alien'); //O(n) adds string after a given index, shifts all the other indexes plus 1. Also the same for deleting in the middle of the array if the middle number is changed.

// console.log(strings)

//Building an Array

class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }
  get(index) {
    return this.data[index]
  }
  push(item) {
    this.data[this.length] = item
    this.length++
    return this.length
  }
  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return lastItem
  }

  shiftItems(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] =  this.data[i+1]
    }
    delete this.data[this.length-1]
  }
}

const newArray = new MyArray()
// newArray.push('Omar')
// newArray.push('Irfan')
// newArray.push('!')
// newArray.pop()
// newArray.delete(0)
// console.log(newArray)

//Reverse a String interview question

function reverse(str) {
  if(!str || str.length < 2 || typeof str !== 'string') {
    console.log("Not a string")
    return
  }

  let array = str.split("")
  let reverseArr = []
  for(let i = array.length-1; i >= 0; i-- ) {
    reverseArr.push(array[i])
  }
  reverseStr = reverseArr.join("")
  console.log(reverseStr)
}

const string = "Hi my name is Omar"

// reverse(string)
// reverse(1)


function reverse2(str) {
  return str.split("").reverse().join("")
}


//merge and sort arrays

function mergeSortedArrays(arr1, arr2) {
  let newArr = []
  mergedArr = newArr.concat(arr1, arr2).sort()
  console.log(mergedArr)
}

let a = [ 1, 3 ,4 ,6]
let b = [2, 5, 7]
mergeSortedArrays(a,b)

function mergeSortedArrays2(array1, array2){
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  
  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if(array1.length === 0) {
    return array2;
  }
  if(array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item){
   if(array2Item === undefined || array1Item < array2Item){
     mergedArray.push(array1Item);
     array1Item = array1[i];
     i++;
   }   
   else {
     mergedArray.push(array2Item);
     array2Item = array2[j];
     j++;
   }
  }
  return mergedArray;
}

console.log(mergeSortedArrays2(a,b))