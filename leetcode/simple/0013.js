// 13. 罗马数字转整数
// https://leetcode-cn.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  let n = 0;
  // 字符对应数字表
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  // 利用正则分解罗马字符
  let reg = /C[MD]|X[LC]|I[VX]|C|M|D|X|L|V|I/g

  // const list = s.match(reg);

  // let cur;
  // while (cur = list.pop()) {
  //   n += map[cur]
  // }

  let cur = reg.exec(s);
  while (cur !== null) {
    n += map[cur]
    cur = reg.exec(s)
  }

  return n;
};

// 状态机
var romanToInt = function (s) {
  let token = [], source = 0;
  function start(char) {
    debugger;
    if (char === "I") {
      token.push(char);
      return genI;
    }

    if (char === 'X') {
      token.push(char);
      return genX;
    }

    if (char === 'C') {
      token.push(char);
      return genC;
    }

    if (char === 'V') {
      emitToken(5)
      return start
    }

    if (char === 'L') {
      emitToken(50)
      return start
    }

    if (char === 'D') {
      emitToken(500)
      return start
    }

    if (char === 'M') {
      emitToken(1000)
      return start
    }
  }

  function genI(char) {
    if (char === 'V' || char === 'X') {
      token.push(char)
      emitToken( char === 'V' ? 4 : 9)
      token = [];
      return start
    }

    if (char === 'I') {
      token.push(char)
      return genI
    }

    emitToken(token.length)
    token = []

    return start(char)
  }

  function genX(char) {
    if (char === 'L' || char === 'C') {
      token.push(char)
      emitToken( char === 'L' ? 40 : 90)
      token = [];
      return start
    }

    emitToken(10)
    token = []

    return start(char)
  }

  function genC(char) {
    if (char === 'D' || char === 'M') {
      token.push(char)
      emitToken( char === 'D' ? 400 : 900)
      token = [];
      return start
    }

    emitToken(100)
    token = []

    return start(char)
  }

  function emitToken(value) {
    source += value
  }

  let list = [...s];
  let state = start;
  list.forEach((item, idx) => {
    state = state(item)
  })

  state('EOF')

  return source
};

// CM = 900， CM = M - C = 1000 - 100，遇到左边比右边小时候就减
var romanToInt = function (s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let i = 0;
  let t = 0;
  while (s[i]) {
    let c = s[i];
    let n = s[i+1];

    if (n && map[c] < map[n]) {
      t -= map[c]
    } else {
      t += map[c]
    }
    i += 1
  }
  return t
}

const n = romanToInt('III')

console.log(n);
