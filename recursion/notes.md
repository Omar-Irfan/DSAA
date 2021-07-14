## Introduction to Algorithims
-Steps in a proccess we take to perform actions
-Algorithims allow us to use data structures to perform actions on that data
-certain algorithims allow us to simplify time complexity

## Recursion
-Not really an algorithim but a concept that we use to write algorithims
-When you define something interms of itself
-A function that refers to itself inside itself

function inception() {
  inception()
}

-really good for when we have repeated subtasks
-used in searching and sorting


## Stack overflow

-if you call a recursive function without stopping you will encounter stack overflow
-functions that are called are placed in the call stack
- as we know from stacks, you add each function call at the top of the stack
-With a recursive function that does not end you will just continuesly add function calls without "popping" anything
-This will happen until you run out of memory <-- this is Stackover Flow
-Computer needs to allocate memory to remember things, Stackover Flow happens when we have recursion and there is no way to stop the recursive call

## Anatomy of a Recurssion
-Every recursive function needs to have a base case to make sure it can stop
-ex having a counter and a conditional statement

let counter = 0
function inception(){
  if(counter > 3) {
    return 'done!';
  }
  counter++
  return inception();
}

inception()

use return before inception otherwise the final value won't bubble to the top

1. Identify Base Case (when to stop)
2. Identify recursive case (when the function will run again)
3.Get closer and closer and return when needed. Usuallly you have 2 returns

## O(2^N)
-seen with recursive algorithims
-pretty bad time complexity wise
-number of function calls exponentially for every additional element

## Recursion vs Iteration

-Anything you do with a recursion you can do iteratively (loop)
-both have pros and cons
-Recursion can help keep code DRY
-Recursive functions might make your code more readable and simpler

Pros:
-DRY
-Readable

Cons:
-Large Stack (huge memory footprint)
-Might have huge time complexity
-Might be hard to understand


recursion is useful when you arent sure how many loops you'll be going through with a particular data structure

Tail Call Optimization - a way to use recursion without increasing the call stack

## When to use recursion

Everytime you are using a tree or converting something into a tree, consider recursion

What to look for in interview questions

1.Divided into a number of subproblems that are smaller instances of the same problem.
2.Each instance of the subproblem is identical in nature
3.The solutions of each subproblem can be combined to solve the problem at hand

Divide and conquer using recursion

## Summary
-Recursion = function calls itself
-need to be careful of stack overflow
-less efficient than iterative solutions most of the time but can be more readable
-have to be very careful with it
-when we come to sort/traversal we will have to use recursion