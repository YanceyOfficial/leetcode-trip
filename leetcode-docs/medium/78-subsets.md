---
id: 78-subsets
title: 子集
sidebar_label: 78. 子集
keywords:
  - backtrack
---

## 题目

给定一个**不包含重复元素**的整数数组 nums, 返回该数组所有可能的子集.

说明: 解集不能包含重复的子集.

:::info 示例

```ts
输入: nums = [1, 2, 3]

输出: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
```

```ts
输入: nums = [0]

输出: [[], [0]]
```

:::

## 题解

用 for 枚举出当前可选的数, 比如选第一个数: 1、2、3 可选.

- 如果第一个数选 1, 选第二个数, 2、3 可选;
- 如果第一个数选 2, 选第二个数, 只有 3 可选(不能选 1, 产生重复组合)s
- 如果第一个数选 3, 没有第二个数可选
- 每次传入子递归的 begin 是: 当前你选的数的索引 +1.

每次递归枚举的选项变少, 一直递归到没有可选的数字, 进入不了 for 循环, 就进入不了递归, 整个 DFS 结束. 我们没有显式地设置递归的出口, 而是通过控制循环的起点, 使得最后递归自然结束.

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const len = nums.length
  const res = []

  const backtrack = (begin, track) => {
    res.push(track.slice()) // 调用子递归前, 加入解集

    for (let i = begin; i < len; i++) {
      // 枚举出所有可选的数
      track.push(nums[i]) // 选这个数
      backtrack(i + 1, track) // 基于选这个数, 继续递归, 传入的是 i + 1
      track.pop() // 撤销选这个数
    }
  }

  backtrack(0, [])

  return res
}
```
