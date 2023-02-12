/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ans = 0
  let left = 0,
    right = height.length - 1
  let leftMax = 0,
    rightMax = 0
  while (left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    if (height[left] < height[right]) {
      ans += leftMax - height[left]
      ++left
    } else {
      ans += rightMax - height[right]
      --right
    }
  }
  return ans
}
// @lc code=end
