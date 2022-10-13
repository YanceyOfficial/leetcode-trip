/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var isVowel = (char) => /(a|o|e|i|u)$/gi.test(char)

var reverseVowels = function (s) {
  let i = 0,
    j = s.length - 1

  let strArr = s.split('')

  while (i < j) {
    const isVowelI = isVowel(strArr[i])
    const isVowelJ = isVowel(strArr[j])

    if (!isVowelI) {
      i++
    }
    if (!isVowelJ) {
      j--
    }

    if (isVowelI && isVowelJ) {
      ;[strArr[i], strArr[j]] = [strArr[j], strArr[i]]
      i++
      j--
    }
  }

  return strArr.join('')
}
// @lc code=end
