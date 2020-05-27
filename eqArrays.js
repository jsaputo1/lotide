const green = "\x1b[32m%s\x1b[0m";
const red = "\x1b[31m%s\x1b[0m";

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(green, `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(red, `Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
