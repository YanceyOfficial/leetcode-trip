/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const lenA = a.length
  const lenB = b.length
  const len = lenA > lenB ? lenA : lenB

  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      b = '0' + b
    }
  } else {
    for (let i = 0; i < lenB - lenA; i++) {
      a = '0' + a
    }
  }

  const arrA = a.split('').reverse()
  const arrB = b.split('').reverse()
  const arr = []

  for (let i = 0; i < len; i++) {
    arr.push(parseInt(arrA[i], 10) + parseInt(arrB[i], 10))
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 2) {
      arr[i] -= 2
      arr[i + 1] = i + 1 >= arr.length ? 1 : arr[i + 1] + 1
    }
  }

  return arr.reverse().join('')
}
// @lc code=end

console.log(addBinary('1010', '1011'))
