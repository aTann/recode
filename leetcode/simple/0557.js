// 557. 反转字符串中的单词 III
// https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
/**
 * @param {string} s
 * @return {string}
 */
// 空格分割，字符串变换数组倒转
// O(n)/O(S)
// 64ms/47MB

var reverseWords = function (s) {
  const sList = s.split(" ");
  for (let i = 0; i < sList.length; i++) {
    // sList[i] = sList[i].split("").reverse().join("");
    reverse(sList, i);
  }

  return sList.join(" ");
};

// O(n)/O(S)
// 64ms/47MB
// function reverse(list, i) {
//   return (list[i] = list[i].split("").reverse().join(""));
// }

// O(n)/O(n)
// 72ms/48MB
function reverse(list, i) {
  const word = list[i];
  let b = 0,
    e = word.length - 1;
  let s1 = "",
    s2 = "";

  while (b < e) {
    s1 += word[e];
    s2 = word[b] + s2;

    b += 1;
    e -= 1;
  }

  list[i] = s1 + ((b === e && word[b]) || "") + s2;
}

// O(n)/O(n)
// 68ms/47.6MB
function reverse(list, i) {
  const word = [...list[i]];
  let b = 0,
    e = word.length - 1;

  while (b < e) {
    [word[e], word[b]] = [word[b], word[e]];

    b += 1;
    e -= 1;
  }

  list[i] = word.join('');
}

var s = "Let's take LeetCode contest";
console.log(reverseWords(s));

var s = (s = "God Ding");
console.log(reverseWords(s));
