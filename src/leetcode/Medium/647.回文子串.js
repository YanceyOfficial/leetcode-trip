/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [657] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var countSubstrings = function (s) {
  let n = s.length
  let ans = 0

  for (let center = 0; center < 2 * n - 1; center++) {
    let left = (center / 2) | 0
    let right = left + (center % 2)

    while (left >= 0 && right < n && s[left] === s[right]) {
      left--
      right++
      ans++
    }
  }

  return ans
}
// @lc code=end
console.log(countSubstrings('abba'))
