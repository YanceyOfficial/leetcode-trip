---
id: binary-search
title: 二分查找
sidebar_label: 二分查找
---

## 朴素的二分查找

1. low 和 high 截出一个闭区间, 即 `[low, high]`
2. `while(left <= right)` 的终止条件是 `left == right + 1`, 写成区间的形式就是 `[right + 1, right]`, 这肯定是个不存在的区间, 此时退出循环, 返回 -1 即可.
3. 至于为什么是 `low = mid + 1` 和 `high = mid - 1`, 就是因为当 `nums[mid]` 不符合了, 那就得跳过这个值.
4. 当 `nums[mid]` 等于了 target, 返回即可.

```ts
var search = function (nums, target) {
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)

    if (nums[mid] < target) {
      low = mid + 1
    } else if (nums[mid] > target) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}
```

## 寻找左边界

```ts
var leftBound = function (nums, target) {
  let lo = 0,
    hi = nums.length
  while (lo < hi) {
    let mid = lo + (hi - lo) / 2
    if (trailingZeroes(mid) < target) {
      lo = mid + 1
    } else if (trailingZeroes(mid) > target) {
      hi = mid
    } else {
      hi = mid
    }
  }

  return lo
}
```

## 寻找右边界

```ts
var rightBound = function (nums, target) {
  let lo = 0,
    hi = nums.length
  while (lo < hi) {
    let mid = lo + (hi - lo) / 2
    if (trailingZeroes(mid) < target) {
      lo = mid + 1
    } else if (trailingZeroes(mid) > target) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }

  return lo - 1
}
```
