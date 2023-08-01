// functions.test.js

// Require the functions.js file
const functions = require('./functions');

// Test for returnTwo function
test('returnTwo should return 2', () => {
  expect(functions.returnTwo()).toBe(2);
});

// Test for greeting function
test('greeting should return "Hello, James."', () => {
  expect(functions.greeting('James')).toBe('Hello, James.');
});

test('greeting should return "Hello, Jill."', () => {
  expect(functions.greeting('Jill')).toBe('Hello, Jill.');
});

// Test for add function
test('add(1, 2) should return 3', () => {
  expect(functions.add(1, 2)).toBe(3);
});

test('add(5, 9) should return 14', () => {
  expect(functions.add(5, 9)).toBe(14);
});
