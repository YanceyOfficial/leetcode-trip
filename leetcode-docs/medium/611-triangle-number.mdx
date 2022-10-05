---
id: 611-triangle-number
title: 有效三角形的个数
sidebar_label: 611. 有效三角形的个数
---

## 题目

给定一个包含非负整数的数组, 你的任务是统计其中可以组成三角形三条边的三元组个数.

:::info 示例

```ts
输入: [2, 2, 3, 4]
输出: 3
解释:
有效的组合是:
2, 3, 4 (使用第一个 2)
2, 3, 4 (使用第二个 2)
2, 2, 3
```

:::

## 题解

1. 先排序
2. 固定住一个数(从最大的数开始), 其余的用双指针游走
3. 如果两边之和大于第三边, 则是合法的三角形, 缩短右指针继续试探, 否则缩短左指针继续试探

```ts
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  let res = 0
  const n = nums.length
  if (n < 3) return res
  nums.sort((a, b) => a - b)

  for (let i = n - 1; i >= 2; i--) {
    const tail = nums[i]
    let j = 0,
      k = i - 1

    while (j < k) {
      if (nums[j] + nums[k] > tail) {
        res += k - j
        k--
      } else {
        j++
      }
    }
  }
  return res
}
```
