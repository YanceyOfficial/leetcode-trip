---
id: 66-plus-one
title: 加一
sidebar_label: 66. 加一
---

## 题目

给定一个由**整数**组成的非空数组所表示的非负整数, 在该数的基础上加一. 最高位数字存放在数组的首位, 数组中每个元素只存储单个数字. 你可以假设除了整数 0 之外, 这个整数不会以零开头.

:::info 示例

输入: digits = [9, 9]

输出: [1, 0, 0]
:::

## 题解

从后往前循环, 逢 9 化 0, 如果位数不够, 最前面补 1; 如果当前位不是 9, 该位直接 +1 跳出循环.

```ts
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let n = digits.length - 1

  while (n >= 0) {
    if (digits[n] === 9) {
      digits[n] = 0
      if (!digits[n - 1]) digits.unshift(1)
    } else {
      digits[n] += 1
      break
    }
    --n
  }

  return digits
}
```
