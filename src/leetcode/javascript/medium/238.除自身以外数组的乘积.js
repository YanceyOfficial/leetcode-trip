/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length
    const suffixProduct = new Array(n).fill(1)
  
    for (let i = n - 2; i >= 0; i--) {
      suffixProduct[i] = suffixProduct[i + 1] * nums[i + 1]
    }
  
    let prefixProduct = 1
    for (let i = 0; i < n; i++) {
      suffixProduct[i] *= prefixProduct
      prefixProduct *= nums[i]
    }
  
    return suffixProduct
  }
// @lc code=end
