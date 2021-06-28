---
id: 75-sort-colors
title: 颜色分类
sidebar_label: 75. 颜色分类
---

## 题目

给定一个包含红色, 白色和蓝色, 一共 n 个元素的数组, 原地对它们进行排序, 使得相同颜色的元素相邻, 并按照红色, 白色, 蓝色顺序排列. 此题中, 我们使用整数 0, 1 和 2 分别表示红色, 白色和蓝色.

:::info 示例

输入: [2, 0, 2, 1, 1, 0]

输出: [0, 0, 1, 1, 2, 2]
:::

## 题解

### 菜 🐔 方法

因为我比较菜, 所以先按照提示整了个计数排序的方法. 首先整个 HashMap 将三个值的个数记录一下, 然后再整一遍循环, 按照 0 1 2 的顺序及其个数覆盖 nums 的每个元素.

```ts
/**
 * @param {number[]} nums
 * @return {void} Do not return anything,  modify nums in-place instead.
 */
var sortColors = function (nums) {
  const map = {}
  const len = nums.length
  for (let i = 0; i < len; i++) {
    const curr = nums[i]
    if (map[curr]) {
      map[curr] += 1
    } else {
      map[curr] = 1
    }
  }

  for (let j = 0; j < len; j++) {
    if (map[0] > 0) {
      nums[j] = 0
      map[0] -= 1
    } else if (map[1] > 0) {
      nums[j] = 1
      map[1] -= 1
    } else if (map[2] > 0) {
      nums[j] = 2
      map[2] -= 1
    }
  }

  return nums
}
```

### 双指针解法

当然我也不是那么的菜啦嘻嘻, 双指针也是会写的. 需要注意的是, left 和 right 只能保证 0 和 2 的交换, 因此需要借助 i, 在 nums[i] 为 0 或 1 时向右游走.

```ts
left
 ↓
[2, 0, 2, 1, 1, 0]
 ↑              ↑
 i             right

left
 ↓
[0, 0, 2, 1, 1, 2]
 ↑           ↑
 i         right

   left
    ↓
[0, 0, 2, 1, 1, 2]
    ↑        ↑
    i      right

      left
       ↓
[0, 0, 2, 1, 1, 2]
       ↑     ↑
       i   right

      left
       ↓
[0, 0, 1, 1, 2, 2]
       ↑  ↑
       i right

      left
       ↓
[0, 0, 1, 1, 2, 2]
          ↑
        right
          i

      left
       ↓
[0, 0, 1, 1, 2, 2]
          ↑  ↑
       right i
```

```ts
var sortColors = function (nums) {
  const len = nums.length
  if (len < 2) return

  let left = 0
  let i = 0
  let right = len - 1

  while (i <= right) {
    if (nums[i] === 0) {
      ;[nums[i], nums[left]] = [nums[left], nums[i]]
      left++
      i++
    } else if (nums[i] === 1) {
      i++
    } else {
      ;[nums[i], nums[right]] = [nums[right], nums[i]]
      right--
    }
  }
}
```
