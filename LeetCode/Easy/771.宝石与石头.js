/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const set = new Set([...J])

  let count = 0

  for (let i = 0; i < S.length; i++) {
    if (set.has(S[i])) {
      count++
    }
  }

  return count
}
// @lc code=end
