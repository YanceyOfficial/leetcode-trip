---
id: 503-next-greater-elements
title: 下一个更大元素-ii
sidebar_label: 503. 下一个更大元素-ii
keywords:
  - Stack
---

:::success Tips
题目类型: 单调栈

相关题目:

- [496. 下一个更大元素-i](/leetcode/easy/496-next-greater-element)
- [739. 每日温度](/leetcode/medium/739-daily-temperatures)
:::

## 题目

给定一个循环数组(最后一个元素的下一个元素是数组的第一个元素), 输出每个元素的下一个更大元素. 数字 x 的下一个更大的元素是按数组遍历顺序, 这个数字之后的第一个比它更大的数, 这意味着你应该循环地搜索它的下一个更大的数. 如果不存在, 则输出 -1.

:::info 示例

输入: [1, 2, 1]

输出: [2, -1, 2]

解释:

第一个 1 的下一个更大的数是 2;

数字 2 找不到下一个更大的数;

第二个 1 的下一个最大的数需要循环搜索, 结果也是 2.
:::

## 题解

还是使用单调栈, 对于**循环数组**, 一个技巧是使用**取模运算**来模拟数组长度加倍.

```ts
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const len = nums.length
  const stack = []
  const res = new Array(len).fill(-1)

  for (let i = 0; i < len * 2 - 1; i++) {
    while (
      stack.length !== 0 &&
      nums[stack[stack.length - 1]] < nums[i % len]
    ) {
      res[stack[stack.length - 1]] = nums[i % len]
      stack.pop()
    }

    stack.push(i % len)
  }

  return res
}
```

## 附: 单调栈基本框架

```ts
var nextGreaterElements = function (nums) {
  const len = nums.length
  const stack = []
  const res = new Array(len).fill(-1)

  for (let i = 0; i < len; i++) {
    while (stack.length !== 0 && nums[stack[stack.length - 1]] < nums[i]) {
      res[stack[stack.length - 1]] = nums[i]
      stack.pop()
    }

    stack.push(i)
  }

  return res
}
```
