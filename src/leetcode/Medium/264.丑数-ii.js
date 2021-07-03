/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const dp = new Array(n + 1).fill(0)
  dp[1] = 1
  let p2 = 1,
    p3 = 1,
    p5 = 1
  for (let i = 2; i <= n; i++) {
    // 找到下一个最小的丑数
    const num2 = dp[p2] * 2,
      num3 = dp[p3] * 3,
      num5 = dp[p5] * 5

    dp[i] = Math.min(num2, num3, num5)

    // 最小的丑数已经找到了, 因此对应的指针需要 +1
    if (dp[i] === num2) {
      p2++
    }
    if (dp[i] === num3) {
      p3++
    }
    if (dp[i] === num5) {
      p5++
    }
  }
  return dp[n]
}
// @lc code=end
