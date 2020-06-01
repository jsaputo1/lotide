const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(green, `👍  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(red, ` ⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
