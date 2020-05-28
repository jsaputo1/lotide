const green = "\x1b[32m%s\x1b[0m";
const red = "\x1b[31m%s\x1b[0m";

const eqObjects = function (object1, object2) {
  const firstObject = Object.keys(object1);
  const secondObject = Object.keys(object2);
  if (firstObject.length != secondObject.length) {
    return false;
  }
  for (let value of firstObject) {
    if (firstObject[value] !== secondObject[value]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(
      green,
      `Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      red,
      `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" }); // Should Pass
assertObjectsEqual({ a: "1", b: 2 }, { b: 3, a: "5" }); // Should Fail
