# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @jsaputo/lotide`

**Require it:**

`const _ = require('@jsaputo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(array1, array2))`: Compares two arrays and determines if they are equal
- `assertObjectsEqual(object1, object2)`: Compares two objects and determines if they are equal
- `assertEqual(actual, expected)`: Compares two strings and determines if they are equal
- `countLetters(phrase)`: Counts all the letters in a given phrase
- `countOnly(allItems, itemsToCount)`: Counts the number of times a letter is in a given phrase
- `eqArrays(array1, array2)`: Checks the length of 2 arrays and if their values are equal
- `eqObjects(object1, object2)`: Checks the length of 2 objects and if their values are equal
- `findKey(object, callBack)`: Takes in an object and a value. Scans through the object and returns the key when the value is found.
- `findKeyByValue(object, value)`: Takes in an object and a value. Scans through the object and stops after the value is found.
- `head(array)`: Returns the first value in an array
- `tail(array)`: Returns the array without the first value
- `letterPositions(sentence)`: Returns the index where is a letter is found. E.g. "hello".e will return [1]
- `map(array,Callback)`: Takes in an array an a callback, returns a new array based on the callback.
- `middle(array)`: Takes in an array and return the middle values.
- `takeUntil(array, callback)`: Takes in an array and a callback, returns a new array of values until the callback found.
- `without(array, itemsToRemove)`: Takes in an array and removes the value that is specified.
