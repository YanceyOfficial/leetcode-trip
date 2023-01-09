/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  let total = m + n

  let isOdd = true

  if (total % 2 === 0) {
    isOdd = false
  }

  total = (total / 2) | 0

  const arr = []

  let i = 0,
    j = 0

  while (i + j <= total) {
    if (i === m) {
      arr.push(...nums2.slice(j))
      break
    }
    if (j === n) {
      arr.push(...nums1.slice(i))
      break
    }
    if (nums1[i] < nums2[j]) {
      arr.push(nums1[i])
      i++
    } else {
      arr.push(nums2[j])
      j++
    }
  }

  if (isOdd) {
    return arr[total]
  } else {
    return (arr[total] + arr[total - 1]) / 2
  }
}
// @lc code=end
