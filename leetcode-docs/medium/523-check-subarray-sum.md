---
id: 523-check-subarray-sum
title: 连续的子数组和
sidebar_label: 523. 连续的子数组和
keywords:
  - 前缀和
---

:::success Tips
题目类型: 前缀和

相关题目:

- [560. 和为 k 的子数组](/leetcode/medium/560-subarray-sum)
- [930. 和相同的二元子数组](/leetcode/medium/930-num-subarrays-with-sum)
:::

## 题目

给定一个包含**非负数的数组**和一个**目标整数 k**, 编写一个函数来判断该数组是否含**有连续的子数组**, 其长度至少为 2, 且总和为 k 的倍数, 即总和为 `n * k`, 其中 n 也是一个整数.

:::info 示例

```ts
输入: nums = [23, 2, 4, 6, 7], k = 6
输出: true
解释: [2, 4] 是长度为 2 的子数组, 并且和为 6, 是 k 的倍数, 符合要求.
```

```ts
输入: nums = [23, 2, 6, 4, 7], k = 6
输出: true
解释: [23, 2, 6, 4, 7] 是长度为 5 的子数组, 并且和为 42, 是 k 的倍数, 符合要求.
```

:::

## 题解

### 暴力法 🐸

显而易见, 可以整个双循环, 把所有的子数组枚举出来, 具体解释直接看下面代码注释. 然鹅, 在跑到倒数第二个 case 时, Time Limit Exceeded 了.

```ts
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const len = nums.length

  for (let i = 0; i < len; i++) {
    let sum = 0
    for (let j = i; j < len; j++) {
      sum += nums[j]

      // 是 k 的倍数, 且长度大于等于 2, 返回 true
      if (sum % k === 0 && j - i > 0) return true
    }
  }

  return false
}
```

### 前缀和 + hashmap

这道题跟 [560. 和为 k 的子数组](/leetcode/medium/560-subarray-sum), [930. 和相同的二元子数组](/leetcode/medium/930-num-subarrays-with-sum) 差不多, 都是 前缀和 + hashmap. 这道题 hashmap 的 key 存储的是**余数**, val 存的是**索引**.

```ts
var checkSubarraySum = function (nums, k) {
  const len = nums.length
  let preSum = 0
  // 初始化的索引为 -1
  const map = new Map([[0, -1]])

  for (let i = 0; i < len; i++) {
    preSum += nums[i]

    // 这里要小心 k 为 0 的情况, 因为 0 不能做除数
    const key = k === 0 ? preSum : preSum % k
    if (map.has(key)) {
      if (i - map.get(key) >= 2) return true

      // 因为我们需要保存最小索引, 当已经存在时则不用再次存入, 不然会更新索引值
      continue
    }

    map.set(key, i)
  }

  return false
}
```
