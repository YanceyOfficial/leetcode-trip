---
id: 57-find-continuous-sequence
title: 和为 s 的连续正数序列
sidebar_label: 57. 和为 s 的连续正数序列
keywords:
  - 滑动窗口
  - 回溯
---

## 题目

输入一个正整数 target, 输出所有和为 target 的连续正整数序列(至少含有两个数).

:::info 示例

输入: target = 15

输出: [[1,2,3,4,5],[4,5,6],[7,8]]
:::

## 题解

### 回溯

面腾讯的时候被问到了这个题, 一看到二维数组就魔怔了, 先想到的是回溯... 思路很简单, 就是回溯所有的可能, 并做剪枝:

- 通过 begin 保证已经用过的数字不能再被使用
- 通过 `i - track[track.length - 1] > 1` 来保证当前数字比前一个大 1, 以保证连续.

然而, 在力扣上跑了下, 超时了...

```ts
var findContinuousSequence = function (target) {
  const res = []

  const backtrack = (begin, track, sum) => {
    if (sum === 0) {
      res.push(track.slice())
      return
    }

    for (let i = begin; i < target; i++) {
      if (sum > 0) {
        if (i > 0 && i - track[track.length - 1] > 1) continue
        track.push(i)
        backtrack(i + 1, track, sum - i)
        track.pop()
      }
    }
  }

  backtrack(1, [], target)

  return res
}
```

### 滑动窗口

首先题目说了每个子数组的长度至少为 2, 因此你只要关心 target 长度的一半即可, 比如 `target = 15`, 那么最后两个肯定是 `[7, 8]`, 再往后的组合一定会大于 15, 直接舍弃.

下面就是正经的滑动窗口:

- 如果 sum < target, 说明需要扩大窗口, 即 j 往右移动
- 如果 sum > target, 说明需要缩小窗口, 即 i 往右移动
- 如果相等了, 就把子数组加入到结果集中, 要注意此时需要缩小窗口, 以保证 sum 处于小于 target 的状态

```ts
var findContinuousSequence = function (target) {
  let i = 1,
    j = 1
  let sum = 0
  const res = []

  // 只关心一半
  while (i <= target >> 1) {
    if (sum < target) {
      sum += j
      j++
    } else if (sum > target) {
      sum -= i
      i++
    } else {
      const tmp = []
      for (let k = i; k < j; k++) {
        tmp.push(k)
      }
      res.push(tmp)

      // 缩小窗口, 保证 sum 处于小于 target 的状态, 可以进行下次探索
      sum -= i
      i++
    }
  }

  return res
}
```
