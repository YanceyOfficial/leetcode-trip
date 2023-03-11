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
var permute = function (nums) {
  let n = nums.length
  let res = []
  let track = []
  let dfs = (track) => {
    if (track.length === n) {
      res.push(track)
      return
    }
    for (let i = 0; i < n; i++) {
      if (!track.includes(nums[i])) {
        track.push(nums[i])
        dfs(track.slice())
        track.pop()
      }
    }
  }

  dfs(track)
  return res
}
// @lc code=end
