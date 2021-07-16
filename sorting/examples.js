// Bubble Sort

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function bubbleSort(array) {
  const length = array.length
  for (let i  = 0; i < length; i++){
    for (let j = 0; j < length; j++) {
      if(array[j] > array[j+1]) {
        const holding = array[j]
        array[j] = array[j+1]
        array[j+1] = holding

      }
    }
  }
}

bubbleSort(numbers)
console.log(numbers)

function selectionSort(array) {
  const length = array.length
  for (let i  = 0; i < length; i++){
    let min = i
    let temp = array[i]
    for (let j = i+1; j < length; j++) {
      if(array[j] < array[min]) {
        min = j
      }
    }
    array[i] = array[min]
    array[min] = temp
  }
  return array
}

function insertionSort(array) {
  const length = array.length;
	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i,1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i-1]) {
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j-1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j,0,array.splice(i,1)[0]);
          }
        }
      }
    }
	}
}

insertionSort(numbers);
console.log(numbers);