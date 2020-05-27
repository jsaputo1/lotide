const green = "\x1b[32m%s\x1b[0m";
const red = "\x1b[31m%s\x1b[0m";

const assertArraysEqual = function (x, y) {
  let flag = false;
  if (x.length !== y.length) {
    flag = false;
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] === y[i]) {
      flag = true;
    } else {
      flag = false;
    }
  }
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
