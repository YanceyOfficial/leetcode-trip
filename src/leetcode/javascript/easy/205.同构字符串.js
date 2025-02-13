/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const s2T = {}
  const t2S = {}

  for (let i = 0; i < s.length; i++) {
    if (s2T[s[i]] && s2T[s[i]] !== t[i]) return false
    if (t2S[t[i]] && t2S[t[i]] !== s[i]) return false

    s2T[s[i]] = t[i]
    t2S[t[i]] = s[i]
  }

  return true
}
// @lc code=end
