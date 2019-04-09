# FizzBuzz Tree
Conduct “FizzBuzz” on a tree while traversing through it. Change the values of each of the nodes dependent on the current node’s value

## Challenge
* Write a function called FizzBuzzTree which takes a tree as an argument.
* Without utilizing any of the built-in methods available to your language, determine weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes:
* If the value is divisible by 3, replace the value with “Fizz”
* If the value is divisible by 5, replace the value with “Buzz”
* If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
* Return the tree with its new values.

## Approach & Efficiency
Traversed through the tree in order and performed operations on the nodes whose values matched the described parameters. Time is O(n) because we have to traverse all nodes. Space is O(h) due to the recursion to traverse the tree.

## Solution
![White Board Image](../../../assets/fizz-buzz-tree.jpg)
