---
id: 739-daily-temperatures
title: 每日温度
sidebar_label: 739. 每日温度
keywords:
  - Stack
---

:::success Tips
题目类型: 单调栈

相关题目:

- [316. 去除重复字母](/leetcode/medium/316-remove-duplicate-letters)
- [402. 移掉k位数字](/leetcode/medium/402-remove-kdigits)
- [496. 下一个更大元素-i](/leetcode/easy/496-next-greater-element)
- [503. 下一个更大元素-ii](/leetcode/medium/503-next-greater-elements)
- [1081. 不同字符的最小子序列](/leetcode/medium/1081-smallest-subsequence)

:::

## 题目

请根据每日气温列表, 重新生成一个列表. 对应位置的输出为: 要想观测到更高的气温, 至少需要等待的天数. 如果气温在这之后都不会升高, 请在该位置用 0 来代替.

:::info 示例

输入: temperatures = [73, 74, 75, 71, 69, 72, 76, 73]

输出: [1, 1, 4, 2, 1, 1, 0, 0]
:::

## 题解

使用单调栈, `i - prevIndex` 即是距离.

```ts
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const len = T.length
  const stack = []
  const res = new Array(len).fill(0)

  for (let i = 0; i < len; i++) {
    while (stack.length !== 0 && T[stack[stack.length - 1]] < T[i]) {
      const prevIndex = stack.pop()
      res[prevIndex] = i - prevIndex
    }
    stack.push(i)
  }

  return res
}
```

时间复杂度: O(n), 其中 n 是温度列表的长度. 正向遍历温度列表一遍, 对于温度列表中的每个下标. 最多有一次进栈和出栈的操作.

空间复杂度: O(n), 其中 n 是温度列表的长度. 需要维护一个单调栈存储温度列表中的下标.
