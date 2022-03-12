// 409. 最长回文串
// https://leetcode-cn.com/problems/longest-palindrome/
/**
 * @param {string} s
 * @return {number}
 */
// hashMap，超过 2 个就可以做一个回文，然后如果有落单最后 +1
// O(n)/O(|S|), S = 26 * 2
// 68ms/41.7MB
var longestPalindrome = function (s) {
  const map = new Map();
  const len = s.length;
  let t = 0;
  let odd = 0;
  for (let i = 0; i < len; i += 1) {
    const c = s[i];
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }

  for (const [key, val] of map) {
    odd = (val & 1) | odd;
    t += val - (val & 1);
  }

  return t + odd;
};

var s = "abccccdd";
console.log(longestPalindrome(s));

var s = "a";
console.log(longestPalindrome(s));

var s = "bb";
console.log(longestPalindrome(s));

var s =
  "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
console.log(longestPalindrome(s));
