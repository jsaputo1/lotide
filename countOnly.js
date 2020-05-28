const green = "\x1b[32m%s\x1b[0m";
const red = "\x1b[31m%s\x1b[0m";
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(green, `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(red, `Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    console.log(item);
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
