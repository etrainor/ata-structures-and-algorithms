# Lecture Notes: Merge Sort

At a high level, a merge sort splits an array into it’s smallest pieces and then assembles them again but in the correct order. 

A merge sort uses divide and conquer to recursively sort an array.

A recursive function keeps calling itself from inside  function definition until it reaches a stopping condition.

Divide and conquer breaks a problem into sub problems of  the same or related type until the sub problem becomes simple enough to  be solved directly. The solutions to the sub problems are then combined  to give a solution to the original problem.

Sorting, for the most part, is not time efficient but merge sort is more time efficient than most (which require O(n2) time complexities ie: nested loops).

![image](http://cooervo.github.io/Algorithms-DataStructures-BigONotation/images/graphs/comparison.svg)
[Source](http://cooervo.github.io/Algorithms-DataStructures-BigONotation/big-O-notation.html)

If space is a concern, then merge sorts are not a good choice. In general, these are not merged in place and require a copy of the entire array being sorted O(n). This can  become very space intensive for large data sets.

## Learning Objectives
* What is a merge sort?
* What is recursion?
* Implement a merge sort.

## Lecture Flow

* What is a merge sort?
  * Explain time/space
* Recursion
  * In context of divide and conquer.
  
## Diagram

![Diagram](https://camo.githubusercontent.com/9aca2daaee76cd5334617ea3c01ae6c7c702302d/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f652f65362f4d657267655f736f72745f616c676f726974686d5f6469616772616d2e737667)
[Source](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/merge-sort)

## Algorithm

1. Find the middle point to divide the array into two halves:  
2. Call mergeSort for first half:   
3. Call mergeSort for second half:
4. Merge the two halves sorted in step 2 and 3:

## Pseudocode

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if arr > 1
       DECLARE mid <-- n/2
       DECLARE b <-- arr[0...mid]
        // put the second half in the other array
        DECLARE c <-- arr[mid...n]
        Mergesort(b)
        Mergesort(c)
        Merge(B, c, arr)

ALGORITHM Merge(b, c, a)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < b && j < c
        if b[i] <= c[j]
            a[k] <-- b[i]
            i <-- i + 1
        else
            a[k] = c[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = b.Length
       add remaining of c to a
    else
       add remaining b to a
       
    return a

```

## Readings and References

**Watch**

* [Merge Sort in 3 Minutes](https://www.youtube.com/watch?v=4VqmGXwpLqc)

**Read**

* [Programming with JS: Merge Sort](https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0)
* [Implement Merge Sort in JavaScript](https://initjs.org/merge-sort-in-javascript-4614386c1374)

**Bookmark**

* [Cool Rainbow Visuals](https://imgur.com/gallery/voutF)
* [Watch Different Sort Methods](http://sorting.at/)
