---
id: 398-solution
title: 随机数索引
sidebar_label: 398. 随机数索引
keywords:
  - 水塘抽样算法(蓄水池抽样算法)
---

:::success Tips
题目类型: 水塘抽样算法(蓄水池抽样算法)

相关题目:

- [382. 链表随机节点](/leetcode/medium/382-solution)

:::

## 题目

给定一个可能含有重复元素的整数数组, 要求随机输出给定的数字的索引. 您可以假设给定的数字一定存在于数组中.

:::info 示例

```ts
const nums = [1, 2, 3, 3, 3]
const solution = new Solution(nums)

// pick(3) 应该返回索引 2,3 或者 4. 每个索引的返回概率应该相等.
solution.pick(3)

// pick(1) 应该返回 0. 因为只有nums[0]等于 1.
solution.pick(1)
```

:::

## 题解

这里是题解这里是题解这里是题解这里是题解这里是题解

```ts
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums
}

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let cnt = 0
  let index = -1
  for (let i = 0; i < this.nums.length; ++i) {
    if (this.nums[i] !== target) {
      continue
    }
    ++cnt
    if (Math.floor(Math.random() * cnt) === 0) {
      index = i
    }
  }
  return index
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
```
