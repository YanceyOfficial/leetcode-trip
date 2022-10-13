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
    // 保证仅出现一次
    if (!stack.includes(letter)) {
      // 单调栈保证按字典序最小
      while (
        stack.length !== 0 &&
        stack[stack.length - 1].charCodeAt() > letter.charCodeAt() &&
        remain.get(stack[stack.length - 1]) > 0
      ) {
        stack.pop()
      }
      stack.push(letter)
    }

    // 循环往右走, 当前元素的剩余量也会减 1, 到最后 remain 里所有元素的值都为 0
    remain.set(letter, remain.get(letter) - 1)
  }

  return stack.join('')
}
// @lc code=end
console.log(removeDuplicateLetters('cbacdcbc'))
