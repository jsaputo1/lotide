const green = "\x1b[32m%s\x1b[0m";
const red = "\x1b[31m%s\x1b[0m";
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(green, `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(red, `Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = function (object, callback) {
  let result = [];
  for (let element of Object.keys(object)) {
    if (callback(object[element]) === true) {
      result.push(element);
      return result; //ends at the first value that is 2
    }
  }
};

const result1 = console.log(
  "These are the results:",
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  )
); // => "noma"
