## Introduction

-Sorting is not a big deal with small pieces of data
-When inputs get larger data sets - need custom sorting algorithims 

## The issue with .sort()
-The built in method might not sort correctly oor to your needs
-In javascript numbers are converted to string and uses the character code to sort. 
-The time and space complexity of sort cannot be guaranteed because it is browser/implementation dependent
-Characters with accents wont be recognized as the same as the character without an accent

## Sorting Algorithims
-Learn when to use what sorting algorithims

## Bubble Sort
-part of the "elementary sorts" 3 sorting algorithims that are simple, basic sorting algorithims
-other two are insertion and selection sort
-merge sort and quick sort are more complex
-comes from idea of bubbling up the highest number
-keep looping through numbers while bubbling until you have a sorted list
-Not very efficient
-usually used as a learning tool
-Time Complexity = O(n^2)
-Space Complexity = O(1)


## Selection Sort
-second of the 3 elementary sorts
-scans all items for smallest element and then swaps it with value at first index
-Time Complexity = O(n^2)
-Space Complexity = O(1)
-Even worse than bubble sort

## Insertion Sort
-Used when you are sure list is almost sorted
-look at item at index and push it to the back if itis smaller than previous numbers at their indexes
-first sorting algorithim to be done when data set is nearly sorted
1 2 3 4 7 6 5 8
1 2 3 4 6 7 5 8
1 3 4 4 5 6 7 8

## Merge Sort + Quick Sort
-Use divide and conquer and recursion
-do work on each subset and then combining the solutions
-have time complexiity of O(n log n)

## O(n log n)
--Better than O(n^2) (so better than other sorts)
--no nested for loops

## Merge Sort
-divide list into half then divide each subset into half again until you only have 1 item per set
-Order each pair from lowest to highest and put them together again
-then sort the combined sub sections and merge them together until you have a sorted list
-One of the most efficient ways to sort
- the first n in n log n refers to the loop
-While we have to compare everythiing atleast once, we dont have to compare everything to everything so therefore no nesting
-Only have to compare local lists to each other
-stable )(meaning two of the same items will retain the order in which they appear)
-Space complexity - O(n) due to breaking up the list

## Stable vs Unstable Algorithims

A sorting algorithm is said to be stable if two objects with equal keys appear in the same order in sorted output as they appear in the input array to be sorted. Some sorting algorithms are stable by nature like Insertion sort, Merge Sort, Bubble Sort, etc. And some sorting algorithms are not, like Heap Sort, Quick Sort, etc.

## Quick Sort
-Also divide and conquer
- Time complexity: O(n log n)
-uses "pivoting technique" to break lists into smaller lists
-smaller lists use the same technique until they are sorted
-pick pivot point, all numbers less than pivot should be to its left
-all numbers greater than pivot are moved to right
-to do this you find number greater you pull it out of the list, you move the pivot to the left and you pull the number that was in the left and you put it where the greater number was, then you place the greater number to the right of the pivot
-after you loop every number based on the pivot you now know the correct location of the pivot and all the numbers are on the correct side (just need to be ordered)
-Now you split the list into two lists at the pivot and you use the pivot technique to rearrange it such that they are now ordered (may have to keep breaking down)
-You pick the pivot point at random (depends on which kind of quick sort method)
-Quick sort has O(log(n)) space complexity
-worst case for time complexity is O(n^2) (when pivot is smallest or largest item in array, in this case you dont really split the list) 
-pick the pivot intelligently
-quick sort is usually the fastest but has a nasty worst case.
-if you cannot garauntee that the pivot will be good, avoid quick sort

## Which sort is the best? 
Use Insertion Sort: IIf your input is small and items are mostly sorted
  -uses very little space and easy to implement

Use Bubble Sort: Almost never, only really used for educational purposes. Not efficent

Use Selection Sort: Almost never, only really used for educational purposes. Not efficent

Use Merge Sort: Fast, best case and worst case are the same, if you are worried about worst case scenario use Merge Sort. If you are worried about space, merge sort will be expensive (O(n)), if you are using external sorting merge sort is good

Use Quick Sort: Same time coomplexity as merge sort in avg and best case scenario with much less space complexity. One of the most popular sorting algorithims. If you dont pick a good pivot though, it will have terrible time complexity. If you are worried about worst case dont use this

What about Heap Sort? On avg it is slower than merge or quick sort so ffoor most cases either quick or merge is a better option


## Other Sorting Algorithims

## Heap sort
Heap: ordered binary tree
max heap: value of parent nodes > value of child nodes
-continously create max heaps to find largest item
-remove item and place into sorted partition
-represent array as tree by just filling in tree from top to bottom while goiing left to right in the array (index 0 is at the top)
-turn tree into heap (order it)
-swap highest number with last number in array and remove last number from tree (assume it is sorted)
-turn tree into heap again and follow the same steps
-do this until array is sorted
-Time complextity O(n log n) (but slower than merge or quick sort)

## Can we beat O(n log n)?

Mathematically it is impossible to beat O(n log n)
-This is the fastest possible way to compare items in a list
-What if we don't make comparisons?

## Non-Comparison Sort

Counting Sort
Radix Sort

Comparison sort - Is this element bigger than another element? Until every number gets compared

Non-Comparison Sort - use the way numbers are stored in data to our advantage to sort without comparing, really really complex
These algorithims only work with fixed length integers in a specified range. (Comparison sort work for all types of data)
have smaller time complexities than other sorts O(n+k)/O(nk) etc

## Summary
-Most of the time we talk of the O(n log n)
-Quick sort, use when avg matters more than worst case, has O(log(n)) memory
-merge is stable and has O(n log n) worst case but has O(n) memory
-Selection and Bubble you dont really use
-Insertion is good for small data and good for nearly sorted data