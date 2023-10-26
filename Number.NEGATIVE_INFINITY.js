// Number.NEGATIVE_INFINITY

/*
In JavaScript, Number.NEGATIVE_INFINITY is a special constant value that represents the most negative number that can be represented with the Number data type. It's a way to express a value that is infinitely small and negative.

* It's the Smallest Number: Number.NEGATIVE_INFINITY is used to represent a number that is smaller (more negative) than any other number, whether positive or negative.

* Comparison: When you compare Number.NEGATIVE_INFINITY to any other number, even negative numbers, it will always be considered smaller. For example, -1000 < Number.NEGATIVE_INFINITY is false.

* Use Case: It's often used in programming when you need to initialize a variable to a value that is guaranteed to be smaller than any valid data point you might encounter.
*/

const x = Number.NEGATIVE_INFINITY;

console.log(x < 0); // true, because x is smaller than 0
console.log(x > 0); // false, because x is not greater than 0
console.log(x < -1000); // true, because x is smaller than -1000
console.log(x > -1000); // false, because x is not greater than -1000

//Use Case: Finding the Minimum Value in an Array

const numbers = [5, -2, 10, -8, 3];

const findMaxValue = arr => {
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(findMaxValue(numbers));

/* 
1. Initialize max value to - infinity
2. First iteration compares (5 > - infinity) ? True : max = 5
3. Second iteration compares (-2 > 5) ? False
4. Third iteration compares ( 10 > 5) ? True : max = 10
etc...
*/
