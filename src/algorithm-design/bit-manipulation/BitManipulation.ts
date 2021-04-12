/* eslint-disable no-bitwise */

// 判断两个数是否异号
console.log((-1 ^ 1) < 0) // true
console.log((2 ^ 1) < 0) // false

// n & (n - 1)

/*
 * a ^ a = 0
 * a ^ 0 = a
 * a ^ -1 = ~a
 */
