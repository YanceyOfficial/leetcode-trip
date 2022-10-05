---
id: 81-search
title: 搜索旋转排序数组-ii
sidebar_label: 81. 搜索旋转排序数组-ii
---

## 题目

本题为 [33.搜索旋转排序数组](/leetcode/medium/33-search) 的扩展, 在此基础上的 nums 可能包含重复元素.

:::info 示例

```bash
输入: nums = [2, 5, 6, 0, 0, 1, 2], target = 0

输出: true
```

```bash
输入: nums = [1, 0, 1, 1, 1], target = 0

输出: true
```

:::

## 题解

本题额外关注的就是 `nums = [1, 0, 1, 1, 1]` 这种情况, 此时 `nums[mid]` 跟 `nums[left]` 相等, 分不清到底是前面有序还是后面有序, 因此让 `left++` 即可, 相当于去掉一个重复的干扰项.

```ts {15,16,17,18,19}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = (left + (right - left) / 2) | 0

    if (nums[mid] === target) return true

    // 去掉重复项
    if (nums[left] === nums[mid]) {
      left++
      continue
    }

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return false
}
```

## 复杂度

因为增加了一次跳过判断操作, 因此循环会完全走一趟, 时间复杂度为 O(n)
