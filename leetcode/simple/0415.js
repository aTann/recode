// 415. 字符串相加
// https://leetcode-cn.com/problems/add-strings/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 模拟，补 0 到同样长度，设置进位然后逐位相加
// O(max(m,n))/O(1)
// 68ms/43.9MB
var addStrings = function (num1, num2) {
  let len = Math.max(num1.length, num2.length);
  num1 = num1.padStart(len, "0");
  num2 = num2.padStart(len, "0");
  let carry = 0;
  let i = len - 1;
  let ans = "";

  while (i >= 0) {
    let k = Number(num1[i]) + Number(num2[i]) + carry;
    ans = (k % 10) + ans;
    carry = parseInt(k / 10);
    i -= 1;
  }

  if (carry) {
    ans = carry + ans;
  }

  return ans;
};

// 先处理成数组，然后 pop 从尾端取出
// O(max(m,n))/O(m+n)
// 64ms/43.9MB
var addStrings = function (num1, num2) {
  const n1 = num1.split("");
  const n2 = num2.split("");

  let carry = 0;
  let ans = "";

  while (1) {
    if (!n1.length && !n2.length) {
      if (carry) {
        ans = carry + ans;
      }
      break;
    }

    let u = n1.pop() || "";
    let v = n2.pop() || "";

    console.log(u, v);

    let k = Number(u) + Number(v) + carry;
    ans = (k % 10) + ans;
    carry = parseInt(k / 10);
  }

  return ans;
};

// O(max(m,n))/O(1)
// 64ms/43.2MB
var addStrings = function (num1, num2) {
  let carry = 0;
  let ans = "";
  let start = -1;
  let end = void 0;

  while (1) {
    let u = num1.slice(start, end);
    let v = num2.slice(start, end);

    if (!u && !v) {
      if (carry) {
        ans = carry + ans;
      }
      break;
    }

    let k = Number(u) + Number(v) + carry;
    ans = (k % 10) + ans;
    carry = parseInt(k / 10);

    end = start;
    start -= 1;
  }

  return ans;
};

// 64ms/44.3MB
var addStrings = function (num1, num2) {
  let carry = 0;
  // let ans = "";
  let ans = [];
  let n1 = num1.length - 1;
  let n2 = num2.length - 1;

  // while (1) {
  //   let u = num1.charAt(n1);
  //   let v = num2.charAt(n2);

  //   if (!u && !v) {
  //     if (carry) {
  //       ans = carry + ans;
  //     }
  //     break;
  //   }

  //   let k = Number(u) + Number(v) + carry;
  //   ans = (k % 10) + ans;
  //   carry = parseInt(k / 10);

  //   n1 -= 1;
  //   n2 -= 1;
  // }

  while (n1 >= 0 || n2 >= 0 || carry > 0) {
    let u = num1.charAt(n1) || 0;
    let v = num2.charAt(n2) || 0;

    let k = Number(u) + Number(v) + carry;
    ans.push(k % 10);
    carry = parseInt(k / 10);

    n1 -= 1;
    n2 -= 1;
  }

  return ans.reverse().join();
};

var num1 = "11",
  num2 = "123";
console.log(addStrings(num1, num2));

var num1 = "456",
  num2 = "77";
console.log(addStrings(num1, num2));

var num1 = "0",
  num2 = "0";
console.log(addStrings(num1, num2));

var num1 = "9333852702227987",
  num2 = "85731737104263";
console.log(addStrings(num1, num2));
