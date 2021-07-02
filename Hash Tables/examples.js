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
}