/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0,
    j = height.length - 1
  let max = 0

  while (i <= j) {
    const min = Math.min(height[i], height[j])
    max = Math.max(min * (j - i), max)

    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }

  return max
}
// @lc code=end
console.log(maxArea([4, 3, 2, 1, 4]))
