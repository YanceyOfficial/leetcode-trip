---
id: 202-compute
title: 快乐数
sidebar_label: 202. 快乐数
---

## 题目

编写一个算法来判断一个数 n 是不是快乐数.

快乐数定义为:

- 对于一个正整数, 每一次将该数替换为它每个位置上的数字的平方和.
- 然后重复这个过程直到这个数变为 1, 也可能是无限循环但始终变不到 1.
- 如果可以变为 1, 那么这个数就是快乐数.
- 如果 n 是快乐数就返回 true; 不是, 则返回 false.

:::info 示例

输入: 19

输出: true

解释:

- 1<sup>2</sup>+ 9<sup>2</sup> = 82
- 8<sup>2</sup> + 2<sup>2</sup> = 68
- 6<sup>2</sup> + 8<sup>2</sup> = 100
- 1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> = 1

:::

## 题解

首先把求一个数上每个位置平方和的函数写出来, 这个没啥说的:

```ts
var compute = function (n) {
  let num = 0

  while (n >= 1) {
    const remainder = n % 10
    num += remainder * remainder
    n = (n - remainder) / 10
  }

  return num
}
```

然后要明白一个定理: 就是说一个数字, 按每个位置求平方和, 得到的新数字再次按每个位置求平方和...这样往复计算, 总会遇到重复的.

比如说 12 -> 5 -> 25 -> 29 -> 85 -> [89 -> 145 -> 42 -> 20 -> 4 -> 16 -> 37 -> 58 -> 89].

如果你做过 [141. 环形链表](/leetcode/easy/141-has-cycle), 应该一眼看出这是一个环状结构没跑了, 所以快慢指针大法好, HashMap 大法也好, 都可以使出来了.

### 快慢指针

```ts
/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n) {
  let fast = n,
    slow = n

  do {
    slow = compute(slow)
    fast = compute(compute(fast))
  } while (fast !== slow)

  return slow === 1
}
```

### HashMap

```ts
var isHappy = function (n) {
  let curNum = n
  const set = new Set()
  set.add(curNum)

  while (curNum !== 1) {
    curNum = compute(curNum)

    if (set.has(curNum)) {
      return false
    }

    set.add(curNum)
  }

  return true
}
```
