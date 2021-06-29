const nemo = ['nemo'];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log("Found Nemo");
    }
  }
}

findNemo(nemo)

// if we have 4 items in the array there would be 4 operations, if we have 5 there would be 5 etc. Linear pattern. Therefore this function has a notation of O(n) ---> Linear Time, big O depends on number of inputs linearly 

function compressBox(boxes) {
  console.log(boxes[0])
}

// O(1) no matter how big the array is we always do 1 operation as all we do is grab the first item in the array O(1) ---> Constant Time

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]) //O(1)
  console.log(boxes[1]) //O(1)
}
//O(2) ---> also Constant Time, in constant time we dont care about the number of operations so it is usually rounded down to O(1)

function boxCompression (boxes1, boxes2) {
  boxes1.forEach(function(box) {
    console.log(box)
  }) //O(n)

  boxes2.forEach(function(box) {
    console.log(box)
  }) //O(m)
  
}

//Big O ---> O(n + m) each input parameter is assessed seperately