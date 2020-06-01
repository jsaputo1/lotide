const eqArrays = require("./eqArrays");

const assertArraysEqual = function (x, y) {
  let flag = eqArrays(x, y);
  if (flag === true) {
    console.log(`👍 Assertion Passed: ${x} === ${y}`);
  } else {
    console.log(` ⛔ Assertion Failed: ${x} !== ${y}`);
  }
};

module.exports = assertArraysEqual;
