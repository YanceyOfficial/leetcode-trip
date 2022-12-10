/*
 * @lc app=leetcode.cn id=926 lang=javascript
 *
 * [926] 将字符串翻转到单调递增
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  const n = s.length
  let dp0 = 0
  let dp1 = 0

  for (let i = 0; i < n; i++) {
    const currDp0 = dp0 + (s[i] === '0' ? 0 : 1)
    const currDp1 = Math.min(dp0, dp1) + (s[i] === '0' ? 1 : 0)

    dp0 = currDp0
    dp1 = currDp1
  }

  return Math.min(dp0, dp1)
}
// @lc code=end

console.log(minFlipsMonoIncr('100000001010000'))
