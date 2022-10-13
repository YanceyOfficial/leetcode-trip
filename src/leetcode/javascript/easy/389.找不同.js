/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    const val = map.get(s[i])
    map.set(s[i], val === undefined ? 1 : val + 1)
  }

  for (let i = 0; i < t.length; i++) {
    const val = map.get(t[i])
    if (val === 0 || val === undefined) {
      return t[i]
    } else {
      map.set(t[i], val - 1)
    }
  }
}
// @lc code=end
