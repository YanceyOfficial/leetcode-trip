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
  - 如果 `nums[low] <= nums[mid]`, 也就是左边是有序的, 也就意味着左边部分, 最小的一定是 `nums[low]`, 该值与 min 比较, 如果比 min 小, 就将其设为 min, 此时左边部分已经扫描完了, 因此忽略左边这一部分, 即让 `low = mid + 1`.
  - 否则右边是有序的, 此时右边部分, 最小的一定是 `nums[mid]`, 该值与 min 比较, 如果比 min 小, 就将其设为 min, 此时右边部分已经扫描完了, 因此忽略右边这一部分, 即让 `high = mid`.
- 当循环至 `low <= high` 不成立时, 退出循环, 返回的 min 一定是最小的.

```ts
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0
  let high = nums.length - 1
  let min = nums[0]

  while (low <= high) {
    const mid = ((low + high) / 2) | 0

    if (nums[low] <= nums[mid]) {
      min = min > nums[low] ? nums[low] : min
      low = mid + 1
    } else if (nums[low] > nums[mid]) {
      min = min > nums[mid] ? nums[mid] : min
      high = mid
    }
  }

  return min
}
```

### 别人写的解法

啊, 我太菜了.

```ts
var findMin = function (nums) {
  let low = 0
  let high = nums.length - 1
  while (low < high) {
    const pivot = (low + high) >> 1

    if (nums[pivot] > nums[high]) {
      low = pivot + 1
    } else {
      high = pivot
    }
  }
  return nums[low]
}
```
