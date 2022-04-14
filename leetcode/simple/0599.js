// 599. 两个列表的最小索引总和
// https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
// HashMap
// O(m+n)/O(m)
// 76ms/45.7MB
var findRestaurant = function (list1, list2) {
  const map = new Map();
  let min = Number.MAX_SAFE_INTEGER;
  let ans = [];

  list1.forEach((item, idx) => {
    map.set(item, idx);
  });

  list2.forEach((item, idx) => {
    if (map.has(item)) {
      
      if (map.get(item) + idx === min) {
        ans.push(item);
      }
      
      // min 会有变化，需要放在后面
      if (map.get(item) + idx < min) {
        min = map.get(item) + idx;
        ans = [item];
      }
    }
  });

  return ans;
};

var list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  list2 = [
    "Piatti",
    "The Grill at Torrey Pines",
    "Hungry Hunter Steakhouse",
    "Shogun",
  ];
console.log(findRestaurant(list1, list2));

var list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
  list2 = ["KFC", "Shogun", "Burger King"];
console.log(findRestaurant(list1, list2));
