/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isNegative = Math.sign(x) === -1

  let arr = Math.abs(x)
    .toString()
    .split('')

  let i = 0
  let j = arr.length - 1

  while (i <= j) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
    i++
    j--
  }

  const num = parseInt(arr.join(''), 10)

  const res = isNegative ? -1 * num : num

  return res >= Math.pow(-2, 31) && res <= Math.pow(2, 31) - 1 ? res : 0
}
// @lc code=end

// 思路
//
// 先判断数字的正负, 并将数字取绝对值后转成字符串数组
// 然后将数组翻转, 不管使用 reverse() 还是双指针都可
// 最后将反转后的数组转成数字返回