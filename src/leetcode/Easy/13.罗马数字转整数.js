/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romaMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  }
  const romaSplit = s.match(/(CM)|(CD)|(XC)|(XL)|(IX)|(IV)|(\w)/g)
  return romaSplit.reduce((acc, val) => acc + romaMap[val], 0)
}
// @lc code=end

// 思路
//
// 先根据 6 种特殊情况将罗马数字切成数组
// 再根据 romaMap 将所有的元素累加和
