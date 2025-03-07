// 1. Create an array with five fruit names and print the second element.
let fruits = ["Apple", "Banana", "Cherry", "Grapes", "Orange"];
console.log(fruits[1]); 

// 2. Replace the third element of an array with "Mango" and print the updated array.
fruits[2] = "Mango";
console.log(fruits); 

// 3. Create an empty array and add three colors to it using push(). Print the array.
let colors = [];
colors.push("Red", "Green", "Blue");
console.log(colors); 

// 4. Remove the last element of an array using pop() and print the removed element.
let removedColor = colors.pop();
console.log(removedColor); 

// 5. Add two numbers at the beginning of an array using unshift() and print the array.
let numbers = [3, 4, 5];
numbers.unshift(1, 2);
console.log(numbers); 

// 6. Remove the first element of an array using shift() and print the updated array.
numbers.shift();
console.log(numbers); 

// 7. Print the length of an array containing four elements.
let arr = [10, 20, 30, 40];
console.log(arr.length); 

// 8. Extract the last two elements from an array using slice() and print them.
let lastTwo = arr.slice(-2);
console.log(lastTwo); 

// 9. Extract the middle element(s) of an array with an even number of elements using slice().
let evenArr = [1, 2, 3, 4, 5, 6];
let middleElements = evenArr.slice(evenArr.length / 2 - 1, evenArr.length / 2 + 1);
console.log(middleElements); 

// 10. Replace two middle elements in an array using splice() and print the updated array.
evenArr.splice(evenArr.length / 2 - 1, 2, "X", "Y");
console.log(evenArr); 

// 11. Create an array of three cities and add a new city at the end using push().
let cities = ["New York", "London", "Tokyo"];
cities.push("Paris");
console.log(cities);

// 12. Remove the last city from an array using pop() and print the updated array.
cities.pop();
console.log(cities); 

// 13. Add two new colors to the beginning of an array using unshift() and print the array.
colors = ["Red", "Blue"]; 
colors.unshift("Yellow", "Green");
console.log(colors);


// 14. Remove the first color from an array using shift() and print the removed color.
 removedColor = colors.shift();
console.log(removedColor); 

// 15. Use push() twice to add two new names to an array and print the array.
let names = ["Alice"];
names.push("Bob");
names.push("Charlie");
console.log(names); 

// 16. Use pop() on an array of five elements and check if the length is now four.
 nums = [10, 20, 30, 40, 50];
nums.pop();
console.log(nums.length === 4); 

// 17. Use shift() on an array with three elements and print the updated array.
let animals = ["Dog", "Cat", "Rabbit"];
animals.shift();
console.log(animals); 

// 18. Use unshift() to add a new number at the beginning of an array and print it.
 numbers = [5, 10, 15];
numbers.unshift(2);
console.log(numbers); 

// 19. Create an array of three numbers, remove the last one using pop(), and print the remaining array.
let threeNums = [1, 2, 3];
threeNums.pop();
console.log(threeNums); 

// 20. Create an array with three elements, remove the first using shift(), and print the updated array.
let elements = ["A", "B", "C"];
elements.shift();
console.log(elements); 

// 21. Extract the first three elements from an array using slice() and print them.
 arr1 = [10, 20, 30, 40, 50];
let firstThree = arr1.slice(0, 3);
console.log(firstThree); 

// 22. Extract elements from index 2 to 4 using slice() and print them.
let extracted = arr1.slice(2, 5);
console.log(extracted); 

// 23. Remove two elements from an array starting from index 1 using splice().
 arr2 = [1, 2, 3, 4, 5];
arr2.splice(1, 2);
console.log(arr2); 

// 24. Insert "Lemon" and "Orange" at index 2 in an array using splice() and print the updated array.
fruits = ["Apple", "Banana", "Cherry", "Grapes"];
fruits.splice(2, 0, "Lemon", "Orange");
console.log(fruits); 

// 25. Remove the last two elements using splice() and print the modified array.
fruits.splice(-2, 2);
console.log(fruits); 

// 26. Use splice() to add three new numbers at the beginning of an array and print the array.
 numbers = [10, 20, 30];
numbers.splice(0, 0, 1, 2, 3);
console.log(numbers); 

// 27. Create an array with six elements, extract the last four using slice(), and print them.
 sixElements = [5, 10, 15, 20, 25, 30];
lastFour = sixElements.slice(-4);
console.log(lastFour); 

// 28. Use slice() on an array and check if the original array remains unchanged.
 originalArray = [100, 200, 300, 400];
 slicedArray = originalArray.slice(1, 3);
console.log(originalArray); 
console.log(slicedArray); 

// 29. Use splice() to remove one element from the middle of an array and print the updated array.
 midArr = [1, 2, 3, 4, 5];
midArr.splice(Math.floor(midArr.length / 2), 1);
console.log(midArr); 

// 30. Use splice() to replace two elements in an array and print the modified array.
 replaceArr = [10, 20, 30, 40, 50];
replaceArr.splice(1, 2, 99, 88);
console.log(replaceArr); 

// 31. Assign an array to another variable and modify the original array. Print both variables.
 arr1 = [1, 2, 3];
 arr2 = arr1;
arr1.push(4);
console.log(arr1); 
console.log(arr2); 

// 32. Create a function that adds an element to an array and check if the original array changes.
function addElement(arr, element) {
  arr.push(element);
}
 numbers = [10, 20, 30];
addElement(numbers, 40);
console.log(numbers); 

// 33. Pass an array to a function, modify its first element, and print the modified array.
function modifyFirst(arr) {
  arr[0] = 99;
}
nums = [5, 10, 15];
modifyFirst(nums);
console.log(nums); 

// 34. Create an array, pass it to another variable, modify the second variable, and print both.
 arrA = ["apple", "banana", "cherry"];
 arrB = arrA;
arrB[1] = "grape";
console.log(arrA); 
console.log(arrB); 

// 35. Check if two variables referencing the same array are equal after modifying one.
 arrX = [1, 2, 3];
 arrY = arrX;
arrY.push(4);
console.log(arrX === arrY); 

// 36. Create an array, pass it to a function that removes an element, and print the result.
function removeElement(arr) {
  arr.pop();
}
 myArr = ["red", "green", "blue"];
removeElement(myArr);
console.log(myArr); 

// 37. Store an array in two different variables, modify one using push(), and print both.
 fruits1 = ["mango", "orange"];
 fruits2 = fruits1;
fruits1.push("grape");
console.log(fruits1); 
console.log(fruits2); 

// 38. Use pop() on an array inside a function and see if the original array changes.
function removeLast(arr) {
  arr.pop();
}
 colors = ["red", "yellow", "blue"];
removeLast(colors);
console.log(colors); 

// 39. Pass an array to a function that changes its length and check the effect.
function shortenArray(arr, newLength) {
  arr.length = newLength;
}
 numbersArr = [1, 2, 3, 4, 5];
shortenArray(numbersArr, 3);
console.log(numbersArr);

// 40. Create two separate arrays with identical elements and check if they are strictly equal.
 arrayOne = [1, 2, 3];
 arrayTwo = [1, 2, 3];
console.log(arrayOne === arrayTwo); 
