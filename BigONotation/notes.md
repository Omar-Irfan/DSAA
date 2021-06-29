## Big O

-Tells us how good a solution to a problem is

-Distinguish between good code and bad code

## What is good code

1.Readable
  -is it clean,  can others understand it?
2.Scalable
  -Big O lets us measure did this

  -code = instructions
  -goes into computer = machine
  -results in output

  -there are inefficient and efficient ways of giving your computer instructions

## Big O and Scalability

-Speed of code is dependant on computer hardware and other factors

-Therefore speed is not necessarily a good indicator or code quality/efficiency

-Scalability: how much increasing number of inputs impacts code runtime
-When we grow bigger and bigger in our input, how much does the function slow down (how many more operations we have to do) -> Algorithmic Efficiency

-Big O notation is the language we use to measure how long it takes an algorithim to run

-Different algorithims have different efficiencies, the slower code slows down the better it is

## O(n)

O(n) ---> Linear Time, big O depends on number of inputs linearly 

## O(1)

O(1) --> Constant Time, very scalable

## Simplifying Big O

-No need to calculate every single step to get big O, ex: O(3n + 5) is simplified to O(n)

-4 rules for calculation Big O

-Rule 1: Worst Case:
  -ex the in a loop the item you are looking for is the last item in the array so you run the function array.length times
  -so in that case we assume for the purposes of big O the answer would be O(n) even if the item in the array isn't the last one. akways assume worst case

-Rule 2: Remove Constants:
  -Constant values do not have a significant impact on scalability given a large enough input ex n + 100 and n are functionally the same after a large enough n value (1000100 is not much more than 1000000)

  -Constant numbers before variables don't actually affect the behaviour of the function O(2n) is still linear so is effectively the same as O(n)

-Rule 3: Different terms for inputs:
  -When you have a function with multiple inputs, for ex then you calculate the big O of each input,

  In the case of two seperate loops you would add the inputs, in the case of two nested loops you would multiply them

-Rule 4: Drop Non Dominants
  -Drop all terms except for the most dominant term (when scaled). If you had O(n + n^2) make it O(n^2)

## What does this all mean?

-We use big O to compare data structures to see how good they are for specific purposes

Data Structures + Algorithms = Programs

## The worst Big O ---> O(n!)
- means we are adding a nested loop for every input
-Will never see this, if your function has this you did something very wrong

## 3 Pillars of Programming
1. Readable
2. Scalable (interms of speed) - Has good time complexity
3. Scalable (interms of space/memory) - Has good space complexity

-usually a trade off between speed and memory, if you want things to go faster you will have to sacrifice memory and vice versa

## Space Complexity

-a program has two ways to remember things, heap and stack
  -heap : store variables that are assigned values
  -stack : keep track of function calls

-we look at total size relative to the size of input and see how much new memory we are allocating

## What causes space complexity?

-Variables
-Data Structures
-Function Call
-Allocations


-side note: the .length() function in JS is O(1)

