---
id: 1081-smallest-subsequence
title: 不同字符的最小子序列
sidebar_label: 1081. 不同字符的最小子序列
keywords:
  - Stack
---

:::success Tips
题目类型: 单调栈

相关题目:

- [316. 去除重复字母](/leetcode/medium/316-remove-duplicate-letters)
- [402. 移掉 k 位数字](/leetcode/medium/402-remove-kdigits)
- [496. 下一个更大元素-i](/leetcode/easy/496-next-greater-element)
- [503. 下一个更大元素-ii](/leetcode/medium/503-next-greater-elements)
- [739. 每日温度](/leetcode/medium/739-daily-temperatures)

:::

## 题目

返回 s 字典序最小的子序列, 该子序列包含 s 的所有不同字符, 且只包含一次.

:::info 示例

输入: s = "bcabc"

输出: "abc"
:::

## 题解

该题和 [316. 去除重复字母](/leetcode/medium/316-remove-duplicate-letters)相同, 看那道题即可.

```ts
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
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
    // 保证仅出现一次
    if (!stack.includes(letter)) {
      // 单调栈保证按字典序最小
      while (
        stack.length !== 0 &&
        stack[stack.length - 1].charCodeAt() > letter.charCodeAt() &&
        remain.get(stack[stack.length - 1]) > 0
      ) {
        stack.pop()
      }
      stack.push(letter)
    }

    // 循环往右走, 当前元素的剩余量也会减 1, 到最后 remain 里所有元素的值都为 0
    remain.set(letter, remain.get(letter) - 1)
  }

  return stack.join('')
}
```
