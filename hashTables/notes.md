## Introduction
-Many names for this data structure Hash tables, hash mpas, unordered maps, dictionaries, objects
-Objects in JavaScript are Hash Tables
-Hashes in Ruby
-Key:Value pairs, key is used as index to find values -> done using hash function (will discuss later) 

## Hash Function
- function that generates a value of fixed length for each input that it gets
-'hashes a string' given an input the function generates a random pattern such that there is no way from someone to know what the original input was (passwords in databases are usually hashed)
-indempotent: - function given the same input always gives the same output
-allows for really fast dataaccess
-do hash functions slow things down? They potentially can thats why the functions need to be fast - for built in hash assume time complexity of has function to be O(1)

## Operations
-insert O(1)
-lookup O(1) ---> might be O(n) if collision
-delete O(1)
-search O(1)
property name gets hashed and hash is directly linked to value in memory so accessing data is always a one step process

## Collision
-With enough data in limited memory there is a possibility we will encounter collisions

-collisions are multiple key value pairs being assigned to the same slot or bucket in memory, to access different keys in the same bucket linkedlist (another data structure) via seperate chaining is used. This will slow down the reading and writing of a hash table to O(n/k) where k is the size of your hash table ---> becomes O(n)

-in addition to linked lists there are other ways to deal with collision

## Hash tables in different languages

-In JS Objects keys are always stringified but values can be strings, integers, functions etc
-Maps allow users to have any data type as a key
-Maps also maintain insertion orders (Objects do not have an order)
-Sets store keys and not values

## Hash Tables vs Arrays

-Hashes allow quick access to values 
-Inserting is also very fast
-Collision is a rare occurance

-both arrays and hash tables are quick for looking up values

-But hash tables have no concept of order

## Hash table summary

-Hash table to optimize a question is the most common interview question
Pros:
-Fast lookups (good collision resolution needed)
-Fast insert
-Flexible keys
-Improve time complexity(fast access)

Cons:
-Unordered
-Slow key iteration
-UUse more memory (worse space complexity)