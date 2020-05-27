const green = "\x1b[32m%s\x1b[0m";
const red = "\x1b[31m%s\x1b[0m";

const eqArrays = function (x, y) {
  if (x.length !== y.length) {
    return false;
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (x, y) {
  let flag = eqArrays(x, y);
  if (flag === true) {
    console.log(green, `Assertion Passed: ${x} === ${y}`);
  } else {
    console.log(red, `Assertion Failed: ${x} !== ${y}`);
  }
};

const middle = function (array) {
  let newArray = [];
  if (array.length <= 2) {
    console.log(newArray);
    return newArray;
  }
  if (array.length % 2 === 0) {
    newArray.push(array[array.length / 2 - 1]);
    newArray.push(array[array.length / 2]);
  } else if (array.length % 2 === 1) {
    newArray.push(array[Math.floor(array.length / 2)]);
  }
  console.log(newArray);
  return newArray;
};

middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArraysEqual(middle([1]), []); // => [] should PASS
assertArraysEqual(middle([1, 2]), []); // => [] should PASS

assertArraysEqual(middle([1, 2, 3]), [2, 3]); // => [2] // => should FAIL
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3, 4]); // => [3] should FAIL
