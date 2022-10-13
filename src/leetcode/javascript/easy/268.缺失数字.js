/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const len = nums.length
  const total = ((1 + len) * len) / 2

  return total - nums.reduce((acc, val) => acc + val)
}
// @lc code=end

// 异或运算. https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484477&idx=1&sn=13834cfd618377385226c3dc598b2c28&chksm=9bd7fa35aca0732374dc34c78c276b982605892caf69cb31ad9a6c3685de5dbccac81989b195&scene=21#wechat_redirect
