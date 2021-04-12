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
  let i = 0
  let j = 1

  const ans = []
  const len = nums.length

  while (j <= len) {
    if (j === len || nums[j] !== nums[j - 1] + 1) {
      if (i === j - 1) {
        ans.push(nums[i].toString())
      } else {
        ans.push(`${nums[i]}->${nums[j - 1]}`)
      }

      i = j
    }
    j++
  }

  return ans
}
// @lc code=end
