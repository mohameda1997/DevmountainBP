const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // check that it returns an array of the same length as the argument sent in
  test('check that it returns an array of the same length as the argument sent in',() => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(shuffle(arr)).toHaveLength(arr.length);
  });

  // check that all the same items are in the array
  test('check that all the same items are in the array', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    let shuffledArr = shuffle(arr);
    expect(shuffledArr.sort()).toEqual(arr.sort());
  });

  // check that the items have been shuffled around
  test('check that the items have been shuffled around', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    let shuffledArr = shuffle(arr);
    expect(shuffledArr).not.toEqual(arr);
  });

});


