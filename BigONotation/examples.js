const nemo = ['nemo'];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log("Found Nemo");
    }
  }
}

// findNemo(nemo)

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

// Log all pairs of array common interview question
const boxes = [1,2,3,4,5];

const logPairs = function(array){
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
      console.log(array[i],array[j])

  }
}
}

logPairs(boxes)

//when you see nested loops think multiplication
//O(n*n) ---> O(n^2) ---> Quadratic Time

//if the second loop had a different input then iit would be O(n*m)

function boooooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('boooooo!')
  }
}
// boooooo([1,2,3,4,5,6])

//Time complexity is O(n), what about space complexity?
//In this function we are only creating the i = 0 variable, other than that we aren't adding any more memory therefore space complexity is O(1)

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n.length; i++) {
    hiArray[i] = 'hi'
  }
  return hiArray
}

// arrayOfHiNTimes(6)

//We create a variable (i) and a datastructure (the array) so its is O(n+1) or just O(n)
//Twitter exampl, find 1st, find nth....
const array = [{'hi':'hi'}, 'my', 'teddy']
array[0]
array[array.length-1] // O(1)