// 506. 相对名次
// https://leetcode-cn.com/problems/relative-ranks/
/**
 * @param {number[]} score
 * @return {string[]}
 */
// 先排序，再进行名次标记
// HashMap
// O(nlogn)/(n)
// 72/44.4MB
var findRelativeRanks = function (score) {
  let sorted = [...score].sort((p, n) => n - p);
  const map = new Map();

  const txt = ["Gold Medal", "Silver Medal", "Bronze Medal"];

  for (let i = 0; i < sorted.length; i += 1) {
    const t = txt[i];
    map.set(sorted[i], txt[i] || "" + (i + 1));
  }

  for (let i = 0; i < score.length; i += 1) {
    score[i] = map.get(score[i]);
  }

  return score;
};

// 题解，将值和序号一起进行排序
// O(nlogn)/O(n)
// 72ms/44.8MB
var findRelativeRanks = function (score) {
  let len = score.length;
  let list = Array(len);

  const txt = ["Gold Medal", "Silver Medal", "Bronze Medal"];

  for (let i = 0; i < len; i += 1) {
    list[i] = Array(2);

    list[i][0] = score[i];
    list[i][1] = i;
  }

  list.sort((p, n) => n[0] - p[0]);

  for (let i = 0; i < list.length; i++) {
    const [v, x] = list[i];
    score[x] = txt[i] || "" + (i + 1);
  }

  return score;
};

var score = [5, 4, 3, 2, 1];
console.log(findRelativeRanks(score));

var score = [10, 3, 8, 9, 4];
console.log(findRelativeRanks(score));
