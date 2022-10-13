/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const res = []
  const sLen = s.length
  const pLen = p.length
  const needMap = new Map()

  for (const letter of p) {
    if (needMap.has(letter)) {
      needMap.set(letter, needMap.get(letter) + 1)
    } else {
      needMap.set(letter, 1)
    }
  }

  const needLen = needMap.size
  const windowMap = new Map()

  let left = 0
  let right = 0
  let meetedLen = 0

  while (right < sLen) {
    const rightLetter = s[right]
    right++

    if (needMap.has(rightLetter)) {
      if (windowMap.has(rightLetter)) {
        windowMap.set(rightLetter, windowMap.get(rightLetter) + 1)
      } else {
        windowMap.set(rightLetter, 1)
      }

      if (windowMap.get(rightLetter) === needMap.get(rightLetter)) {
        meetedLen++
      }
    }

    while (right - left >= pLen) {
      if (meetedLen === needLen) {
        res.push(left)
      }

      const leftLetter = s[left]
      left++

      if (needMap.has(leftLetter)) {
        if (windowMap.get(leftLetter) === needMap.get(leftLetter)) {
          meetedLen--
        }

        windowMap.set(leftLetter, windowMap.get(leftLetter) - 1)
      }
    }
  }

  return res
}
// @lc code=end
