'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(10, 2)).toEqual([5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(15, 1)).toEqual([15]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(20, 5)).toEqual([4, 4, 4, 4, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(10, 12)).toEqual([0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
});
