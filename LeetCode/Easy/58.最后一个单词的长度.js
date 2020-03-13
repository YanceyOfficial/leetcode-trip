/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const sArr = s.trim().split(' ')
  if (sArr.length > 0) {
    return sArr[sArr.length - 1].length
  }

  return 0
}
// @lc code=end
