/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function (s, t) {
  const target = {}
  const map = {}
  t.split('').forEach((val) => {
    target[val] ? (target[val] += 1) : (target[val] = 1)
  })

  let start = 0
  let end = 0
  let count = Number.MAX_SAFE_INTEGER
  let begin = 0
  let valid = 0

  while (end < s.length) {
    const endVal = s[end]
    end++

    if (target[endVal]) {
      map[endVal] ? (map[endVal] += 1) : (map[endVal] = 1)

      if (map[endVal] === target[endVal]) {
        valid++
      }
    }

    while (valid === Object.keys(target).length) {
      if (end - start < count) {
        begin = start
        count = end - start
      }

      const startVal = s[start]
      start++

      if (target[startVal]) {
        if (map[startVal] === target[startVal]) {
          valid--
          map[startVal] -= 1
        }
      }
    }
  }

  return count === Number.MAX_SAFE_INTEGER ? '' : s.substr(begin, count)
}
// @lc code=end
