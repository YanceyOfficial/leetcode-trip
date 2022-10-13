/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const n = nums.length
  const res = []
  let i = 0
  let j = 1

  while (j <= n) {
    if (nums[j] - nums[i] !== j - i) {
      if (i === j - 1) {
        res.push(nums[i].toString())
      } else {
        res.push(`${nums[i]}->${nums[j - 1]}`)
      }

      i = j
    }

    j++
  }

  return res
}
// @lc code=end
