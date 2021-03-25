---
id: 239-max-sliding-window
title: 滑动窗口最大值
sidebar_label: 239. 滑动窗口最大值
---

## 题目

给你一个整数数组 nums, 有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧. 你只可以看到在滑动窗口内的 k 个数字. 滑动窗口每次只向右移动一位. 返回滑动窗口中的最大值.

:::info 示例

```ts
输入: nums = [1,3,-1,-3,5,3,6,7], k = 3
输出: [3,3,5,5,6,7]

滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

:::

## 题解

### 直观解法

像我这种垃圾, 菜鸡, 废物一开始肯定会这么写, 心里还在嘲笑一道 hard 为什么简单, 直到提交的时候告诉我 Time Limit Exceeded.

```ts
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let left = 0,
    right = k

  const res = []

  while (right <= nums.length) {
    const sub = nums.slice(left, right)
    const max = Math.max(...sub)
    res.push(max)
    left++
    right++
  }

  return res
}
```

### 优雅解法

使用双端队列, 队首始终保存窗口中最大的元素(滑进窗口的那个数要通过与队尾比较找到属于自己的位置, 比队尾大要不断弹出队尾, 把自己插进去; 比队尾小则让自己成为队尾), 在窗口滑动过程中检查最大值是否还在窗口内, 否则就弹出. 这样记录下每次滑动时的队首就行了.

```ts
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


var maxSlidingWindow = function (nums, k) {
  // deque 中存储的是 nums 中每个元素的下标
  const deque = []
  const maxs = []
  const len = nums.length

  if (len === 0 && k <= 0) return maxs

  for (let i = 0; i < len; i++) 
    // 如果队列不为空且队尾对应的元素小于当前遍历到的值,
    // 则弹出当前队尾, 直到队尾没有小于 i 所对应的元素,
    // 这样就确保了队首对应的元素始终是最大的.
    while (deque.length !== 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop()
    }

    // 队尾弹入 i
    deque.push(i)

    // 如果队首所对应的元素不在窗口内, 则弹出
    if (deque[0] <= i - k) {
      deque.shift()
    }

    // 只有当 i 大于等于窗口大小时才能写入窗口的最大值
    if (i >= k - 1) {
      maxs.push(nums[deque[0]])
    }
  }

  return maxs
}
```
