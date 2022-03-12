// 202. 快乐数
// https://leetcode-cn.com/problems/happy-number/
/**
 * @param {number} n
 * @return {boolean}
 */

// 遍历，利用循环的特点跳出循环
// O(n)/O(n)
// 76ms/39.7MB
var isHappy = function (n) {
  let loop = [];
  while (n) {
    n = [...n.toString()].reduce((a, i) => a + parseInt(i, 10) ** 2, 0);

    if (n === 1) return true;
    if (!loop.includes(n)) {
      loop.push(n);
    } else {
      return false;
    }
  }
  return false;
};

// 题解
// 利用 HashMap 监测循环
// O(logn)/O(logn)
// 92ms/39.8MB
var isHappy = function (n) {
  var getNext = (v) => {
    let t = 0;
    while (v) {
      let u = v % 10;
      v = parseInt(v / 10);
      t += u ** 2;
    }

    return t;
  };

  let seen = new Map();
  while (n != 1 && !seen.get(n)) {
    seen.set(n, n);
    n = getNext(n);
  }

  return n === 1;
};

// 利用快慢指针
// O(logn)/O(1)
// 76ms/39.8MB
var isHappy = function (n) {
  var getNext = (v) => {
    let t = 0;
    while (v) {
      let u = v % 10;
      v = parseInt(v / 10);
      t += u ** 2;
    }

    return t;
  };

  let slow = n;
  let fast = getNext(n);
  while (fast != 1 && fast !== slow) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }

  return fast === 1;
};

// 利用数学规律
// O(logn)/O(1)
// 76ms/39.4MB
var isHappy = function (n) {
  let cycle = [4, 16, 37, 58, 89, 145, 42, 20];

  var getNext = (v) => {
    let t = 0;
    while (v) {
      let u = v % 10;
      v = parseInt(v / 10);
      t += u ** 2;
    }

    return t;
  };

  while (n != 1 && !cycle.includes(n)) {
    n = getNext(n);
  }

  return n === 1;
};

let n = 19;
console.log(isHappy(n));

n = 2;
console.log(isHappy(n));
