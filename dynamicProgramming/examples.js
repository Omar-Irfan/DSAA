function addTo80(n) {
  return n + 80
}

function memoizedAddTo80() {
  let cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n]
  }   else {
      console.log('long time')
      cache[n] = n + 80
      return cache[n]
    }
  }
}
const memoized = memoizedAddTo80()

// console.log('1',memoized(5))
// console.log('2',memoized(5))

function fibonacci(n) { //O(2^n)
  if (n < 2) {
    return n
  }
  return fibonacci(n-1) + fibonacci(n-2)
}

// we can reduce the time complexiity of this function to  O(n) with dynamiic programming by using cached versions of calculations that are already done in the recursion.

//But because of hash table we have increased space complexity

function fibonacciMaster() { //O(n)
  let cache = {}
  return function fib(n) {
    if (n in cache) {
      return cache[n]
    } else {
      if (n < 2) {
        return n
      } else {
        cache[n] = fib(n-1) + fib(n-2)
        return cache[n]
      }
    }
  }
}

const fasterFib = fibonacciMaster()
console.log('DP', fasterFib(10))


function fibonacciMaster2(n) {
  let answer = [0, 1]
  for (let i = 2; i <= n; i++){
    answer.push(answer[i-2] + answer[i-1])
  }
  return answer.pop()
}

//Avoids recursion