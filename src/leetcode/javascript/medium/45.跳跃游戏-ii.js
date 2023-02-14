/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const n = nums.length
  let end = 0
  let maxPosition = 0
  let steps = 0
  for (let i = 0; i < n - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i])
    if (i === end) {
      end = maxPosition
      steps++
    }
  }
  return steps
}
// @lc code=end

console.log(jump([2, 3, 1, 2, 4, 2, 3]))
