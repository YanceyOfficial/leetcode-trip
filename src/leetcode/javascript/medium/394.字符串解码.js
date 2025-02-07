/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const numStack = []
  const strStack = []
  let num = 0
  let str = ''

  for (const ch of s) {
    if (!isNaN(Number(ch))) {
      num = num * 10 + Number(ch)
    } else if (ch === '[') {
      numStack.push(num)
      strStack.push(str)
      num = 0
      str = ''
    } else if (ch === ']') {
      const repeatTimes = numStack.pop()
      str = strStack.pop() + str.repeat(repeatTimes)
    } else {
      str += ch
    }
  }

  return str
}
// @lc code=end
