const searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let median = Math.floor((left + right) / 2);
    if (nums[median] === target) return median;
    target > nums[median] ? (left = median + 1) : (right = median - 1);
  }
  return left;
};

let nums = [1, 3, 4, 5, 6],
  target = 7;
console.log(searchInsert(nums, target));

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.
