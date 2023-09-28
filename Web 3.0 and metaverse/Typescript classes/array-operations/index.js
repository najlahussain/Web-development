"use strict";
let array = [1, 2, 3];
let result = 0;
//stack push, returns the length of the new array
result = array.push(4);
console.log(`Pushed 4 in array: ${array} and new length of array is: ${result}`);
result = array.pop(); //stack pop
console.log(`Popped an element ${result} from array: ${array}`);
result = array.shift(); //dequeue
console.log(`shifted/dequeued an element ${result} from array: ${array}`);
// used to add one or more elements to the beginning of an array and returns the new length of the array.
result = array.unshift(0);
console.log(`Unshifted single element in array: ${array} and new length of array is: ${result}`);
result = array.unshift(0, 1, 2, 3, 4);
console.log(`Unshifted multiple elements in array: ${array} and new length of array is: ${result}`);
// used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array
let array1 = array.concat(9);
console.log(`Concatenated single element in array: ${array} and new array is: ${array1}`);
let array2 = [11, 22, 33];
array1 = array.concat(array2);
console.log(`Concatenated array2 in array: ${array} and new array is: ${array1}`);
let x = array.join('-');
console.log(`Join  array: ${array} and new array is: ${x}`);
let y = array.slice(5, 8);
console.log(`After slicing array: ${array} and returned array is: ${y}`);
result = array.indexOf(2);
console.log(`Index of 2 is: ${result}`);
result = array.indexOf(2, 3);
console.log(`Index of second 2 is: ${result}`);
let z = array.includes(33);
console.log(`Element found: ${z}`);
//finds the first element that satisfies the given condition
result = array.find((n) => n % 2 === 0);
console.log(`First even element is: ${result}`);
result = array.findIndex((n) => n % 2 === 0);
console.log(`Index of first even element is is: ${result}`);
//returns a boolean array regarding result of condition
let z1 = array.map((n) => n % 2 === 0);
console.log(`Result of map function is: ${z1} and array is: ${array}`);
//here map will return number array
y = array.map((n) => n = n % 2);
console.log(`Result of map function is: ${y} and array is: ${array}`);
//returns elements of array that satisfy the function
y = array.filter((n) => n % 2 === 0);
console.log(`Result of filter function is: ${y}`);
result = array.reduce((total, n) => n + total);
console.log(`Result of reduce function is: ${result}`);
z = array.every((n) => n < 4);
console.log(`Result of every function is: ${z}`);
z = array.some((n) => n < 4);
console.log(`Result of some function is: ${z}`);
y = array.reverse();
console.log(`Result of reverse function is: ${y} and array is: ${array}`);
result = array.at(-2); //counts from the end starting at 1
console.log(`Result of some function is: ${result}`);
result = array.at(2); //counts from the end starting at 1
console.log(`Result of some function is: ${result}`);
