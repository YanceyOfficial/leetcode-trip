/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const aCharCodeAt = 'a'.charCodeAt()
  const indexes = new Array(26).fill(0)
  for (let i = 0; i < 26; i++) {
    // 先 format 出外星人的字典序
    indexes[order[i].charCodeAt() - aCharCodeAt] = i
  }

  for (let i = 1; i < words.length; i++) {
    let valid = false

    for (let j = 0; j < words[i - 1].length && j < words[i].length; j++) {
      // 获取当前 word 和它的前一个 word 的 charCode
      const prev = indexes[words[i - 1][j].charCodeAt() - aCharCodeAt]
      const curr = indexes[words[i][j].charCodeAt() - aCharCodeAt]

      // 如果 prev < curr, 说明这两个字符串是按照字典序排列的, 跳过这次循环就好了
      if (prev < curr) {
        valid = true
        break
      }

      // 如果 prev > curr, 说明不是按字典序排列的, 返回 false
      if (prev > curr) return false
    }

    // 如果比到最后两个单词不一样长(比如, sigh 和 sight), 也不符合字典序规则, 返回 false
    if (!valid && words[i - 1].length > words[i].length) return false
  }

  return true
}
// @lc code=end
