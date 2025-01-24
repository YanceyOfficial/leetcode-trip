/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start

var MedianFinder = function () {
  this.left = new MaxPriorityQueue()
  this.right = new MinPriorityQueue()
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.left.size() === this.right.size()) {
    this.right.enqueue(num)
    this.left.enqueue(this.right.dequeue().element)
  } else {
    this.left.enqueue(num)
    this.right.enqueue(this.left.dequeue().element)
  }
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.left.size() > this.right.size()) {
    return this.left.front().element
  }
  return (this.left.front().element + this.right.front().element) / 2
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
