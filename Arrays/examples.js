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

console.log(strings)