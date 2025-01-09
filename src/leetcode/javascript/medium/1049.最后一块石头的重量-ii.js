/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  const n = stones.length
  if (n === 1) return stones[0]

  const sum = stones.reduce((acc, val) => acc + val)
  const capacity = Math.floor(sum / 2)

  const dp = new Array(n + 1).fill(0).map(() => new Array(capacity + 1).fill(0))

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (w - stones[i - 1] < 0) {
        dp[i][w] = dp[i - 1][w]
      } else {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - stones[i - 1]] + stones[i - 1],
        )
      }
    }
  }

  return sum - dp[n][capacity] * 2
}
// @lc code=end

console.log(lastStoneWeightII([2, 7, 4, 1, 8, 1])) // 1
console.log(lastStoneWeightII([31, 26, 33, 21, 40])) // 5
