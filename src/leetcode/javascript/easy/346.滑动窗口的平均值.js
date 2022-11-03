/*
 * @lc app=leetcode.cn id=346 lang=javascript
 *
 * [346] 滑动窗口的平均值
 */

// @lc code=start
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.size = size
  this.queue = []
}

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.queue.length === this.size) {
    this.queue.shift()
  }

  this.queue.push(val)

  return this.queue.reduce((acc, val) => acc + val, 0) / this.queue.length
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
// @lc code=end
