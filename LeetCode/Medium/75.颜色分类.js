/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let start = 0,
    end = nums.length - 1,
    cursor = 0

  while (cursor <= end) {
    if (nums[cursor] === 0) {
      nums[cursor] = nums[start]
      nums[start] = 0
      start += 1
    }

    if (nums[cursor] === 2) {
      nums[cursor] = nums[end]
      nums[end] = 2
      end -= 1
      cursor -= 1
    }

    cursor += 1
  }

  return nums
}
// @lc code=end
