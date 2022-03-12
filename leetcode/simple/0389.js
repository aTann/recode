// 389. 找不同
// https://leetcode-cn.com/problems/find-the-difference/
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// HashMap
// O(m+n)/O(|S|), S = 26
// 68ms/42.3MB
var findTheDifference = function (s, t) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (map[c]) {
      map[c] += 1;
    } else {
      map[c] = 1;
    }
  }
  for (let k = 0; k < t.length; k++) {
    if (map[t[k]]) {
      map[t[k]] -= 1;
    } else {
      return t[k];
    }
  }
};

// 排序再查看
// O(m + n)/ O(m + n)
// O(76ms)/42.8MB
var findTheDifference = function (s, t) {
  const sList = Array.from(s).sort();
  const tList = Array.from(t).sort();

  for (let i = 0; i < tList.length; i++) {
    if (sList[i] !== tList[i]) {
      return tList[i];
    }
  }
};

// 题解
// 求和 T.sum(charCodeAt)  - S.sum(charCodeAt)
// O(n)/O(1)
// 56ms/41.8MB
var findTheDifference = function (s, t) {
  let m = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[i] !== undefined) {
      m += t.charCodeAt(i) - s.charCodeAt(i);
    } else {
      m += t.charCodeAt(i);
    }
  }
  return String.fromCharCode(m);
};

// 异或
// O(n)/O(1)
// 56ms/41.8MB
var findTheDifference = function (s, t) {
  let m = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[i] !== undefined) {
      m ^= t.charCodeAt(i) ^  s.charCodeAt(i);
    } else {
      m ^= t.charCodeAt(i);
    }
  }
  return String.fromCharCode(m);
};

var s = "abcd",
  t = "abcde";
console.log(findTheDifference(s, t));

var s = "",
  t = "y";
console.log(findTheDifference(s, t));

var s =
    "ymbgaraibkfmvocpizdydugvalagaivdbfsfbepeyccqfepzvtpyxtbadkhmwmoswrcxnargtlswqemafandgkmydtimuzvjwxvlfwlhvkrgcsithaqlcvrihrwqkpjdhgfgreqoxzfvhjzojhghfwbvpfzectwwhexthbsndovxejsntmjihchaotbgcysfdaojkjldprwyrnischrgmtvjcorypvopfmegizfkvudubnejzfqffvgdoxohuinkyygbdzmshvyqyhsozwvlhevfepdvafgkqpkmcsikfyxczcovrmwqxxbnhfzcjjcpgzjjfateajnnvlbwhyppdleahgaypxidkpwmfqwqyofwdqgxhjaxvyrzupfwesmxbjszolgwqvfiozofncbohduqgiswuiyddmwlwubetyaummenkdfptjczxemryuotrrymrfdxtrebpbjtpnuhsbnovhectpjhfhahbqrfbyxggobsweefcwxpqsspyssrmdhuelkkvyjxswjwofngpwfxvknkjviiavorwyfzlnktmfwxkvwkrwdcxjfzikdyswsuxegmhtnxjraqrdchaauazfhtklxsksbhwgjphgbasfnlwqwukprgvihntsyymdrfovaszjywuqygpvjtvlsvvqbvzsmgweiayhlubnbsitvfxawhfmfiatxvqrcwjshvovxknnxnyyfexqycrlyksderlqarqhkxyaqwlwoqcribumrqjtelhwdvaiysgjlvksrfvjlcaiwrirtkkxbwgicyhvakxgdjwnwmubkiazdjkfmotglclqndqjxethoutvjchjbkoasnnfbgrnycucfpeovruguzumgmgddqwjgdvaujhyqsqtoexmnfuluaqbxoofvotvfoiexbnprrxptchmlctzgqtkivsilwgwgvpidpvasurraqfkcmxhdapjrlrnkbklwkrvoaziznlpor",
  t =
    "qhxepbshlrhoecdaodgpousbzfcqjxulatciapuftffahhlmxbufgjuxstfjvljybfxnenlacmjqoymvamphpxnolwijwcecgwbcjhgdybfffwoygikvoecdggplfohemfypxfsvdrseyhmvkoovxhdvoavsqqbrsqrkqhbtmgwaurgisloqjixfwfvwtszcxwktkwesaxsmhsvlitegrlzkvfqoiiwxbzskzoewbkxtphapavbyvhzvgrrfriddnsrftfowhdanvhjvurhljmpxvpddxmzfgwwpkjrfgqptrmumoemhfpojnxzwlrxkcafvbhlwrapubhveattfifsmiounhqusvhywnxhwrgamgnesxmzliyzisqrwvkiyderyotxhwspqrrkeczjysfujvovsfcfouykcqyjoobfdgnlswfzjmyucaxuaslzwfnetekymrwbvponiaojdqnbmboldvvitamntwnyaeppjaohwkrisrlrgwcjqqgxeqerjrbapfzurcwxhcwzugcgnirkkrxdthtbmdqgvqxilllrsbwjhwqszrjtzyetwubdrlyakzxcveufvhqugyawvkivwonvmrgnchkzdysngqdibhkyboyftxcvvjoggecjsajbuqkjjxfvynrjsnvtfvgpgveycxidhhfauvjovmnbqgoxsafknluyimkczykwdgvqwlvvgdmufxdypwnajkncoynqticfetcdafvtqszuwfmrdggifokwmkgzuxnhncmnsstffqpqbplypapctctfhqpihavligbrutxmmygiyaklqtakdidvnvrjfteazeqmbgklrgrorudayokxptswwkcircwuhcavhdparjfkjypkyxhbgwxbkvpvrtzjaetahmxevmkhdfyidhrdeejapfbafwmdqjqszwnwzgclitdhlnkaiyldwkwwzvhyorgbysyjbxsspnjdewjxbhpsvj";
console.log(findTheDifference(s, t));
