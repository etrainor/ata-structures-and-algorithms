# Merge two Linked Lists
Perform a zipper merge on two linked lists.

[PR]()

## Challenge
Write a function called mergeLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency
We decided to modify the linked lists in place rather than make a copy in order to improve the space/time efficiency.

## Solution
![Whiteboard Image](../assets/ll_merge.jpg)