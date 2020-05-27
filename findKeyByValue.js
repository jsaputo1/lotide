const green = "\x1b[32m%s\x1b[0m";
const red = "\x1b[31m%s\x1b[0m";
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(green, `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(red, `Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const findKeyByValue = function (object, value) {
  console.log(Object.keys(object));
  for (item of Object.keys(object)) {
    if (object[item] === value) {
      console.log(item);
      return item;
    }
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
