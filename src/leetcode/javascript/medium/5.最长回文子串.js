/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let n = s.length
  let maxArr = ''

  for (let center = 0; center < 2 * n - 1; center++) {
    let left = (center / 2) | 0
    let right = left + (center % 2)

    while (left >= 0 && right < n && s[left] === s[right]) {
      const currPalindrome = s.slice(left, right + 1)
      maxArr = maxArr.length < currPalindrome.length ? currPalindrome : maxArr

      left--
      right++
      ans++
    }
  }

  return ans
}
// @lc code=end
