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
  const total = m + n
  let isOdd = true

  if (total % 2 === 0) {
    isOdd = false
  }

  const mid = (total / 2) | 0
  const arr = []

  let i = 0,
    j = 0

  while (i + j <= mid) {
    // 如果 i 已经走到头了, 需要把 nums2 剩下的元素放到 arr 最后
    if (i === m) {
      arr.push(...nums2.slice(j))
      break
    }
    //  如果 j 已经走到头了, 需要把 nums1 剩下的元素放到 arr 最后
    if (j === n) {
      arr.push(...nums1.slice(i))
      break
    }
    if (nums1[i] < nums2[j]) {
      arr.push(nums1[i++])
    } else {
      arr.push(nums2[j++])
    }
  }

  return isOdd ? arr[mid] : (arr[mid] + arr[mid - 1]) / 2
}
// @lc code=end
