//example hash table

let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function() {
    console.log('aaaaahhhh!')
  }
}

// user.age //O(1)
// user.spell = 'abrakadabra'; //O(1)
// user.scream() //O(1)

//Building Hash Table

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
  }
  get(key) {
    let address = this._hash(key)
    const currentBucket = this.data[address];
    if(currentBucket){
      for(let i = 0; i < currentBucket.length; i++){
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }

    }
    return undefined
  }
  keys() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0])
            }
          } else {
            result.push(this.data[i][0])
          } 
        }
    }
    return result; 
  }

}

// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 100)
// myHashTable.set('apples', 50)
// myHashTable.set('oranges', 75)
// myHashTable.set('mangoes', 25)
// myHashTable.keys()

//Google interview question

const firstRecurringChar = function(arr){
  const obj = {}
  for (let i = 0; i < arr.length; i++){
    if(arr[i] in obj){
      return arr[i]
    }
    else {
      obj[arr[i]] = 1
    }
  }
  return undefined

}

//Obvious answer would be to use arrays but that would be O(n^2). To be just O(n) we use objects but one downside is the space complexity increases


console.log(firstRecurringChar([2,5,1,2,3,5,1,2,4]))
console.log(firstRecurringChar([2,1,1,2,3,5,1,2,4]))
console.log(firstRecurringChar([1,2,3,4]))