---
id: 34-search-range
title: 在排序数组中查找元素的第一个和最后一个位置
sidebar_label: 34. 在排序数组中查找元素的第一个和最后一个位置
---

## 题目

在从小到大排序的数组 nums 中, 找出 target 的第一个和最后一个位置的索引的数组.

:::info 示例

```ts
输入: (nums = [6, 7, 8, 8, 10]), (target = 8)

输出: [2, 3]
```

```ts
输入: (nums = [1]), (target = 1)

输出: [0, 0]
```

```ts
输入: (nums = [1]), (target = 0)

输出: [-1, -1]
```

:::

## 题解

先写好二分查找的基本框架, 然后考察几个特例:

- `nums = [4, 6, 8, 9, 10], target = 6`, 此时 nums[mid] 为 8, 大于 target, 那必然 right = mid - 1
- `nums = [4, 6, 8, 9, 10], target = 9`, 此时 nums[mid] 为 8, 小于 target, 那必然 left = mid + 1
- `nums = [4, 6, 8, 8, 9, 10], target = 8`, 此时 nums[mid] 为 8, 等于 target, 但我们要获取的是一个区间范围, 因此:
  - 如果 nums[left] 小于了 target, 那就尝试让 left 往右走一步(夹逼准则, 挤挤更健康!!!)
  - 如果 nums[right] 大于了 target, 那就尝试让 right 往左走一步(夹逼准则, 挤挤更健康!!!)
  - 如果 nums[left] 和 nums[right] 同时都等于了 target, 我们也就找到了这个区间范围, 返回即可
- `nums = [2], target = 0`, 此时 nums[mid] 为 2, 大于 target, 那必然 right = mid - 1, 而此时 right 就小于了 left, 退出循环, 返回 [-1, -1].
- `nums = [2], target = 5`, 此时 nums[mid] 为 2, 小于 target, 那必然 left = mid + 1, 而此时 left 就大于了 right, 退出循环, 返回 [-1, -1].
- 最后考虑边界, 对于 nums 为空数组的情况, 直接返回 [-1, -1] 完活.

```ts
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      if (nums[left] < target) {
        left += 1
      }

      if (nums[right] > target) {
        right -= 1
      }

      if (nums[left] === target && nums[right] === target) {
        return [left, right]
      }
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }
  return [-1, -1]
}
```
