/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''

  let prefix = strs[0]
  let flag = false

  while (!flag) {
    flag = strs.every(val => val.indexOf(prefix) === 0)

    if (!flag) {
      prefix = prefix.slice(0, -1)
    }
  }

  return prefix
}
// @lc code=end

// 思路
// 
// 将数组第一个元素设为 prefix
// 声明一个 Boolean 类型的变量 flag, 用于判断是否已经匹配到 LCP
// 在 while 循环中, 使用数组的 every 方法判断 prefix 是否为公共子串
// 如果是的将 flag 设为 true, 跳出循环, 返回 prefix
// 否则将 prefix 赋值成 prefix.slice(0, -1) 继续循环