/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  // 计算阶乘数组
  const factorial = [1]
  for (let i = 1; i <= n; i++) {
    factorial[i] = factorial[i - 1] * i
  }

  // 初始化候选数字数组
  const numbers = []
  for (let i = 1; i <= n; i++) {
    numbers.push(i)
  }

  // k需要调整为0基数
  k--

  let result = ''

  for (let i = n; i >= 1; i--) {
    // 确定当前位使用哪个数字
    const index = Math.floor(k / factorial[i - 1])
    result += numbers[index]

    // 移除选定的数字
    numbers.splice(index, 1)

    // 更新k
    k %= factorial[i - 1]
  }

  return result
}
// @lc code=end
