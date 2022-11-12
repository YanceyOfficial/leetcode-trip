/*
 * @lc app=leetcode.cn id=820 lang=javascript
 *
 * [820] 单词的压缩编码
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
  const n = words.length
  const reversedWords = []
  for (const word of words) {
    reversedWords.push(word.split('').reverse().join(''))
  }
  reversedWords.sort()

  let res = 0
  for (let i = 0; i < n; i++) {
    const currWord = reversedWords[i]
    if (!(i < n - 1 && reversedWords[i + 1].startsWith(currWord))) {
      res += currWord.length + 1
    }
  }

  return res
}
// @lc code=end
