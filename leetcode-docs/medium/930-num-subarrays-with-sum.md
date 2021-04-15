---
id: 930-num-subarrays-with-sum
title: 和相同的二元子数组
sidebar_label: 930. 和相同的二元子数组
keywords:
  - 前缀和
---

:::success Tips
题目类型: 前缀和

相关题目:

- [560. 和为 k 的子数组 32](/leetcode/medium/560-subarray-sum)
  :::

## 题目

在由若干 0 和 1 组成的数组 A 中, 有多少个和为 S 的非空子数组.

提示:

1. A.length <= 30000
2. 0 <= S <= A.length
3. A[i] 为 0 或 1

:::info 示例

输入: A = [1,0,1,0,1], S = 2

输出: 4

解释:

如下面所示, 有 4 个满足题目要求的子数组:

- [1,0,1] (前三个)
- [1,0,1,0] (前四个)
- [0,1,0,1] (第二个到第五个)
- [1,0,1] (第三个到第五个)
  :::

## 题解

这道题的解法跟 [560. 和为 k 的子数组 32](/leetcode/medium/560-subarray-sum) 一模一样, 看那篇文章即可.

```ts
/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function (A, S) {
  const map = new Map([[0, 1]])
  let count = 0
  let sum = 0

  for (const num of A) {
    sum += num
    if (map.has(sum - S)) {
      count += map.get(sum - S)
    }

    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1)
    } else {
      map.set(sum, 1)
    }
  }

  return count
}
```
