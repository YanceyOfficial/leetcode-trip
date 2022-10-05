---
id: 347-top-k-frequent
title: 前-k-个高频元素
sidebar_label: 347. 前-k-个高频元素
keywords:
  - topK
  - 二叉堆
  - 优先队列
---

:::success Tips
题目类型: topK

相关题目:

- [剑指 Offer - 40. 最小的 k 个数](/leetcode/lcof/40-get-least-numbers)
- [215. 数组中的第 k 个最大元素](/leetcode/medium/215-find-kth-largest)

:::

## 题目

给你一个整数数组 `nums` 和一个整数 `k`, 请你返回其中**出现频率前 `k` 高的元素**. 你可以按**任意顺序**返回答案.

- `1 <= nums.length <= 105`
- `k` 的取值范围是 `[1, 数组中不相同的元素的个数]`
- 题目数据保证答案唯一, 换句话说, 数组中前 `k` 个高频元素的集合是唯一的
- 你所设计算法的时间复杂度**必须**优于 `O(nlogn)`, 其中 `n` 是数组大小

:::info 示例

输入: nums = [1,1,1,2,2,3], k = 2

输出: [1,2]
:::

## 题解

### 方法一

使用优先队列, 这里以大顶堆为例, 但这种方式(不管是大顶堆还是小顶堆), 时间复杂度都是 O(NlogK).

```ts
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map()
  const pq = new PriorityQueue()
  const res = []

  // 先写个 hashmap, k-v 为: 元素-元素的出现次数
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }

  // 将 [元素的出现次数, 元素] 放到优先队列中
  map.forEach((val, key) => pq.offer([val, key]))

  // 找出前 k 个高频元素, 就让大顶堆依次 poll 即可
  for (let i = 0; i < k; i++) {
    res.push(pq.poll()[1])
  }

  return res
}
```

### 方法二

这个方案比较有意思, 这里以 `nums = [1,1,1,2,2,3,3,3,4,4,4,4]`, `k = 3` 为例:

- 仍然先写个哈希表, **k-v 为: 元素-元素的出现次数**, 即 `1->3, 2->2, 3->3, 4->4`
- 创建一个 buckets 数组, 注意它的长度应该为 `nums.length + 1`, 同时将该数组的所有元素初始化成 0.
- 将哈希表中的每个 key, 以 val 为索引复写到 buckets 数组中, 注意看上面 `1->3, 3->3`, 存在重复的 val, 但两个 key(1 和 3) 都应该被存在 buckets 中, 因此可以把相应位置改成数组.
  - 修改前: `0 0 0 0 0 0 0 0 0 0 0 0`
  - 修改后: `0 0 [2] [1,3] [4] 0 0 0 0 0 0 0`
- 此时对于 buckets, 只要**元素是数组**, 那么频次是**从小到大**排列的, 因此我们可以从后往前遍历, 将元素塞到 res 中, 直到 `res.length === k`.

上面说到 buckets 数组的长度应该为 `nums.length + 1`, 这是为什么呢? 假设 `nums = [1]`, 那么 hashmap 就是 `1->1`, 如果 buckets 的长度也是 1, 即初始化为 `[0]`, 那么 `buckets[1]` 就是 `undefined` 了, 因此下面代码中高亮的那一行就会出错.

```ts {15}
var topKFrequent = function (nums, k) {
  const map = new Map()

  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }

  const buckets = new Array(nums.length + 1).fill(0)
  map.forEach((val, key) => {
    if (buckets[val] !== 0) {
      buckets[val] = [...buckets[val], key]
    } else {
      buckets[val] = [key]
    }
  })

  const res = []
  for (let i = buckets.length - 1; i > 0; i--) {
    if (Array.isArray(buckets[i]) && res.length < k) {
      res.push(...buckets[i])
    }
  }

  return res
}
```
