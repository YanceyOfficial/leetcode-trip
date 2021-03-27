---
id: 15-three-sum
title: 三数之和
sidebar_label: 15. 三数之和
---

## 题目

给你一个包含 n 个整数的数组 nums, 判断是否存在三个元素 a, b, c, 使得 a + b + c = 0, 找出这样满足条件且**不重复**的所有三元组.

:::info 示例

输入: `nums = [-1, 0, 1, 2, -1, -4]`

输出: `[[-1, 0, 1], [-1, -1, 2]]`
:::

## 题解

### 从泛化的两数之和到三数之和

首先贴一个两数之和等于 target 的例子, 基本的模型就是先给数组进行排序, 并用左右两个指针往中间夹, 如果它俩的和大于 target, 意味着右指针得往左走; 如果它俩的和小于 target, 意味着左指针得往右走, 直到 `sum === target`, 将两个数字塞到 res 里, 然后让左右指针继续游走.

```js
function twoSumTarget(nums, target) {
  nums.sort((a, b) => a - b)
  const res = []
  let low = 0,
    high = nums.length - 1

  while (low < high) {
    const sum = nums[low] + nums[high]

    if (sum < target) {
      low++
    } else if (sum > target) {
      high--
    } else {
      res.push({ low, high })
      low++
      high--
    }
  }
}
```

但上面代码的操蛋之处在于可能会出现重复, 以 nums = [1, 1, 1, 2, 2, 3, 3], target = 4 为例子, 第一个数 1 和最后一个数 3 之和等于了 4, 然后两个指针往中间夹一步, 此时又遇见了 1 和 3, 在没有任何保护措施的情况下, 就会造成重复. 因此你需要在每次比较时, 遍历一次将重复的值过滤掉.

```js
function twoSumTarget(nums, target) {
  nums.sort((a, b) => a - b)
  const res = []
  let low = 0,
    high = nums.length - 1

  while (low < high) {
    const left = nums[low],
      right = nums[high]
    const sum = left + right

    if (sum < target) {
      while (low < high && nums[low] === left) {
        low++
      }
    } else if (sum > target) {
      while (low < high && nums[high] === right) {
        high--
      }
    } else {
      res.push([left, right])
      while (low < high && nums[low] === left) {
        low++
      }
      while (low < high && nums[high] === right) {
        high--
      }
    }
  }

  return res
}
```

本题是找三个数的和为 0, 我们泛化一下, 把题目改成**找三个数的和为 target**. 它其实就是先找出一个数 a(注意找 a 的时候也需要跳过重复的), 然后在找两数之和 `b + c`, 使得 `b + c === target - a`.

```ts
// 与上面不同的是, 你需要将
function twoSumTarget(nums, start, target) {
  const res = []
  let low = start,
    high = nums.length - 1

  while (low < high) {
    ...
  }

  return res
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums, target) {
  let res = []
  const len = nums.length

  nums.sort((a, b) => a - b) // 排序

  for (let i = 0; i < len; i++) {
    const items = twoSumTarget(nums, i + 1, target - nums[i])

    // 如果存在满足条件的二元组, 再加上 nums[i] 就是结果三元组
    for (const item of items) {
      item.push(nums[i])
      res.push(item)
    }
    // 跳过第一个数字重复的情况, 否则会出现重复结果
    while (i < len - 1 && nums[i] === nums[i + 1]) {
      i++
    }
  }
  return res
}
```

### 通用解法

通过上面的代码, 我们可以看到三数之和是基于两数之和的, 同理四数之和是基于三数之和的, 因此你可以通过这个方法, 写出 n 数之和. 最后我们写出一个通用版本出来.

```ts
var nSumTarget = function (nums, n, start, target) {
  const len = nums.length
  const res = []

  // 提前过滤掉一些不可能的强狂
  // 至少是 2Sum, 且数组大小不应该小于 n
  if (n < 2 || len < n) return res

  if (n === 2) {
    let lo = start,
      hi = len - 1
    while (lo < hi) {
      const sum = nums[lo] + nums[hi]
      const left = nums[lo],
        right = nums[hi]

      if (sum < target) {
        while (lo < hi && nums[lo] === left) lo++
      } else if (sum > target) {
        while (lo < hi && nums[hi] === right) hi--
      } else {
        res.push([left, right])
        while (lo < hi && nums[lo] === left) lo++
        while (lo < hi && nums[hi] === right) hi--
      }
    }
  } else {
    // n > 2 时, 递归计算 (n-1)Sum 的结果
    for (let i = start; i < len; i++) {
      const items = nSumTarget(nums, n - 1, i + 1, target - nums[i])
      for (const item of items) {
        // (n-1)Sum 加上 nums[i] 就是 nSum
        item.push(nums[i])
        res.push(item)
      }
      while (i < len - 1 && nums[i] === nums[i + 1]) i++
    }
  }

  return res
}
```

因为每次递归的时候执行 sort 很费性能, 因此我们提前把排好序的数组准备好, 以下为本题的最终解法.

```ts
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  return nSumTarget(nums, 3, 0, 0)
}
```
