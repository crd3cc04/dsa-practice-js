const twoSum = require('../../src/arrays/two_sum');

test('finds indices that sum to target', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('returns null when no pair exists', () => {
  expect(twoSum([1, 2, 3], 10)).toBeNull();
});
