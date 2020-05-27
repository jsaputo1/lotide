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

assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]), false; // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), false; // => false
