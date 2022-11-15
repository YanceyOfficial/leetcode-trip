/*
 * @lc app=leetcode.cn id=528 lang=javascript
 *
 * [528] 按权重随机选择
 */

// @lc code=start
/**
 * @param {number[]} w
 */
var Solution = function (w) {
  const n = w.length
  const preSum = new Array(n).fill(0)
  preSum[0] = w[0]
  for (let i = 1; i < n; i++) {
    preSum[i] = preSum[i - 1] + w[i]
  }
  this.preSum = preSum
  this.total = w.reduce((acc, val) => acc + val)
}

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const x = Math.floor(Math.random() * this.total) + 1
  return this.binarySearch(x)
}

Solution.prototype.binarySearch = function (val) {
  let low = 0,
    high = this.preSum.length - 1

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2)
    if (this.preSum[mid] < val) {
      low = mid + 1
    } else {
      high = mid
    }
  }

  return low
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.picki()
 */
// @lc code=end
