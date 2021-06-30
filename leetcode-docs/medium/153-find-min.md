---
id: 153-find-min
title: 寻找旋转排序数组中的最小值
sidebar_label: 153. 寻找旋转排序数组中的最小值
---

## 题目

假设按照升序排序的数组在预先未知的某个点上进行了旋转. 例如, 数组 `[0, 1, 2, 4, 5, 6, 7]` 可能变为 `[4, 5, 6, 7, 0, 1, 2]`. 请找出该数组中最小的元素.

:::info 示例

```ts
输入: nums = [3, 4, 5, 1, 2]

输出: 1
```

```ts
输入: nums = [4, 5, 6, 7, 0, 1, 2]

输出: 0
```

:::

## 题解

### 我写的解法

- 设置一个变量 `min`, 初始化为数组的第一个元素
- 在循环中:
  - 如果 `nums[lo] <= nums[mid]`, 也就是左边是有序的, 也就意味着左边部分, 最小的一定是 `nums[lo]`, 该值与 min 比较, 如果比 min 小, 就将其设为 min, 此时左边部分已经扫描完了, 因此忽略左边这一部分, 即让 `lo = mid + 1`.
  - 否则右边是有序的, 此时右边部分, 最小的一定是 `nums[mid]`, 该值与 min 比较, 如果比 min 小, 就将其设为 min, 此时右边部分已经扫描完了, 因此忽略右边这一部分, 即让 `hi = mid`.
- 当循环至 `lo <= hi` 不成立时, 退出循环, 返回的 min 一定是最小的.

```ts
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let lo = 0
  let hi = nums.length - 1
  let min = nums[0]

  while (lo <= hi) {
    const mid = ((lo + hi) / 2) | 0

    if (nums[lo] <= nums[mid]) {
      min = min > nums[lo] ? nums[lo] : min
      lo = mid + 1
    } else if (nums[lo] > nums[mid]) {
      min = min > nums[mid] ? nums[mid] : min
      hi = mid
    }
  }

  return min
}
```

### 别人写的解法

啊, 我太菜了.

```ts
var findMin = function (nums) {
  let lo = 0,
    hi = nums.length - 1
  while (lo < hi) {
    const mid = (lo + hi) >> 1

    if (nums[mid] > nums[hi]) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }
  return nums[lo]
}
```
