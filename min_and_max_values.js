"use strict";

/* 
Finding the Min and Max Values of this array.
*/

const numbers = [5, -2, 10, -8, 3];

const min_max_value = arr => {
  let min = Number.POSITIVE_INFINITY; // infinity
  let max = Number.NEGATIVE_INFINITY; // - infinity

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
};

const [minValue, maxValue] = min_max_value(numbers);
console.log("Minimum value:", minValue);
console.log("Maximum value:", maxValue);

/* 
In JavaScript, when you use destructuring assignment like `const [minValue, maxValue] = min_max_value(numbers)`, the values are assigned based on their position in the returned array.

In your `min_max_value` function, you are returning an array `[min, max]`, where the first element is `min` and the second element is `max`. When you use destructuring assignment as shown above, JavaScript matches the positions of the variables on the left side (`minValue` and `maxValue`) with the positions of the values in the array on the right side (`min` and `max`). 

So, the value at the first position in the returned array (`min`) is assigned to the variable `minValue`, and the value at the second position in the returned array (`max`) is assigned to the variable `maxValue`. The order of assignment is determined by the order of variables on the left side of the assignment.

This behavior allows you to easily extract values from an array and assign them to specific variables in a single line of code.
*/
