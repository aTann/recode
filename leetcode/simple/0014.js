// 14. 最长公共前缀

/**
 * @param {string[]} strs
 * @return {string}
 */

// 横向比较
// 时间：O(mn)，空间：O(1)
var longestCommonPrefix = function (strs) {
  // 取第一个数据作为开始的公共前缀
  let prefix = strs[0];

  for (let index = 1; index < strs.length; index++) {
    const str = strs[index];

    // 当前需要比较的数据以及前缀中最短的进行作为前缀
    let end = Math.min(prefix.length, str.length);

    // 逐步截断前缀数据进行比较
    while (end > 0) {
      // 比较
      if (prefix.slice(0, end) === str.slice(0, end)) {
        prefix = prefix.slice(0, end);
        break;
      }
      end -= 1;
    }

    // 如果前缀数据小于 0 则返回 ""
    if (end === 0) {
      return "";
    }
  }

  // 返回最后的数据
  return prefix;
};

// 纵向比较
// 取一个作为关键字进行逐一字符与整组数据进行比较，一旦出现不相等情况则返回
// 时间：O(mn)，空间：O(1)
var longestCommonPrefix = function (strs) {
  const key = strs.shift();
  let prefix = "";

  for (let ix = 0; ix < key.length; ix++) {
    const char = key[ix];

    for (let idx = 0; idx < strs.length; idx++) {
      const str = strs[idx];
      if (str[ix] !== char) {
        return prefix;
      }
    }

    prefix += char;
  }

  return prefix;
};

// 分治
// 时间复杂度：O(mn)，其中 m 是字符串数组中的字符串的平均长度，n 是字符串的数量。时间复杂度的递推式是 T(n)= 2 * T(n/2) + O(m)，通过计算可得 T(n)=O(mn)。
// 空间复杂度：O(mlogn)，其中 m 是字符串数组中的字符串的平均长度，n 是字符串的数量。空间复杂度主要取决于递归调用的层数，层数最大为 logn，每层需要 m 的空间存储返回结果。

var longestCommonPrefix = function (strs, start = 0, end = strs.length - 1) {
  if (start === end) {
    return strs[start];
  } else {
    // 不断分治
    var mid = parseInt((start + end) / 2, 10);
    var leftLcp = longestCommonPrefix(strs, start, mid);
    var rightLcp = longestCommonPrefix(strs, mid + 1, end);
    return commonPrefix(leftLcp, rightLcp);
  }
};

var commonPrefix = (strA, strB) => {
  var off = Math.min(strA.length, strB.length);

  while (off) {
    if (strA.slice(0, off) === strB.slice(0, off)) {
      return strA.slice(0, off);
    }
    // 往前挪动
    off -= 1;
  }

  return "";
};

// 二分查找
// 时间：O(mnlogn)，空间：O(1)
var longestCommonPrefix = function (strs) {
  let minLen = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < strs.length; i++) {
    minLen = Math.min(minLen, strs[i].length);
  }

  let low = 0,
    high = minLen;

  while (low < high) {
    let mid = parseInt((high - low + 1) / 2, 10) + low;
    if (isCommonPrefix(strs, mid)) {
      low = mid
    } else {
      high = mid - 1
    }
  }

  return strs[0].slice(0, low)
};

const isCommonPrefix = function (strs, len) {
  let flag = strs[0].slice(0, len);

  for (let ix = 0; ix < strs.length; ix++) {
    for (let idx = 0; idx < flag.length; idx++) {
      if (flag[idx] !== strs[ix][idx]) {
        return false;
      }
    }
  }
  return true;
};

var strs = ["dog", "racecar", "car"];

var res = longestCommonPrefix(strs);
console.log(res);

strs = ["flower", "flow", "flight"];

res = longestCommonPrefix(strs);
console.log(res);
