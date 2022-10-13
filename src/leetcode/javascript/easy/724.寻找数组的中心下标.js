/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const len = nums.length
  const sum = nums.reduce((acc, val) => acc + val)
  let leftSum = 0

  for (let i = 0; i < len; i++) {
    if (sum - nums[i] - leftSum === leftSum) {
      return i
    }
    leftSum += nums[i]
  }

  return -1
}
// @lc code=end
