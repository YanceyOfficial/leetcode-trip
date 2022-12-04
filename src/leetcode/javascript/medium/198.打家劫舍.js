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
  const n = nums.length
  if (n === 0) return 0
  if (n === 1) return nums[0]

  let rob = 0,
    notRob = 0

  for (let i = 0; i < n; i++) {
    let temp = rob
    // 如果抢当前的, 那么前一个一定不能抢
    rob = notRob + nums[i]
    // 如果不抢当前的, 那么前一个可抢可不抢, 选价值最高的即可
    notRob = Math.max(temp, notRob)
  }

  return Math.max(rob, notRob)
}
// @lc code=end
