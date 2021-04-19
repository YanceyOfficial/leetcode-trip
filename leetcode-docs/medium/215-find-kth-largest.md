---
id: 215-find-kth-largest
title: 数组中的第k个最大元素
sidebar_label: 215. 数组中的第k个最大元素
keywords:
  - topK
  - 二叉堆
  - 优先队列
---

:::success Tips
题目类型: topK

相关题目:

- [剑指 Offer - 40. 最小的 k 个数](/leetcode/lcof/40-get-least-numbers)
- [347. 前-k-个高频元素](/leetcode/medium/347-top-k-frequent)

:::

## 题目

在未排序的数组中找到第 k 个最大的元素. 请注意, 你需要找的是数组排序后的第 k 个最大的元素, 而不是第 k 个不同的元素.

:::info 示例

输入: [3,2,1,5,6,4] 和 k = 2

输出: 5
:::

## 题解

Top K 的问题首先可以用[优先队列](/data-structure/queue/priority-queue)解决.

### 大顶堆

```ts
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
  const maxHeap = new PriorityQueue()

  for (const num of nums) {
    maxHeap.offer(num)
  }

  for (let j = 1; j < k; j++) {
    maxHeap.poll()
  }

  return maxHeap.peek()
}
```

### 小顶堆

```ts
var findKthLargest = function (nums, k) {
  const minHeap = new PriorityQueue()

  for (const num of nums) {
    minHeap.offer(num)
  }

  for (let j = 0; j < nums.length - k; j++) {
    minHeap.poll()
  }

  return minHeap.peek()
}
```

### 快速选择算法

我们在[快速排序](/algorithm-design/sort/quick)中了解到了 `partition` 函数, 它是用来找每个子区间的分界点 p, 以保证分界点的左侧都小于 p, 右边的都大于 p. 题目要求的是**第 k 个最大元素**, 这个元素其实就是 nums 升序排序后索引为 `nums.length - k` 的元素.

```ts
// 交换数组的两个值, 当然你用解构也 ok
function swap(nums, leftIndex, rightIndex) {
  const temp = nums[leftIndex]
  nums[leftIndex] = nums[rightIndex]
  nums[rightIndex] = temp
}

// 洗牌算法
function shuffle(arr) {
  let i = arr.length,
    j
  while (i) {
    j = Math.floor(Math.random() * i--)
    swap(arr, i, j)
  }
  return arr
}


// 分区函数, 将 arr[high] 作为 pivot 分区点
// i, j 两个指针, i 作为标记"已处理区间"和"未处理区间"的分界点, 也即 i 左边的 [low..i-1] 都是"已处理区".
// j 指针遍历数组, 当 arr[j] 小于 pivot 时, 就把 arr[j] 放到"已处理区间"的尾部, 也即是 arr[i] 所在位置
// 因此 swap(arr, i, j) 然后 i 指针后移, i++
// 直到 j 遍历到数组末尾 arr[high], 将 arr[i] 和 arr[high](pivot点)进行交换, 返回下标 i, 就是分区点的下标.
function partition(nums, low, high) {
  let i = low
  const pivot = nums[high]
  for (let j = low; j < high; j++) {
    if (nums[j] < pivot) {
      swap(nums, i, j)
      i++
    }
  }
  swap(nums, i, high)
  return i
}

var findKthLargest = function (nums, k) {
  // 数组为升序或倒序数组会导致 partition 效率变低
  // 因此一开始先将 nums 顺序打乱
  shuffle(nums)

  const len = nums.length

  let lo = 0,
    hi = len - 1

  k = len - k

  while (lo <= hi) {
    const p = partition(nums, lo, hi)

    if (p < k) {
      // 第 k 大的元素在 nums[p+1..hi] 中
      lo = p + 1
    } else if (p > k) {
      // 第 k 大的元素在 nums[lo..p-1] 中
      hi = p - 1
    } else {
      // 找到第 k 大元素
      return nums[p]
    }
  }

  return -1
}
```
