/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = []
  const used = new Array(k).fill(false)

  const backtrack = (begin, track) => {
    if (track.length === k) {
      res.push(track.slice())
      return
    }

    for (let i = begin; i <= n; i++) {
      if (i - 1 === i && i - 1 >= 1 && !used[i - 1]) {
        continue
      }

      if (used[i]) {
        continue
      }

      track.push(i)
      used[i] = true
      backtrack(i, track)
      track.pop()
      used[i] = false
    }
  }

  backtrack(1, [])

  return res
}
// @lc code=end
