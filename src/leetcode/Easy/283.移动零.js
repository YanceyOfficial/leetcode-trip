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
var moveZeroes = function (nums) {
  const n = nums.length
  let left = 0,
    right = 0

  while (right < n) {
    if (nums[right]) {
      ;[nums[left], nums[right]] = [nums[right], nums[left]]
      left++
    }
    right++
  }
}
// @lc code=end
