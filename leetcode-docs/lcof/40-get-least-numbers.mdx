---
id: 40-get-least-numbers
title: 最小的 k 个数
sidebar_label: 40. 最小的 k 个数
keywords:
  - topK
  - 二叉堆
  - 优先队列
---

:::success Tips
题目类型: topK

相关题目:

- [215. 数组中的第 k 个最大元素](/leetcode/medium/215-find-kth-largest)
- [347. 前-k-个高频元素](/leetcode/medium/347-top-k-frequent)

:::

## 题目

输入整数数组 arr, 找出其中最小的 k 个数.

:::info 示例

输入: arr = [4, ,5, 1, 6, 2, 7, 3, 8], k = 4

输出: [1, 2, 3, 4]

:::

## 题解

### 优先队列

```ts
let getLeastNumbers = function (arr, k) {
  // 从 arr 中取出前 k 个数, 构建一个大顶堆
  let heap = [,],
    i = 0
  while (i < k) {
    heap.push(arr[i++])
  }
  buildHeap(heap, k)

  // 从 k 位开始遍历数组
  for (let i = k; i < arr.length; i++) {
    if (heap[1] > arr[i]) {
      // 替换并堆化
      heap[1] = arr[i]
      heapify(heap, k, 1)
    }
  }

  // 删除heap中第一个元素
  heap.shift()
  return heap
}

// 原地建堆, 从后往前, 自上而下式建大顶堆
let buildHeap = (arr, k) => {
  if (k === 1) return
  // 从最后一个非叶子节点开始, 自上而下式堆化
  for (let i = Math.floor(k / 2); i >= 1; i--) {
    heapify(arr, k, i)
  }
}

// 堆化
let heapify = (arr, k, i) => {
  // 自上而下式堆化
  while (true) {
    let maxIndex = i
    if (2 * i <= k && arr[2 * i] > arr[i]) {
      maxIndex = 2 * i
    }
    if (2 * i + 1 <= k && arr[2 * i + 1] > arr[maxIndex]) {
      maxIndex = 2 * i + 1
    }
    if (maxIndex !== i) {
      swap(arr, i, maxIndex)
      i = maxIndex
    } else {
      break
    }
  }
}

// 交换
let swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
```

- 时间复杂度: 遍历数组需要 O(n) 的时间复杂度, 一次堆化需要 O(logk) 时间复杂度, 所以利用堆求 Top k 问题的时间复杂度为 O(nlogk)
- 空间复杂度: O(k)

### 快速选择

```ts
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  const len = arr.length
  let lo = 0,
    hi = len - 1

  if (k >= len) return arr

  let index = partition(arr, lo, hi)
  while (index !== k) {
    if (index < k) {
      lo = index + 1
      index = partition(arr, lo, hi)
    } else if (index > k) {
      hi = index - 1
      index = partition(arr, lo, hi)
    }
  }

  return arr.slice(0, k)
}

function partition(arr, low, high) {
  let i = low
  const pivot = arr[high]
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      i++
    }
  }
  ;[arr[i], arr[high]] = [arr[high], arr[i]]
  return i
}
```

- 时间复杂度: O(N), 但会损坏原数组

### 计数排序

```ts
var getLeastNumbers = function (arr, k) {
  const counter = new Array(10001).fill(0)

  // 统计所有数字的个数
  for (const num of arr) {
    counter[num] += 1
  }

  const res = new Array(k)
  let idx = 0

  // 从左到右遍历
  for (let i = 0; i < counter.length; i++) {
    // 如果 idx === k 证明全了
    if (idx === k) break

    let curr = counter[i]
    while (curr > 0 && idx < k) {
      res[idx] = i
      idx++
      curr--
    }
  }

  return res
}
```
