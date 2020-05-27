const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed:  ${actual} !==  ${expected}`);
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

//loop through items of first array
//identify items that match first and second array
//push result to third array

const without = function (x, y) {
  let z = [];
  for (let i = 0; i < x.length; i++) {
    let temp = x[i];
    let flag = false;
    for (let j = 0; j < y.length; j++) {
      if (temp === y[j]) {
        flag = true;
      }
    }
    if (!flag) {
      z.push(temp);
    }
  }
  return z;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
