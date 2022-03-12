// 232. 用栈实现队列
// https://leetcode-cn.com/problems/implement-queue-using-stacks/
// 利用 2 个栈
// 每次进出需要先把保存好的进行颠倒处理，然后压入新值，然后重新弹出放入另外一个栈
// 56ms/41.1MB
var MyQueue = function () {
  this.stack1 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
// O(n)/O(n)
MyQueue.prototype.push = function (x) {
  if (x) {
    const { stack1 } = this;
    const stack2 = [];

    while (stack1.length) {
      stack2.push(stack1.pop());
    }

    stack1.push(x);

    while (stack2.length) {
      stack1.push(stack2.pop());
    }
  }
};

/**
 * @return {number}
 */
// O(1)/O(1)
MyQueue.prototype.pop = function () {
  return this.stack1.pop();
};

/**
 * @return {number}
 */
// O(1)/O(1)
MyQueue.prototype.peek = function () {
  return this.stack1[this.stack1.length - 1];
};

/**
 * @return {boolean}
 */
// O(1)/O(1)
MyQueue.prototype.empty = function () {
  return !this.stack1.length;
};

// 摊还处理
// 68ms/41MB
var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
// O(n)/O(n)
MyQueue.prototype.push = function (x) {
  if (x) {
    this.stack1.push(x);
  }
};

/**
 * @return {number}
 */
// 摊还复杂度O(1)/O(1)，O(1)-O(n)
MyQueue.prototype.pop = function () {
  const { stack1, stack2 } = this;
  if (!stack2.length) {
    while (stack1.length) {
      stack2.push(stack1.pop());
    }
  }
  return stack2.pop();
};

/**
 * @return {number}
 */
// O(1)/O(1)
MyQueue.prototype.peek = function () {
  return this.stack2[this.stack2.length - 1] || this.stack1[0];
};

/**
 * @return {boolean}
 */
// O(1)/O(1)
MyQueue.prototype.empty = function () {
  return !(this.stack2.length || this.stack1.length);
};
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var obj = new MyQueue();
obj.push(2);
obj.push(3);
var param_2 = obj.pop();
console.log(param_2);
var param_3 = obj.peek();
console.log(param_3);
var param_4 = obj.empty();
console.log(param_4);


/**
 * 摊还分析
 * 摊还分析给出了所有操作的平均性能。摊还分析的核心在于，最坏情况下的操作一旦发生了一次，那么在未来很长一段时间都不会再次发生，这样就会均摊每次操作的代价。
 * 
 * 单次出队操作最坏情况下的时间复杂度为 O(n)，n 次最坏操作是 O(n^2)
 * 
 * 在一系列的操作中，最坏情况不可能每次都发生，可能一些操作代价很小，另一些代价很高
 * 
 * 在上面的例子中，出队 操作最多可以执行的次数跟它之前执行过入队操作的次数有关。虽然一次出队操作代价可能很大，但是每 n 次入队 才能产生这么一次代价为 n 的出队 操作。因此所有操作的总时间复杂度为：n(所有的入队操作产生） + 2 * n(第一次出队操作产生） + n - 1(剩下的出队操作产生）， 所以实际时间复杂度为 O(2*n)。于是我们可以得到每次操作的平均时间复杂度为 O(2n/2n)=O(1)。
 */
