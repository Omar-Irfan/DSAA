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
