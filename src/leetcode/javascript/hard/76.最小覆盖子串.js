/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=left
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function (s, t) {
  let minStr = ''

  const needMap = new Map()
  for (const letter of t) {
    if (needMap.has(letter)) {
      needMap.set(letter, needMap.get(letter) + 1)
    } else {
      needMap.set(letter, 1)
    }
  }
  const needMapLen = needMap.size
  const windowMap = new Map()
  let start = 0
  let end = 0
  let meetedCount = 0

  while (end < s.length) {
    const endLetter = s[end]
    end++

    if (needMap.has(endLetter)) {
      if (windowMap.has(endLetter)) {
        windowMap.set(endLetter, windowMap.get(endLetter) + 1)
      } else {
        windowMap.set(endLetter, 1)
      }

      if (needMap.get(endLetter) === windowMap.get(endLetter)) {
        meetedCount++
      }
    }

    // 当 meetedCount === needMapLen, 说明找到了一个覆盖子串
    // 这个时候就可以收缩窗口了
    while (meetedCount === needMapLen) {
      const windowStr = s.slice(start, end)
      minStr =
        minStr.length === 0
          ? windowStr
          : windowStr.length < minStr.length
          ? windowStr
          : minStr

      const startLetter = s[start]
      start++

      if (needMap.has(startLetter)) {
        if (needMap.get(startLetter) === windowMap.get(startLetter)) {
          meetedCount--
        }

        windowMap.set(startLetter, windowMap.get(startLetter) - 1)
      }
    }
  }

  return minStr
}
// @lc code=right
