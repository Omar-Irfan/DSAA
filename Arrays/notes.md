## Arrays
-also called lists
-order items sequentially (one after another)
-simplest and most wiidely used data structure

## Operations
lookup/access = O(1)
push = O(1)
insert = O(n)
delete = O(n)

## Static vs Dynamic Arrays

-Static arrays are fixed in size, you need to specify # elements ahead of time. No garuntee that you can keep adding things on

-Dyanimc arrays allow us to copy and rebuild arrays at a new location with more memory

-in Javascript arrays are dynamic ---> other languages like C++ (and other lower level languages) arrays are static and thus are usually faster

## Dynamic Array Operations
lookup/access = O(1)
append = O(1) (can be O(n)) - in the copying of a dynamic array to rebuild it it gets looped, thats why it can be O(n) --- not that important
insert = O(n)
delete = O(n)

## Strings and Arrays
-in interviews, treat any string question as an array question
-strings are an array of characters
-When you get a string question convert into array
-do operations on it
-the return as a string

## Arrays Summary

Pros
-Fast lookups
-Fast push/pop
-ordered

cons
-slow inserts
-slow deletes
-fixed size (if using static array)