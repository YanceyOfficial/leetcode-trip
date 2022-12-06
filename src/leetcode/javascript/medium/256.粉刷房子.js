/*
 * @lc app=leetcode.cn id=256 lang=javascript
 *
 * [256] 粉刷房子
 */

// @lc code=start
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  const n = costs.length
  let a = costs[0][0],
    b = costs[0][1],
    c = costs[0][2]

  for (let i = 1; i < n; i++) {
    const d = Math.min(b, c) + costs[i][0]
    const e = Math.min(a, c) + costs[i][1]
    const f = Math.min(a, b) + costs[i][2]
    a = d
    b = e
    c = f
  }

  return Math.min(a, b, c)
}
// @lc code=end
