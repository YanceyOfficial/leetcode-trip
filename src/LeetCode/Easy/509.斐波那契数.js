/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N <= 1) {
    return N
  }
  if (N === 2) {
    return 1
  }

  let current = 0
  let prev1 = 1
  let prev2 = 1

  for (let i = 3; i <= N; i++) {
    current = prev1 + prev2
    prev2 = prev1
    prev1 = current
  }
  return current
}
// @lc code=end
