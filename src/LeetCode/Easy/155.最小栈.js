/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.items = []
  this.minItems = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.items.push(x)

  if (this.minItems.length === 0 || x <= this.getMin()) {
    this.minItems.push(x)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.top() === this.getMin()) {
    this.minItems.pop()
  }

  this.items.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.items[this.items.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minItems[this.minItems.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
