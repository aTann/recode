// 520. 检测大写字母
// https://leetcode-cn.com/problems/detect-capital/
/**
 * @param {string} word
 * @return {boolean}
 */
// 设置头字母、是否全大写标记
// O(n)/O(1)
// 68ms/41.4MB
var detectCapitalUse = function (word) {
  let capitalize = false;
  let isUpper = false;

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (i === 0) {
      if (char.charCodeAt() <= 90) {
        capitalize = true;
      }
    } else if (i === 1) {
      if (capitalize && char.charCodeAt() <= 90) {
        isUpper = true;
      } else if (!capitalize && char.charCodeAt() <= 90) {
        // 首字母非大写，次字母大写
        return false;
      }
    } else if (i > 1) {
      // 第 3 个开始
      // 大写情况下，藏着小写
      // 小写情况下，藏有大写
      if (isUpper ^ (char.charCodeAt() <= 90)) {
        return false;
      }
    }
  }

  return true;
};
// 用前面 2 个字母确定大小写形式
// 首次字母为大写，后面一致
// 首字母为小写，全部小写
// O(n)/O(1)
// 64ms/41.2MB
var detectCapitalUse = function (word) {
  if (word.length > 1) {
    const lower = word[0].charCodeAt() > 90 || word[1].charCodeAt() > 90;
    for (let i = 1; i < word.length; i++) {
      const char = word[i];
      if (lower) {
        if (char.charCodeAt() <= 90) {
          return false;
        }
      } else {
        if (char.charCodeAt() > 90) {
          return false;
        }
      }
    }
  }

  return true;
};

// 正确写法：
// 1. 全部字母都是大写，比如 "USA" 。 // 大写处理后值不变
// 2. 单词中所有字母都不是大写，比如 "leetcode" 。 // 小写化后值不变
// 3. 如果单词不只含有一个字母，只有首字母大写， 比如 "Google" 。 // 第 2 个之后，小写化后值不变
// 1）大写处理后值不变，2）第 2 个之后，小写化后值不变
// O(1)/O(1)
// 60ms/41.2MB
var detectCapitalUse = function (word) {
  return (
    word.toUpperCase() === word || word.slice(1).toLowerCase() === word.slice(1)
  );
};

// var word = "USA";
// console.log(detectCapitalUse(word));

// var word = "FlaG";
// console.log(detectCapitalUse(word));

var word = "Leetcode";
console.log(detectCapitalUse(word));
