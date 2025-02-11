/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let result = ''
  let word = ''

  for (const ch of s) {
    if (ch !== ' ') {
      word += ch
    } else {
      if (word !== '') {
        result = result === '' ? word : `${word} ${result}`
        word = ''
      }
    }
  }

  return word !== '' ? (result === '' ? word : `${word} ${result}`) : result
}
// @lc code=end

console.log(reverseWords('the sky is blue'))
console.log(reverseWords('  hello world  '))
console.log(reverseWords('a good   example'))
