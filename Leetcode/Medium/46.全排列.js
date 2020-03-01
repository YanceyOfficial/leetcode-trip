/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let n = nums.length
  let res = []
  let tmpPath = []
  let backtrack = tmpPath => {
    if (tmpPath.length == n) {
      res.push(tmpPath)
      return
    }
    for (let i = 0; i < n; i++) {
      if (!tmpPath.includes(nums[i])) {
        tmpPath.push(nums[i])
        backtrack(tmpPath.slice())
        tmpPath.pop()
      }
    }
  }
  backtrack(tmpPath)
  return res
}
// @lc code=end