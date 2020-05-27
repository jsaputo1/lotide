const green = "\x1b[32m%s\x1b[0m";
const red = "\x1b[31m%s\x1b[0m";
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(green, `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(red, `Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (letters) {
  let newObject = {};
  let string = letters.split(" ").join("");
  //split takes the string and turns it into array. We use " " as the delimiter here. Console log will show ([Lighthouse, Labs])
  //Join takes the array and turns it back into a string
  for (let letter of string) {
    if (newObject[letter]) {
      newObject[letter]++;
    } else {
      newObject[letter] = 1;
    }
  }
  return newObject;
};

const test = countLetters("Lighthouse Labs");
assertEqual(test["L"], 2);
assertEqual(test["L"], 3);
