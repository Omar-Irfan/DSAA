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
-You pick the pivot point at random (depends on which kiind of quick sort method)
-Quick sort has O(log(n)) space complexity
-worst case for time complexity is O(n^2) (when pivot is smallest or largest item in array)