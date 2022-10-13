/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = []
  const track = []
  const len = nums.length
  const used = new Array(len).fill(false)
  nums.sort((a, b) => a - b) // 升序排序

  const backtrack = (track) => {
    if (track.length === len) {
      res.push(track)
      return
    }
    for (let i = 0; i < len; i++) {
      if (nums[i - 1] === nums[i] && i - 1 >= 0 && !used[i - 1]) {
        // 避免产生重复的排列
        continue
      }
      if (used[i]) {
        // 这个数使用过了, 跳过.
        continue
      }
      track.push(nums[i]) // 做选择
      used[i] = true // 记录路径上做过的选择
      backtrack(track.slice()) // 递归
      track.pop() // 撤销选择
      used[i] = false // 也要撤销一下对它的记录
    }
  }

  backtrack(track)
  return res
}
// @lc code=end
