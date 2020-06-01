const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = function (array) {
  let newArray = [];
  if (array.length <= 2) {
    console.log(newArray);
    return newArray;
  }
  if (array.length % 2 === 0) {
    newArray.push(array[array.length / 2 - 1]);
    newArray.push(array[array.length / 2]);
  } else if (array.length % 2 === 1) {
    newArray.push(array[Math.floor(array.length / 2)]);
  }
  console.log(newArray);
  return newArray;
};

module.exports = middle;
