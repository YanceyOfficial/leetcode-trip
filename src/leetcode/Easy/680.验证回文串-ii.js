/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0
  let right = s.length - 1

  var isPalindrome = (left, right) => {
    for (let i = left, j = right; i < j; i++, j--) {
      if (s[i] !== s[j]) return false
    }
    return true
  }

  while (left < right) {
    if (s[left] === s[right]) {
      left++
      right--
    } else {
      return isPalindrome(left + 1, right) || isPalindrome(left, right - 1)
    }
  }

  return true
}

// @lc code=end
