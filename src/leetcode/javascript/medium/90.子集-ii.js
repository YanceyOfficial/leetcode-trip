/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const len = nums.length
  const res = []
  const used = new Array(len).fill(false)
  nums.sort((a, b) => a - b)

  const backtracking = (index, track) => {
    res.push(track.slice())

    for (let i = index; i < len; i++) {
      if (nums[i - 1] === nums[i] && i - 1 >= 0 && !used[i - 1]) continue
      if (used[i]) continue

      track.push(nums[i])
      used[i] = true
      backtracking(i + 1, track)
      track.pop()
      used[i] = false
    }
  }

  backtracking(0, [])

  return res
}
// @lc code=end
