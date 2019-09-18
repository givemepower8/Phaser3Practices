# Algorithms road map

## API

<https://devdocs.io/javascript-array/>

## Random

Get the random number.

```js
Math.floor(Math.random() * 10); // returns a random integer from 0 to 9
Math.floor(Math.random() * 11); // returns a random integer from 0 to 10
Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10

// returns a random number between min (included) and max (excluded):
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// returns a random number between min and max (both included):
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

## Array problems

[Array Data Structure](https://www.geeksforgeeks.org/array-data-structure/)

<https://yangshun.github.io/tech-interview-handbook/algorithms/array/>

[Python arrays](https://knaidu.gitbooks.io/problem-solving/arrays/)

### Search

Find the max value inside the array, input an array of integers, output is the index of first max value. i.e., for an array [7,4,3,9,1,8,0,2,5,6], should return 4 as a[4]=9

solution: iteration

Find the min value inside the array, input an array of integers, output is the index of first min value. i.e., for an array [7,4,3,9,1,8,0,2,5,6], should return 6 as a[6]=0

solution: iteration

Find the k-th large value in the array

solution: sort the array, or use the dutch flag

Find the k-th small value in the array

solution: sort the array

### pivot

The pivot is an important idea of an array. Pivot separates the array into two part, left and right. Quick sort or partitioning is based on the pivot.

For example, array starts from 0 to size -1, there could be many sub arrays from m to n, you can notate it using m and n , `m>=0` and `n <= size-1`, `m <= n`, the p is the index of pivot, `m < p < n`.

### inline operations

Reverse an array, input: [1,2,3,4], output: [4,3,2,1]

Left shift an array, input: [1,2,3,4], output: [2,3,4,1]

Right shift an array, input: [1,2,3,4], output: [4,1,2,3]

Partition an array, aka, [Dutch national flag problem](https://en.wikipedia.org/wiki/Dutch_national_flag_problem)

Reshuffle an array

### new instance operations

Often the case, we don't want to mutate the original array. We can create an new array and copy values.

Get a segment of the original array.

Return a random sample of the array.

Array permutation

Time: O(n \* n!), due to n! permutations.

Array combination

Time: O(n!/(r!\*(n-r)!)).

Array union find

## Sorting

[Sorting algorithm](https://en.wikipedia.org/wiki/Sorting_algorithm)

For typical serial sorting algorithms good behavior is O(n log n), with parallel sort in O(log2 n), and bad behavior is O(n2).

### Nested array

Flatten an array

- matrix

- list

- dictionary / key value pair

## Resources

<https://www.w3schools.com/js/default.asp>

<https://coderbyte.com/challenges?a=true>
