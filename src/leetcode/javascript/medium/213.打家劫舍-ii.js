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
  if (n === 0) return 0
  if (n === 1) return nums[0]

  return Math.max(helper(nums, 0, n - 1), helper(nums, 1, n))
}

var helper = (nums, left, right) => {
  let rob = 0,
    notRob = 0
  for (let i = left; i < right; i++) {
    let temp = rob
    rob = notRob + nums[i]
    notRob = Math.max(temp, notRob)
  }
  return Math.max(rob, notRob)
}
// @lc code=end
