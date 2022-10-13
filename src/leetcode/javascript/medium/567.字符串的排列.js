/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const needMap = new Map()

  // 将 s1 的每个元素映射到 hashmap 中
  for (const letter of s1) {
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
  let meetCount = 0

  while (right < s2.length) {
    const rightLetter = s2[right]
    right++

    if (needMap.has(rightLetter)) {
      if (windowMap.has(rightLetter)) {
        windowMap.set(rightLetter, windowMap.get(rightLetter) + 1)
      } else {
        windowMap.set(rightLetter, 1)
      }

      if (needMap.get(rightLetter) === windowMap.get(rightLetter)) {
        meetCount++
      }
    }

    // 缩小窗口的时机是窗口区间长度大于等于 s1 的长度, 这样才有可能将 s1 包含在内
    // 即 right - left >= s1.length
    while (right - left >= s1.length) {
      // 一旦 meetCount === needLen, 也就找到了子串, 此时直接返回 true 完活
      if (meetCount === needLen) {
        return true
      }

      const leftLetter = s2[left]
      left++

      if (needMap.has(leftLetter)) {
        if (needMap.get(leftLetter) === windowMap.get(leftLetter)) {
          meetCount--
        }

        windowMap.set(leftLetter, windowMap.get(leftLetter) - 1)
      }
    }
  }

  return false
}
// @lc code=end
console.log(checkInclusion('ab', 'eidboaoo'))
