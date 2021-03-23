/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const need = {}
  const window = {}

  for (const i of p) {
    need[i] ? (need[i] += 1) : (need[i] = 1)
  }

  const needLen = Object.keys(need).length

  let left = 0
  let right = 0

  let valid = 0

  const res = []

  while (right < s.length) {
    const c = s[right]
    right++

    if (need[c]) {
      window[c] ? (window[c] += 1) : (window[c] = 1)

      if (window[c] === need[c]) {
        valid++
      }
    }

    while (right - left >= p.length) {
      if (valid === needLen) res.push(left)

      const d = s[left]
      left++

      if (need[d]) {
        if (window[d] === need[d]) {
          valid--
        }

        window[d] -= 1
      }
    }
  }

  return res
}
// @lc code=end
