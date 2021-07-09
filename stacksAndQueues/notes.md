## Introduction
-Both very similar
-Linear data structures, allow us too traverse data elements one by one where only one data element can be reached
-Very similar implementation
-Only real difference is in how items are removed
-No random access operation like index
-Use stacks and queues to run commands like push, peak, pop all of which only deal with the element at the begining or the end of the data structure

-Why do we need these when you can do all of this AND MORE with arrays or linked lists?
-its good to have these higher level Data Structures where you can do fewer operations this is actually a benefit
-You can make sure users dont misuse the data structure when it is limited in functionality

## Stacks

-Stacks are like plates, one piece of data gets stacked on another piece of data. like plates stacked on each other vertically
-You can only access the top plate at a time, you cannoot access a plate from the middle or the bottom
-This is called LIFO - Last In First Out
-Useful when you need to see the very last value added
-Very important in language specific engines
-Most programming languages are modeled with stack architecture in mind
-Functions called follow the LIFO principle (inner function called before outer function)
-Browser history, undo options are more examples of stacks

  ## Operations
    lookup O(n)
    pop O(1) -remove last item
    push O(1) -add to top/end
    peek O(1) -view top/last item

## Queues 

-Queues are like enterence to a ride, first come first serve basis
-FIFO - First In First Out, first item in the queue is the first accessible data element
-examples Waitlist, Resturant Tables, Uber, Lyft, Printer

  ## Operations
    lookup O(n)
    enqueue O(1) - like push but for first item
    dequeue O(1) - like pop but for first item
    peek O(1) - same as peek in stack but for first item

creating queues and stacks would be very inefficient

## Should stacks be built with arrays or LinkedLists?

  Both are good for stacks

  Arrays allow cached locality allows you to access data faster since they are right next to each other in memory unlike linked lists

  Linked lists have extra memory associated with them but they also have dynamic memory (no doubling up)

  So it depends on what your priorities are with the Stack

## Should queues be built with arrays or LinkedLists?

  You would never want to build a queue with an array
  
  -Arrays have indexes
  -When you remove an element you have to shift indexes O(n)
  -Where as with linkedlists we have a pointer for head/tail O(1)