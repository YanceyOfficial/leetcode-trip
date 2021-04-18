---
id: 316-remove-duplicate-letters
title: 去除重复字母
sidebar_label: 316. 去除重复字母
keywords:
  - Stack
---

:::success Tips
题目类型: 单调栈

相关题目:

- [402. 移掉 k 位数字](/leetcode/medium/402-remove-kdigits)
- [496. 下一个更大元素-i](/leetcode/easy/496-next-greater-element)
- [503. 下一个更大元素-ii](/leetcode/medium/503-next-greater-elements)
- [739. 每日温度](/leetcode/medium/739-daily-temperatures)
- [1081. 不同字符的最小子序列](/leetcode/medium/1081-smallest-subsequence)

:::

## 题目

给你一个字符串 s, 请你去除字符串中重复的字母, 使得每个字母只出现一次.需保证**返回结果的字典序最小(要求不能打乱其他字符的相对位置)**.

:::info 示例

```ts
输入: s = 'bcabc'
输出: 'abc'
```

```ts
输入: s = 'cbacdcbc'
输出: 'acdb'
```

:::

## 题解

1. 首先用 hashmap 收集 s 中每个元素的个数
2. 使用单调栈, 具体看注释, 这道题去掉元素的方法跟 [402. 移掉 k 位数字](/leetcode/medium/402-remove-kdigits) 一致, 都是**栈尾元素比当前元素大, 栈尾元素就应该被当前元素替换**

```ts
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const remain = new Map()
  for (const letter of s) {
    if (remain.has(letter)) {
      remain.set(letter, remain.get(letter) + 1)
    } else {
      remain.set(letter, 1)
    }
  }

  const stack = []
  for (const letter of s) {
    // 保证栈中不会出现重复元素
    if (!stack.includes(letter)) {
      // 单调栈保证按字典序最小
      while (
        stack.length !== 0 &&
        // 如果栈尾元素比当前元素大, 栈尾元素就应该被当前元素替换
        stack[stack.length - 1].charCodeAt() > letter.charCodeAt() &&
        // 当然如果栈尾元素再删就没了, 这个元素也不能被替换
        remain.get(stack[stack.length - 1]) > 0
      ) {
        stack.pop()
      }
      stack.push(letter)
    }

    // 循环往右走, 意味着当前元素的剩余量也会减 1, 到最后 remain 里所有元素的值都为 0
    remain.set(letter, remain.get(letter) - 1)
  }

  return stack.join('')
}
```
