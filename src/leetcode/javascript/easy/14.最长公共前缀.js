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
  let prefix = strs[0]
  let hasFound = false

  while (!hasFound) {
    hasFound = strs.every((str) => str.startsWith(prefix))

    if (!hasFound) {
      prefix = prefix.slice(0, -1)
    }
  }

  return prefix
}
// @lc code=end
