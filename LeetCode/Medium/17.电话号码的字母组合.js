/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return []

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  let res = []
  let track = []
  let backtrack = (track) => {
    const len = track.length
    if (len === digits.length) {
      res.push(track.join(''))
      return
    }

    const digit = digits[len]
    const val = map[digit]
    for (let i = 0; i < val.length; i++) {
      track.push(val[i])
      backtrack(track.slice())
      track.pop()
    }
  }

  backtrack(track)
  return res
}
// @lc code=end
