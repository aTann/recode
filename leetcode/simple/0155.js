// 155. 最小栈
// https://leetcode-cn.com/problems/min-stack/

// 292ms/44.4MB
var MinStack = function () {
  this.stack = [];
  if (arguments.length) {
    if (arguments[0] instanceof Array) {
      this.stack[0] = arguments[0][0];
    } else {
      this.stack[0] = arguments[0];
    }
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (val == null) {
    return;
  }

  const { stack } = this;
  let len = stack.length;

  while (len) {
    stack[len] = stack[len - 1];
    len -= 1;
  }

  stack[0] = val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const { stack } = this;
  let len = stack.length;
  let i = 0;

  while (i < len) {
    stack[i] = stack[i + 1];
    i += 1;
  }

  stack.length = len - 1;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Math.min.apply(null, this.stack);
};

// 题解，使用辅助栈
// O(1)/O(n)
// 124ms/44.5MB
var MinStack = function () {
  this.stack = [];
  this.min_stack = [Infinity];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (val == null) {
    return;
  }

  this.stack.push(val);
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min_stack[this.min_stack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var obj = new MinStack();
obj.push(-3);
obj.push(null);
obj.push(0);
obj.push(2);
console.log(obj.stack);
console.log(obj.min_stack);
obj.pop();
console.log(obj.stack);
var param_3 = obj.top();
var param_4 = obj.getMin();
console.log(param_3, param_4);
