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