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

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]); // => true
