/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length < 2) return nums.length
  const uniqueNums = new Set(nums)
  let max = 0

  for (const num of uniqueNums) {
    if (!uniqueNums.has(num - 1)) {
      let i = 1
      while (uniqueNums.has(num + i)) {
        i++
      }

      max = Math.max(max, i)
    }
  }

  return max
}
// @lc code=end
