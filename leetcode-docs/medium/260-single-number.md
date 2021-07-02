---
id: 260-single-number
title: 只出现一次的数字-iii
sidebar_label: 260. 只出现一次的数字-iii
---

## 题目

给定一个整数数组 nums, 其中恰好有两个元素只出现一次, 其余所有元素均出现两次. 找出只出现一次的那两个元素. 你可以按**任意顺序**返回答案. 进阶: 你的算法应该具有线性时间复杂度. 你能否仅使用常数空间复杂度来实现?

:::info 示例
输入: nums = [1,2,1,3,2,5]

输出: [3,5]

解释: [5, 3] 也是有效的答案.
:::

## 题解

### 通俗解法

```ts
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const set = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i])
    } else {
      set.add(nums[i])
    }
  }

  return [...set]
}
```

### 位运算

TODO:
