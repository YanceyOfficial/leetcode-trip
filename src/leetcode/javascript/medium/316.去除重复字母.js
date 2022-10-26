/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const remain = new Map()
  for (const letter of s) {
    if (remain.has(letter)) {
      remain.set(letter, remain.get(letter) + 1)
    } else {
      remain.set(letter, 1)
    }
  }

  const stack = []
  for (const letter of s) {
    if (!stack.includes(letter)) {
      while (
        stack.length > 0 &&
        stack[stack.length - 1].charCodeAt() > letter.charCodeAt() &&
        remain.get(stack[stack.length - 1]) > 0
      ) {
        stack.pop()
      }

      stack.push(letter)
    }

    remain.set(letter, remain.get(letter) - 1)
  }

  return stack.join('')
}
// @lc code=end
console.log(removeDuplicateLetters('cbacdcbc')) // acdb
