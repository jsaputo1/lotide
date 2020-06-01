const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns one middle value of an array if it is odd", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns two middle values of an array if it is equal", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});
