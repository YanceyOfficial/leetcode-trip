/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索-数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.preSum = new Array(nums.length + 1).fill(0)

  for (let i = 0; i < nums.length; i++) {
    this.preSum[i + 1] = this.preSum[i] + nums[i]
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.preSum[right + 1] - this.preSum[left]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
