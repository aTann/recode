// 496. 下一个更大元素 I
// https://leetcode-cn.com/problems/next-greater-element-i/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 遍历
// O(m * n)/O(1)
// 64ms/41.7MB
var nextGreaterElement = function (nums1, nums2) {
  let ans = [];

  for (let i = 0; i < nums1.length; i += 1) {
    const n1 = nums1[i];
    let idx = Number.MAX_SAFE_INTEGER;
    let t = -1;

    for (let j = 0; j < nums2.length; j += 1) {
      const n2 = nums2[j];
      if (n1 == n2) {
        idx = j;
      } else if (n1 <= n2 && idx < j) {
        t = n2;
        break;
      }
    }

    ans.push(t);
  }

  return ans;
};

var recordNext = (val, idx, list) => {
  if (val < list[idx + 1]) {
    return list[idx + 1];
  }

  return recordNext(val, idx + 1, list);
};

var nextGreaterElement = function (nums1, nums2) {
  let ans = [];
  let len2 = nums2.length;
  let idxs = Array(nums2.length);
  let max = Number.MIN_SAFE_INTEGER;

  let i = len2 - 1;

  idxs[i] = -1;

  while (i >= 0) {
    let n2 = nums2[i];
    let next = nums2[i + 1];

    if (next && next > n2) {
      idxs[i] = next;
    } else {
      if (n2 > max) {
        idxs[i] = -1;
      } else {
        idxs[i] = recordNext(n2, j, idxs);
      }
      max = Math.max(n2, max);
    }

    i -= 1;
  }
  console.log(idxs);
};

var nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));

var nums1 = [2, 4],
  nums2 = [1, 2, 3, 4];
console.log(nextGreaterElement(nums1, nums2));

/*
nums1 中数字 `x` 的 `下一个更大元素` 是指 x 在 nums2 中对应位置 `右侧` 的 `第一个` 比 `x` 大的元素。

给你两个 `没有重复元素` 的数组 `nums1` 和 `nums2` ，下标从 `0` 开始计数，其中 `nums1` 是 `nums2` 的子集。

对于每个 `0 <= i < nums1.length` ，找出满足 `nums1[i] == nums2[j]` 的下标 `j` ，并且在 `nums2` 确定 `nums2[j]` 的 `下一个更大元素` 。如果不存在下一个更大元素，那么本次查询的答案是 `-1` 。

返回一个长度为 `nums1.length` 的数组 `ans` 作为答案，满足 `ans[i]` 是如上所述的 `下一个更大元素` 。

 

示例 1：

输入：nums1 = [4,1,2], nums2 = [1,3,4,2].
输出：[-1,3,-1]
解释：nums1 中每个值的下一个更大元素如下所述：
- 4 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
- 1 ，用加粗斜体标识，nums2 = [1,3,4,2]。下一个更大元素是 3 。
- 2 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
示例 2：

输入：nums1 = [2,4], nums2 = [1,2,3,4].
输出：[3,-1]
解释：nums1 中每个值的下一个更大元素如下所述：
- 2 ，用加粗斜体标识，nums2 = [1,2,3,4]。下一个更大元素是 3 。
- 4 ，用加粗斜体标识，nums2 = [1,2,3,4]。不存在下一个更大元素，所以答案是 -1 。
 

提示：

1 <= nums1.length <= nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 104
nums1和nums2中所有整数 互不相同
nums1 中的所有整数同样出现在 nums2 中
 

进阶：你可以设计一个时间复杂度为 O(nums1.length + nums2.length) 的解决方案吗？
*/
