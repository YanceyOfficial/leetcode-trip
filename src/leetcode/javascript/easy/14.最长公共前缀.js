/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort((a, b) => a - b)
  let lcp = strs[0]

  while (!strs.every((str) => str.startsWith(lcp))) {
    lcp = lcp.slice(0, -1)
  }

  return lcp
}
// @lc code=end
