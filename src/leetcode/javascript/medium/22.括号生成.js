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

  let dfs = (left, right, track) => {
    if (right < left) return // 因为每个 track 的子串, 都要保证 left >= right, 即 [剩下的 left] < [剩下的 right], 一定不符合
    if (left < 0 || right < 0) return // 假设 left 小于 0 了, 意味着 left 的数量大于 n 了, 一定不符合
    if (left === 0 && right === 0) {
      // 当两边括号都恰好为 0 了, 证明是一个合法的括号生成
      res.push(track.join(''))
      return
    }

    track.push('(')
    dfs(left - 1, right, track)
    track.pop()

    track.push(')')
    dfs(left, right - 1, track)
    track.pop()
  }

  dfs(n, n, track)

  return res
}
// @lc code=end
