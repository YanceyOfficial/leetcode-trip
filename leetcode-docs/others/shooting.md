---
id: shooting
title: 打靶问题
sidebar_label: 打靶问题
---

## 题目

一个射击运动员打靶, 靶共有 10 环(0 - 10), 连开 10 枪打中 90 环的可能性有多少种?

:::info 示例

输入: score = 90, times = 10

输出: 92378

:::

## 题解

```ts
/**
 * @param {Number} score 目标打靶总得分
 * @param {Number} times 可打靶的次数
 * @return {Number}
 */
function shooting(score, times) {
  if (score < 0 || score > 10 * times) {
    // 不可能的情况
    return 0
  }
  if (score === 0 && times === 0) {
    // 结束递归
    return 1
  }

  let ans = 0
  for (let i = 0; i <= 10; i++) {
    ans += shooting(score - i, times - 1)
  }

  return ans
}

console.log(shooting(90, 10))
```
