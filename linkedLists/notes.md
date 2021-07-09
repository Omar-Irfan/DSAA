## Linked Lists

-2 types of Linked Lists, singley and doubley

-problem with arrays: 
  -increase memory when they hit a certain limit by doubling up ---> this cost us O(n)
  -arrays had bad performances for operations where you shift indexes like insert/delete

-problem with hashtables:
  -hashtables allow us to store things whereever we want in memory
  -many problems of arrays not there
  -but hashtables are not ordered

  ## What is a Linked List

  - A list that is linked
  -contains set of nodes
    -nodes have two elements: value and pointer to the next node in line
  -first node called head, last node called tail (or sometimes everything except the head)
  -Linked Lists are null terminated, last node points to null

  apples
  8947  ---> grapes
             8742  ---> pears
                        372  ---> null 
  
  Javascript does not come with linked lists so we have to build it

  # Why are linked lists better than hashes or arrays
  
  -Loose structure, reset a few pointers to insert values or deleting them in the middle of the list
  -in arrays shifting down the items when inserting cost us O(n)
  -LinkedList traversal is the same as iteration in arrays
  -called traversal because you dont know when list will end (how long it will be)
  -Array items are stored next to each other where as linked list items are scattered all over memory
  -Traversing all items of linked list while technically O(n) is slower than iterating through array
  -But inserts in linked lists are alot faster than arrays
  -Hashes like linked lits dont have the shift issues but hash tables are un ordered

  -Linked Lists are ordered and insert/deletion is much faster

  ## Operations

  prepend O(1)
  append O(1)
  lookup O(n) - How is this better than Arrays?
  insert O(n) - How is this better than Arrays?
  delete O(n) - How is this better than Arrays?
  
  Will discuss later...

  ## What is a Pointer

  -a reference to another place in memory

  ## Doubley Linked List

  -Up until this point we covered singley linked list
  -Doubley linked lists link to the previous node as well
  -Pointer to the next and previous node
  -Allow backwards traversal
  -Searching becomes more efficient
  -lookup/traversal is technically O(n/2) so would be somewhat faster
  -The downside is it has more data so it takes up more memory

  ## Singely vs Doubely

  Singley:
    Pros:
      -simple implementation
      -requires less memory
      -delete, insert are slightly faster

    Cons:
      -cannot be iterated in reverse
      -if we ever lose the reference to the head the list will be lost in memory forever

    When to use:
      -you have memory limitations
      -need fast insertion and deletion, not much searching esp at begining/end 

  Doubley:
    Pros: 
      -Can traverse backwards

    Cons:
      -Fairly complex to implement
      -uses lots of storage
      -need extra operations to preform to make sure insert/delete works for bakcwards link

    When to use:
      -you need to search backwards and forwards
      -you do not have memory limitations
    
    Will mostly see singely linked lists

    ## Summary

    -Fundamental/low level data structure, used in other data structures like hash tables, stacks, queues
    -Pros: Fast insertion, deletion, ordered, flexible size
    -Cons: slow lookup (no index or key), more memory

    Primary reason to use a linked list:

    Simplicity + ability to grow and shrink as needed 
    
    Used in browser history, file system on computer