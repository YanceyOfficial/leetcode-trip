/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const n = s.length
  const result = []

  // 存储字母出现的最远的位置
  const maxPositionMap = new Map()
  for (let i = 0; i < n; i++) {
    maxPositionMap.set(s[i], i)
  }

  let start = 0 // 待切割的起始位置
  let maxPosition = 0 // 当前字母出现的最远位置
  for (let i = 0; i < n; i++) {
    maxPosition = Math.max(maxPosition, maxPositionMap.get(s[i]))

    // 正好扫描"已扫描的字符的最远位置"时, 收割字符串
    if (maxPosition === i) {
      result.push(i - start + 1)
      start = i + 1 // 更新 start 至下一个待切割字符串的起点
    }
  }

  return result
}
// @lc code=end
