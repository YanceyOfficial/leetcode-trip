/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = []
  let track = []
  let leftParenthesisCount = 0
  const model = ['(', ')']

  let backtrack = (track) => {
    if (track.length === n * 2) {
      res.push(track.join(''))
      return
    }

    for (let i = 0; i < model.length; i++) {
      // if (leftParenthesisCount < n) {
      //   track.push(model[i])
      //   if (i === 0) {
      //     leftParenthesisCount++
      //   }
      // } else {
      //   track.push(model[1])
      // }

      track.push(model[i])

      backtrack(track.slice())

      track.pop()
    }
  }

  backtrack(track)
  return res
}
// @lc code=end

console.log(generateParenthesis(3))
