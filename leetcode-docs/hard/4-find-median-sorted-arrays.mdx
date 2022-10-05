---
id: 4-find-median-sorted-arrays
title: 寻找两个正序数组的中位数
sidebar_label: 4. 寻找两个正序数组的中位数
---

## 题目

给定两个大小分别为 `m` 和 `n` 的正序数组 `nums1` 和 `nums2`. 请你找出并返回这两个正序数组的**中位数**.

:::info 示例

```ts
输入: nums1 = [1,3], nums2 = [2]
输出: 2
解释: 合并后的数组 = [1,2,3], 中位数 2
```

```ts
输入: nums1 = [1,2], nums2 = [3,4]
输出: 2.50000
解释: 合并数组 = [1,2,3,4], 中位数 (2 + 3) / 2 = 2.5
```

:::

## 题解

```ts
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
    total /= 2
    isOdd = false
  } else {
    total = (total - 1) / 2
  }

  const arr = []

  let i = 0,
    j = 0

  while (i + j <= total) {
    //  如果 i 已经走到头了, 无论如何也要使用 nums2 的元素
    if (i === m) {
      arr.push(nums2[j])
      j++
      continue
    }
    //  如果 j 已经走到头了, 无论如何也要使用 nums1 的元素
    if (j === n) {
      arr.push(nums1[i])
      i++
      continue
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
```

### O(log (m+n)) 的解法

// TODO:
