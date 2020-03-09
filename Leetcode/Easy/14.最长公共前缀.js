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

var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''

  let prefix = strs[0]
  let flag = false

  while (!flag) {
    flag = strs.every(val => val.indexOf(prefix) === 0)

    if (!flag) {
      prefix = prefix.slice(0, -1)
    }
  }

  return prefix
}
// @lc code=end

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
