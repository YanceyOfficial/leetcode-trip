/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (nums.length <= 1) return

  let i = 0,
    j = 1

  while (j < nums.length) {
    if (nums[i] === 0 && nums[j] !== 0) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j++
    } else if (nums[i] === 0 && nums[j] === 0) {
      j++
    } else {
      i++
      j++
    }
  }
}
// @lc code=end
