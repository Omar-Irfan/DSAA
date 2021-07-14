function findFactorialRecursive(number) {
  if(number === 2) {
    return 2
  }
 answer = number * findFactorialRecursive(number-1)
 return answer
}
//O(n)

function findFactorialIterative(number) {
  let answer = 1;
  for (let i = 2; i <= number; i++){
    answer = answer*i
  }
  return answer
}
//O(n)
console.log(findFactorialRecursive(5))
console.log(findFactorialIterative(5))

function fibonacciRecursive(n) {
  if(n < 2) {
    return n
  }
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
} //O(2^n) -- exponential time

function fibonacciIterative(n) {
  let lastNumber = 1
  let secondLast = 0
  let currentNumber

  for (let i = 2; i <= n; i++) {
    currentNumber = lastNumber + secondLast
    secondLast = lastNumber
    lastNumber = currentNumber

  }

  return currentNumber

} //O(n)

console.log(fibonacciIterative(9))
console.log(fibonacciRecursive(9))