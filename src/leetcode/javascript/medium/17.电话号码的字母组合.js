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
  const res = []

  if (digits.length === 0) return []

  // 写一个 map 来模拟手机键盘
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

  const backtrack = (track) => {
    const n = track.length

    // 题目要求组合字母的长度要和 digits 的长度相同
    // 此时就可以将 track 收割了
    if (n === digits.length) {
      res.push(track.join(''))
      return
    }

    // 拿到当前数字对应的字母
    const letters = map[digits[n]]

    // 遍历某个数字对应的字母, 比如 def, 进行回溯
    for (let i = 0; i < letters.length; i++) {
      track.push(letters[i])
      backtrack(track.slice())
      track.pop()
    }
  }

  backtrack([])
  return res
}
// @lc code=end
