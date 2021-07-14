## Introduction

-Hierarchical structure not linear
-each parent node can have 0 or more child nodes
-start with root node
-nodes at the very end are leaf nodes
-can have sub trees
-DOM is a tree data structure
-AI in games like chess used to use trees to make decisions (before machine learning)
-Social media comments
-Abstract syntax tree

-Just like linkedlists, we use nodes in trees
-Can have any info in a node (user information, a value etc)
-Linkedlist is technically a type of tree but with just one path
-A node can only point to a child, nodes do not reference their parent 

-Many types of tree data structures

## Binary Tree

-each node can only have 0,1 or 2 children
-each node can only have 1 parent
-each node represents a state

Perfect Binary Tree, all leaf nodes are full, a node either has 0 children or 2 children. bottom layer of tree is full nothing is missing

Full Binary Tree, a node has 0 or 2 children, never 1 child

a Perfect binary tree is efficient and desirable.

They have 2 properties

1. number of nodes doubles at each level of the tree
2. number of nodes on the last level is equal to the number of all the previous nodes + 1, about 50 percent of our data is on the bottom level

## O(log n)

We can caluclate the number of nodes of a perfect binary tree by

Level 0: 2^0 = 1 node
Level 1: 2^1 = 2 nodes
Level 2: 2^2 = 4 nodes
Level 3: 2^3 = 8 nodes - if this was an array we'd have to iterate through 8 items

# of nodes = 2^h - 1
log nodes = heights or steps

log 100 = 2
10^2 = 100

The maximum number of decisions that we are going to take is log n


O(log n) is better thatn O(n) it is nearly as effeicient as O(1)

## Binary Search Tree
- Subset of binary tree
- Very good for searching and comparing things

## Operations

Lookup O(log N)
Insert O(log N)
Delete O(log N)

-Why is it better than a hash table? It preserves parent - child relationships

Rules:

- All child nodes to the right of the node must be greater than the current node, the left must be less.

    -To the right # increases to the left # decreases

-A node can only have up to 2 children (because it is a binary tree)

-However when deleting and inserting after finding the node you have to shift child nodes forwards or backwards based on the new insertion or deletion

## Balanced vs UnBalanced BST

-if most/all nodes are added to one side of the BST it starts to resemble a linkedlist this is a unbalanced BST
-In UBSTs operations are:
        lookup O(n)
        insert O(n)
        delete O(n)
        -Worst case scenario for BSTs

## Pros and Cons of BSTs

Pros:

-Most/All operations are better than O(n) (if balanced)
-Ordered
-Flexible size

Cons:

-No O(1) operations, always have to traverse through the tree to do something

-Better than Array in lookup, inserts, deletes O(log n) is more efficient than O(n)

-Better than hash tables interms of having sorted data/parent child relationships

-BSTs aren't the fastest for anything - usually have O(log n)


## Balanced Binary Search Trees

AVL Trees and Red/Black Trees will autoomatically balance out the tree if it becomes imbalanced 

## Heaps
-Most likely going to talk about Binary Heaps (two children to a node)

## Binary Heap

-Every child belongs to a parent node with a greater priority (value) - Max Heap
-Min Heap is the opposite (root nodoe is smallest, each child is greater priority than parent)
-Every node on a higher level has a greater value than any of node at a lower level
-Used where ordering is important
-Can't do o(1) like with arrays and hash tables
-Its a tree so there are traversals
-Compared to BST its lookup is slower (O(N) vs O(log N)) this is because it is less ordered (the right side is not always the greater one, the only restriction comes from the parent-child relationship) 
-When searching we'd have to check every single node

-Binary heaps are very good for comparative operations you can easily find all values that are less than a specific value for example. with a BST that woould be O(n)
-Used in priority queues and sorting algorithims
-Heaps add value to the tree iin order from left to right then bubbles up to go to correct priority order
-Inserts/Deletes Worst Case: O(log N), best case: O(1)
-Memory Heap != Heap Data Structure

## Operations
Lookup O(n)
Insert O(log N)
Delete O(log N)

-Take up the lowest amount of space possible, always left to right insertion
-No concept of imbalanced Binary Heap, always complete
-Preserve order of insertion
-Can implement them using arrays

## Priority Queues
-Binary heaps are really useful for this
-Type of data structure where each element has a priority
-Elements with higher priorities served before ones with lower priorities

## Pros and Cons

Pros:
-Better than O(n)
-Priority
-Flexible Size
-Fast Insert (most of the time)

Cons:
Slow Lookup (usually you are trying to find max and min which is O(1))

## Trie
-Specialized tree used in searching (most often text)
-in most cases outperforms, binary search trees, hash tables and most other data structures (depending on the type of search)
-let you know if a word or a part of a word exists in a text
-Empty root node (starting point) from there letters are added
-Can have several children
-once you go to a node you can see the options for its child nodes based on the words that appear in the text
-Think of auto complete, dictionaries
-benefit is speed and space
-the Big O for finding a word is O(length of the word)
-We don't have to store letters/prefixes multiple times because each letter is one node so you just need different children for words that start with the same letter this saves alot of space

## Summary
-Small variations in different trees are fairly easy to pick up once you know the basics of trees