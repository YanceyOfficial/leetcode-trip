---
id: 88-merge
title: 合并两个有序数组
sidebar_label: 88. 合并两个有序数组
---

## 题目

给你两个有序整数数组 nums1 和 nums2, 请你将 nums2 合并到 nums1 中, 使 nums1 成为一个有序数组. 初始化 nums1 和 nums2 的元素数量分别为 m 和 n. 你可以假设 nums1 的空间大小等于 m + n, 这样它就有足够的空间保存来自 nums2 的元素.

:::info 示例

```ts
输入: (nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3)
输出: [1, 2, 2, 3, 5, 6]
```

```ts
输入: (nums1 = [1]), (m = 1), (nums2 = []), (n = 0)
输出: [1]
```

:::

## 题解

```ts
    p1              p2   /       p1            p2     /       p1          p2      /     p1            p2       /     p1          p2
    ↓               ↓    /       ↓             ↓      /       ↓           ↓      /      ↓             ↓       /      ↓           ↓
1 2 3 0 0 0     2 5 6    /   1 2 3 0 0 6     2 5 6    /   1 2 3 0 5 6     2 5 6   /    1 2 3 3 5 6     2 5 6   /    1 2 2 3 5 6     2 5 6
          ↑              /           ↑                /         ↑                 /        ↑                   /      ↑
         tail            /          tail              /        tail               /       tail                 /     tail
```

```ts
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1
  let tail = m + n - 1
  let cur = null
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      cur = nums2[p2--]
    } else if (p2 === -1) {
      cur = nums1[p1--]
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--]
    } else {
      cur = nums2[p2--]
    }
    nums1[tail--] = cur
  }
}
```

## 复杂度

时间复杂度: O(m + n), 指针移动单调递减, 最多移动 m + n 次, 因此时间复杂度为 O(m + n).

空间复杂度：O(1), 直接对数组原地修改, 不需要额外空间.
