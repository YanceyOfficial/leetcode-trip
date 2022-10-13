/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length
  if (n === 1) {
    return nums[0]
  } else if (n === 0) {
    return 0
  }

  function dpGO(nums, left, right) {
    let rob = 0,
      notRob = 0
    for (let i = left; i < right; ++i) {
      let preRob = rob,
        preNotRob = notRob
      rob = preNotRob + nums[i]
      notRob = Math.max(preRob, preNotRob)
    }
    return Math.max(rob, notRob)
  }

  return Math.max(dpGO(nums, 0, n - 1), dpGO(nums, 1, n))
}
// @lc code=end
