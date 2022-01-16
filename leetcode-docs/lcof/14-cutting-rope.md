---
id: 14-cutting-rope
title: 剪绳子
sidebar_label: 14. 剪绳子
keywords:
  - Greedy
  - Dynamic Programming
---

:::success Tips
题目类型: Greedy, Dynamic Programming

相关题目:

- [45. 跳跃游戏-ii](/leetcode/medium/45-jump)
- [435. 无重叠区间](/leetcode/medium/435-erase-overlap-intervals)
- [452. 用最少数量的箭引爆气球](/leetcode/medium/452-find-min-arrow-shots)

本题和 [343. 整数拆分](/leetcode/medium/343-integer-break) 重复.

:::

## 题目

给定一个正整数 n, 将其拆分为至少两个正整数的和, 并使这些整数的乘积最大化. 返回你可以获得的最大乘积. 你可以假设 n 不小于 2 且不大于 58.

:::info 示例

```ts
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1.
```

```ts
输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
```

:::

## 题解

### 动态规划

1. 要想求长度为 n 的绳子被裁剪后的乘积, 可以从前面比 n 小的绳子转移而来
2. 用一个 dp 数组记录从 0 到 n 长度的绳子剪掉后的最大乘积, 也就是 dp[i] 表示长度为 i 的绳子剪成 m 段后的最大乘积, 初始化 dp[2] 为 1
3. 我们先把绳子剪掉第一段(长度为 j), 如果只剪掉长度为 1, 对最后的乘积无任何增益, 所以从长度为 2 开始剪
4. 剪了第一段后, 剩下 i - j 长度可以剪也可以不剪: 如果不剪, 那乘积就是 `j * (i - j)`, 如果剪了, 那乘积就是 `j * dp[i - j]`
5. j 在 [2, i) 区间游走, 因此也要和 dp[i] 比较取一个最大值
6. 因此状态转移方程为 `dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]))`

```ts
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  const dp = new Array(n + 1).fill(0)
  dp[2] = 1

  for (let i = 3; i < n + 1; i++) {
    for (let j = 2; j < i; j++) {
      dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]))
    }
  }

  return dp[n]
}
```

### 贪心

核心思路是: 尽可能把绳子分成长度为 3 的小段, 这样乘积最大

1. 如果 n == 2, 返回 1, 如果 n 3, 返回 2, 两个可以合并成 n 小于 4 的时候返回 n - 1
2. 如果 n == 4, 返回 4
3. 如果 n > 4, 分成尽可能多的长度为 3 的小段, 每次循环长度 n 减去 3, 乘积 res 乘以 3; 最后返回时乘以小于等于 4 的最后一小段

以上 2 和 3 可以合并

```ts
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n < 4) {
    return n - 1
  }
  let res = 1
  while (n > 4) {
    res = res * 3
    n -= 3
  }
  return res * n
}
```

### 剪绳子 2 - 取模

```ts
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n < 4) {
    return n - 1
  }
  let res = 1
  while (n > 4) {
    res = (res * 3) % 1000000007
    n -= 3
  }
  return (res * n) % 1000000007
}
```
