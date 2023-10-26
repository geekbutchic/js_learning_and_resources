/*
Initializing with Number.POSITIVE_INFINITY:

Useful when you want to find the minimum value in an array of numbers, and you're not sure if there are any negative numbers in the array.
Guarantees that min will be less than or equal to any value in the array, including negative numbers. This makes it a safe choice when you're not sure about the data in the array.
*/

const numbers = [5, -2, 10, -8, 3];

const findMinValue = arr => {
  let min = Number.POSITIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const minValue = findMinValue(numbers);
console.log("Minimum value:", minValue); // Outputs: Minimum value: -8

/* 
1. We define an arrow function findMin that takes an array arr as its parameter.
2. Inside the function, we initialize min to Number.POSITIVE_INFINITY just like in the original code.
3. We then iterate through the elements of the input array arr using a for loop and update the min value whenever we find a smaller element.
4. Finally, we return the min value from the function.
*/


/* 
Code breakdown: first iteration will compare if (5 < infinity) ? True (min = 5 now)
second iteration (5 < -2) ? False : min remains 5
third iteration (-2 < 5) ? True : min becomes -2
and so on...
*/

//Using Number.POSITIVE_INFINITY is generally safer because it handles a broader range of scenarios, including empty arrays and arrays with negative numbers.