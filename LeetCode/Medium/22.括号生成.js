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

  let backtrack = (left, right, track) => {
    if (right < left) return // 因为每个 track 的子串, 都要保证 '(' >= ')',  
    if (left < 0 || right < 0) return
    if (left === 0 && right === 0) {
      res.push(track.join(''))
      return
    }

    track.push('(')
    backtrack(left - 1, right, track)
    track.pop()

    track.push(')')
    backtrack(left, right - 1, track)
    track.pop()
  }

  backtrack(n, n, track)

  return res
}
// @lc code=end

console.log(generateParenthesis(3))
