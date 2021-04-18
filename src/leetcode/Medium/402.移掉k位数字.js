/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉K位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = []
  const remain = num.length - k

  for (const digit of num) {
    const len = stack.length
    while (k && stack.length !== 0 && stack[stack.length - 1] > digit) {
      stack.pop()
      k--
    }

    stack.push(digit)
  }

  console.log(stack)

  return stack.slice(0, remain).join('').replace(/^0+/, '') || '0'
}
// @lc code=end

console.log(removeKdigits('14322192', 4))
