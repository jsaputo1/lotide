const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns one middle value of an array if it is odd", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns two middle values of an array if it is equal", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns one middle value of an array if it is odd", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns two middle values of an array if it is equal", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});

// middle([1]); // => []
// middle([1, 2]); // => []

// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]

// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

// assertArraysEqual(middle([1]), []); // => [] should PASS
// assertArraysEqual(middle([1, 2]), []); // => [] should PASS

// assertArraysEqual(middle([1, 2, 3]), [2, 3]); // => [2] // => should FAIL
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3, 4]); // => [3] should FAIL
