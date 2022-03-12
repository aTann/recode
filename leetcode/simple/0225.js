// 225. 用队列实现栈
// https://leetcode-cn.com/problems/implement-stack-using-queues/

// 双链表处理
// O(n)/O(n)
// 72ms/37.3MB
var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  if (x != null) {
    if (this.queue1.length >= this.queue2.length) {
      this.queue1.push(x);
      this.queue2.shift();
      this.queue2.push(x);
    } else {
      this.queue2.push(x);
      this.queue1.shift();
      this.queue1.push(x);
    }
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  const { queue1, queue2 } = this;
  let pop = null;
  const copy = (q1, q2) => {
    while (q1.length > 2) {
      q2.push(q1.shift());
    }
    let n = q1.shift();
    if (q1.shift()) {
      q1.push(n);
      q2.push(n);
    }
  };

  console.log(queue1, queue2);

  if (queue1.length >= queue2.length) {
    pop = queue2.shift();
    copy(queue1, queue2);
  } else {
    pop = queue1.shift();
    copy(queue2, queue1);
  }

  console.log(queue1, queue2);

  return pop;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  const { queue1, queue2 } = this;
  let top = null;
  if (queue1.length >= queue2.length) {
    top = queue2.shift();
    queue2.push(top);
  } else {
    top = queue1.shift();
    queue1.push(top);
  }

  return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.queue1.length;
};

// 题解
// 双列表
// O(n)/O(n)
// 56ms/37.7MB
var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  const { queue1, queue2 } = this;
  let temp = null;

  queue2.push(x);

  while (queue1.length) {
    queue2.push(queue1.shift());
  }

  temp = queue1;

  this.queue1 = queue2;
  this.queue2 = temp;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queue1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.queue1.length;
};

// 单列表
// O(n)/O(n)
// 64ms/37.7MB
var MyStack = function () {
  this.queue1 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  const { queue1 } = this;

  let len = queue1.length;

  queue1.push(x);

  while (len > 0) {
    queue1.push(queue1.shift());
    len -= 1;
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queue1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.queue1.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var obj = new MyStack();
obj.push(1);
obj.push(2);
var param_2 = obj.pop();
console.log(param_2);
var param_3 = obj.top();
console.log(param_3);
var param_4 = obj.empty();
console.log(param_4);
