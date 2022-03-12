// 167. 两数之和 II - 输入有序数组
// https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 双指针
// O(n)/O(1)
// 60ms/37.9MB
var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    if (numbers[start] + numbers[end] > target) {
      end -= 1;
    } else if (numbers[start] + numbers[end] < target) {
      start += 1;
    } else {
      return [start + 1, end + 1];
    }
  }
};

// 哈希表法
// O(n)/O(n)
// 56ms/38.5MB
var twoSum = function (numbers, target) {
  var map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const cur = numbers[i];
    if (map.get(cur) != null) {
      return [map.get(cur) + 1, i + 1];
    }
    map.set(target - cur, i);
  }
};

var numbers = null,
  target;

numbers = [2, 7, 11, 15];
target = 9;

console.log(twoSum(numbers, target));

numbers = [2, 3, 4];
target = 6;

console.log(twoSum(numbers, target));

numbers = [-1, 0];
target = -1;

console.log(twoSum(numbers, target));
