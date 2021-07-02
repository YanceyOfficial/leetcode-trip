/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let rob = 0,
    notRob = 0
  const n = nums.length

  for (let i = 0; i < n; i++) {
    let preRob = rob,
      preNotRob = notRob
    rob = preNotRob + nums[i]
    notRob = Math.max(preRob, preNotRob)
  }
  return Math.max(rob, notRob)
}
// @lc code=end
