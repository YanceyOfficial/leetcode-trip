/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let res = '1'

  while (n - 1 > 0) {
    let curr = 1
    let count = 0
    let temp = ''
    for (let i = res.length - 1; i >= 0; i--) {
      const num = Number(res[i])
      if (num === curr) {
        count++
      } else {
        temp = `${count}${curr}` + temp
        curr = num
        count = 1
      }
    }

    temp = `${count}${curr}` + temp
    res = temp

    n--
  }

  return res
}
// @lc code=end
console.log(countAndSay(1))
console.log(countAndSay(2))
console.log(countAndSay(3))
console.log(countAndSay(4))
console.log(countAndSay(5))
