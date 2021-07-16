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