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
  const len1 = nums1.length
  const len2 = nums2.length

  // 由于 k 的意义是第 k 个最小的数, 如果不加一就取成索引了.
  const left = Math.floor((len1 + len2 + 1) / 2)
  const right = Math.floor((len1 + len2 + 2) / 2)

  // 求 left 与 right 之和是为了打平奇数长度和偶数长度, 由于最后算了两次, 所以最终结果要除以 2
  return (
    (findkth(nums1, 0, len1 - 1, nums2, 0, len2 - 1, left) +
      findkth(nums1, 0, len1 - 1, nums2, 0, len2 - 1, right)) /
    2
  )
}

var findkth = function (arr1, start1, end1, arr2, start2, end2, k) {
  // 获取两个数组的长度
  const len1 = end1 - start1 + 1
  const len2 = end2 - start2 + 1

  // 如果数组 a 空了, 那最终答案就在数组 b 中寻找, 即 arr2[start2 + k - 1]
  if (len1 === 0) return arr2[start2 + k - 1]

  // 如果数组 b 空了, 那最终答案就在数组 a 中寻找, 即 arr1[start1 + k - 1]
  if (len2 === 0) return arr1[start1 + k - 1]

  // 如果 k === 1, 就说明两个数组的第一个元素中, 最小的那个就是答案
  if (k === 1) return Math.min(arr1[start1], arr2[start2])

  // 每次让数组长度(len1 或 len2) 与 Math.floor(k / 2) 比较, 取最小的那个
  // 这样的目的是如果 Math.floor(k / 2) 比数组的长度大了, 如果去 Math.floor(k / 2) 的话, 数组就越界了
  // 因此需要取两者中最小的, 就保证 i 或者 j 在这种情况就指到了数组的最后一个元素(下一次递归时这个数组长度就为 0 了)
  const i = start1 + Math.min(len1, Math.floor(k / 2)) - 1
  const j = start2 + Math.min(len2, Math.floor(k / 2)) - 1

  if (arr1[i] > arr2[j]) {
    // 如果 arr1[i] > arr2[j], 说明要把 arr2[j] 前 j 个干掉, 即把 start2 设为 j + 1,
    // 此外由于数组 2 被削减了 j - start2 + 1 个, 所以 k 变成 k - (j - start2 + 1)
    return findkth(arr1, start1, end1, arr2, j + 1, end2, k - (j - start2 + 1))
  } else {
    // 同理
    return findkth(arr1, i + 1, end1, arr2, start2, end2, k - (i - start1 + 1))
  }
}
// @lc code=end
