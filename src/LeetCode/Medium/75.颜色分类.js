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
  const len = nums.length
  if (len < 2) return

  let left = 0
  let i = 0
  let right = len - 1

  while (i <= right) {
    if (nums[i] === 0) {
      ;[nums[i], nums[left]] = [nums[left], nums[i]]
      left++
      i++
    } else if (nums[i] === 1) {
      i++
    } else {
      ;[nums[i], nums[right]] = [nums[right], nums[i]]
      right--
    }
  }
}
// @lc code=end

console.log(sortColors([2, 0, 2, 1, 1, 0]))
