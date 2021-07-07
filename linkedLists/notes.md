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