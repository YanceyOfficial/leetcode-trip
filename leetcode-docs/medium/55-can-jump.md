---
id: 55-can-jump
title: 跳跃游戏
sidebar_label: 55. 跳跃游戏
keywords:
  - Greedy
---

:::success Tips
题目类型: Greedy

相关题目:

- [435. 无重叠区间](/leetcode/medium/435-erase-overlap-intervals)
- [452. 用最少数量的箭引爆气球](/leetcode/medium/452-find-min-arrow-shots)

:::

## 题目

给定一个非负整数数组 `nums`, 你最初位于数组的**第一个下标**. 数组中的每个元素代表你在该位置可以跳跃的最大长度. 判断你是否能够到达最后一个下标.

:::info 示例

```ts
输入: nums = [2,3,1,1,4]
输出: true
解释: 可以先跳 1 步, 从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标. 
```

```ts
输入: nums = [3,2,1,0,4]
输出: false
解释: 无论怎样, 总会到达下标为 3 的位置. 但该下标的最大跳跃长度是 0, 所以永远不可能到达最后一个下标. 
```

:::

## 题解

我们把这个题转化一下, 变成: 按照题目的规则, 最多能跳多远, 如果能越过最后一个, 返回 true, 否则返回 false. 因此这道题就变成了动态规划, 因为是在求最值嘛.

什么是贪心算法呢: 每一步都计算一下从当前位置最远能够跳到哪里, 然后和一个全局最优的最远位置 farthest 做对比, 通过每一步的最优解, 更新全局最优解, 这就是贪心.

```ts

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const n = nums.length
    let farthest = 0

    for (let i = 0; i < n - 1; i++) {
        // 不断计算能跳到的最远距离
        farthest = Math.max(farthest, i + nums[i])
        // 可能碰到了 0, 卡住跳不动了
        if (farthest <= i) return false
    }

    return farthest >= n - 1
}
```
