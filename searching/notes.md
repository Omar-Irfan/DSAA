## Introduction
-We use searching all the time, google, youtube, files on computer

## Types
-Linear Search
-Binary Search
-Depth First Search
-Breadth First Search

## Linear Search
-also called sequential search
-method of finding target value within data
-using loops
-Used this many times
-several built in javascript functions
-worst case you go through the entire list O(n)
-What if the data was sorted?

## Binary Search
1, 4, 6, 9, 12, 34, 45
-since list is soorted we can discard half the items at a time.
-go to middle index
-is 9 higher or lower than 34? loower so we can discard everythiing under it
-9,12,34,45
-Find middle again (no middle so just go to 12)
-12 iis lower so everything under it is gon
12, 34, 45
-middle index is 34 which is your answer
-Used in binary search trees
          9
      4      34
    1  6    12 45
-Time complexity O(log n)
-We already covered this in Binary Search Trees

## Traversal
-Going from node to node touching every node
-often used interchangably with search
-BSTs - we knew what we were looking for and we knew if we want to go left or right
-But in some cases we have to touch every single node - O(n)

Two options both are O(n)

-Breadth First Search (BFS)
-Depth First Search (BFS)

-We dont put complex data in lists so we can get O(log n)
-Thats why we use trees and graphs

## Breadth First Search/Traversal
- Start with root node, move left and right through the second level then move again like that for every subsequent level until you find the node you want or the tree ends
-uses additional memory because it is necessary to track the child nodes of all the nodes on a given level while searchiing that level - every node and its children in order

## Depth First Search/Traversal
-Follows one branch of the tree down as many levels as possible, then continues with the nearest ancestor with an unexplored child until node is found or list ends
-has lower memory because than BFS because its not neccessary to store all the child pointers at each level

        9
    4       20
  1   6   15  170

  BFS 9 > 4 > 20 > 1 > 6 > 15 > 170
  DFS 9 > 4 > 1 > 6 > 20 > 15 > 170 

  ## BFS vs DFS

  BFS - is like waterflooding from the top
  DFS - painting a wall vertically

  Each one is used for different reasons

  Time Complexity for both --- O(n)

  ## BFS 
  
  Pros:

  -good for finding Shortest Path btween root and node
  -Closer Nodes first

  Cons:

  -Uses more memory

  Rule of Thumb:

  If you know node is likely in upper levels of tree BFS is better

  ## DFS

  Pros:

  -Uses less memory
  -Answers the question "does the path exist from source node to target node"

  Cons:

  -Can get slow if tree is really deep
 
  Rule of Thumb:

  if you know it is in the lower levels of the tree DFS might be better

  ## Examples

//If you know a solution is not far from the root of the tree:
BFS

//If the tree is very deep and solutions are rare, 
BFS (DFS will take long time. )

//If the tree is very wide:
DFS (BFS will need too much memory)

//If solutions are frequent but located deep in the tree
DFS

//determining whether a path exists between two nodes
DFS

//Finding the shortest path
BFS

## Three methods of DFS
Inorder, - all nodes left to right
Preorder, - start with parent and grab child nodes left to rigth
Postorder - left hand side, chiildren before parent then right hand side then children before parent then root

     9
  4     20
1   6 15  170

  inorder - 1, 4, 6, 9, 15, 20, 170 -prints in order from left too right of BTS
  preorder - 9, 4, 1, 6, 20, 15, 170 -useful for recreating tree
  postorder - 1, 6, 4, 15, 170, 20, 9 - 