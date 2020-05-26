const eqArrays = function (x, y) {
  if (x.length !== y.length) {
    console.log(`👎 Assertion Failed:  ${x} != ${y}`);
    return false;
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      console.log(`👎 Assertion Failed:  ${x} != ${y}`);
      return false;
    }
  }
  console.log(`👍 Assertion Passed: ${x} === ${y}`);
  return true;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
