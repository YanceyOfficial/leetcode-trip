/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let totalSurplus = 0
  let surplus = 0
  let start = 0

  for (let i = 0; i < gas.length; i++) {
    totalSurplus += gas[i] - cost[i]
    surplus += gas[i] - cost[i]

    if (surplus < 0) {
      surplus = 0
      start = i + 1
    }
  }

  return totalSurplus >= 0 ? start : -1
}
// @lc code=end
