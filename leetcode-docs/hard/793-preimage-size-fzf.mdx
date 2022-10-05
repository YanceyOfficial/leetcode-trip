---
id: 793-preimage-size-fzf
title: 阶乘函数后-k-个零
sidebar_label: 793. 阶乘函数后-k-个零
---

## 题目

给你一个非负整数 K, 问有多少个数 n, 使得 `n!` 结果末尾有 K 个 0. 其中 K 是范围在 `[0, 10^9]` 的整数.

:::info 示例

输入:

输出:
:::

## 题解

首先回忆 [172. 阶乘后的零](/leetcode/easy/172-trailing-zeroes)这道题.

```ts
var trailingZeroes = function (n) {
  let total = 0
  while (n >= 5) {
    n = Math.floor(n / 5)
    total += n
  }

  return total
}
```

因此这个题的一个朴素的方案是使用穷举, 当然这种方法直接超时了...

```ts
/**
 * @param {number} K
 * @return {number}
 */
var preimageSizeFZF = function (K) {
  let total = 0
  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    const zeroes = trailingZeroes(i)

    if (zeroes === K) {
      total++
    }

    if (zeroes > K) {
      break
    }
  }

  return total
}
```

另一种方式是使用二分查找, 题目是找有多少个数字 n 满足其末尾有 K 个零, 相当于满足条件的 n 最小是多少, 最大是多少, 最大值和最小值一减, 就可以算出来有多少个 n 满足条件了.

emmmm, js 反正也是显示超时.

```ts
var preimageSizeFZF = function (K) {
  return rightBound(K) - leftBound(K) + 1
}

var leftBound = function (K) {
  let lo = 0,
    hi = Number.MAX_VALUE
  while (lo < hi) {
    let mid = lo + (hi - lo) / 2
    if (trailingZeroes(mid) < K) {
      lo = mid + 1
    } else if (trailingZeroes(mid) > K) {
      hi = mid
    } else {
      hi = mid
    }
  }

  return lo
}

var rightBound = function (K) {
  let lo = 0,
    hi = Number.MAX_VALUE
  while (lo < hi) {
    let mid = lo + (hi - lo) / 2
    if (trailingZeroes(mid) < K) {
      lo = mid + 1
    } else if (trailingZeroes(mid) > K) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }

  return lo - 1
}

var trailingZeroes = function (n) {
  let total = 0
  while (n >= 5) {
    n = Math.floor(n / 5)
    total += n
  }

  return total
}
```
