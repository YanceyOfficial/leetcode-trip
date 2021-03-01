/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const dirs = path.split('/')
  const stack = []
  for (const i of dirs) {
    if (i === '.' || i === '') continue
    if (i === '..') {
      if (stack.length > 0) {
        stack.pop()
      }
      continue
    }
    stack.push(i)
  }

  return '/' + stack.join('/')
}
// @lc code=end

// 首先切分路径：将路径以"/"切分
// 分析切分路径后存在的特殊情况(非文件夹名)
// "." 和 "" (多个'/'的情况 切分后会为"")的情况 什么也不做
// ".." 返回上层目录
// ["", "a", ".", "b", "..", "..", "c", ""]
