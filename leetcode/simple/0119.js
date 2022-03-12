// 119. 杨辉三角 II
// https://leetcode-cn.com/problems/pascals-triangle-ii/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */

// O(n)/(O(n))
// 72ms/38.2MB
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }

  if (rowIndex === 1) {
    return [1, 1];
  }

  let v = getRow(rowIndex - 1);

  let p = [1];

  for (let i = 1; i < rowIndex; i++) {
    p[i] = v[i - 1] + v[i];
  }

  p.push(1);

  return p;
};

// 滚动数组
// O(n^2)/O(1)
var getRow = function (rowIndex) {
  let p = [1];

  for (let i = 1; i <= rowIndex; i++) {
    let q = [];
    q[0] = q[i] = 1;

    for (let j = 1; j < i; j++) {
      q[j] = p[j - 1] + p[j];
    }
    // 滚动数组
    p = q;
  }

  return p;
};

// 单数组
// C(i, n) = C(i, n-1) + C(i-1, n-1)
// O(n^2)/O(1)
var getRow = function (rowIndex) {
  let row = Array(rowIndex + 1).fill(0);

  row[0] = 1;

  for (let i = 1; i <= rowIndex; i += 1) {
    for (let j = i; j > 0; j -= 1) {
      row[j] += row[j - 1];
    }
  }

  return row;
};

// 线性递推
// 组合数公式：
//  C(m, n) = n! / (m!(n - m)!)
// 得到 C(m, n) = C(m-1, n) * (n - m + 1) / m
// C(0, 1) = 1
// O(n)/O(1)
var getRow = function (rowIndex) {
  const row = new Array(rowIndex + 1).fill(0);

  row[0] = 1;

  for (let i = 1; i <= rowIndex; i++) {
    row[i] = row[i - 1] * ((rowIndex - i + 1) / i);
  }

  return row;
};

let rowIndex = 0;

console.log(getRow(rowIndex));

rowIndex = 3;
console.log(getRow(rowIndex));

rowIndex = 2;
console.log(getRow(rowIndex));

rowIndex = 1;
console.log(getRow(rowIndex));
