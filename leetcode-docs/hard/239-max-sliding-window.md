---
id: 239-max-sliding-window
title: 滑动窗口最大值
sidebar_label: 239. 滑动窗口最大值
---

## 题目

给你一个整数数组 nums, 有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧. 你只可以看到在滑动窗口内的 k 个数字. 滑动窗口每次只向右移动一位. 返回滑动窗口中的最大值.

:::info 示例

```ts
输入: nums = [1,3,-1,-3,5,3,6,7], k = 3
输出: [3,3,5,5,6,7]

滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

:::

## 题解

### 直观解法

像我这种垃圾, 菜鸡, 废物一开始肯定会这么写, 心里还在嘲笑一道 hard 为什么简单, 直到提交的时候告诉我 Time Limit Exceeded.

```ts
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let left = 0,
    right = k

  const res = []

  while (right <= nums.length) {
    const sub = nums.slice(left, right)
    const max = Math.max(...sub)
    res.push(max)
    left++
    right++
  }

  return res
}
```

### 优雅解法
