---
id: 191-hamming-weight
title: 位1的个数
sidebar_label: 191. 位1的个数
---

:::success Tips
题目类型: 位运算

相关题目:

- [136. 只出现一次的数字](/leetcode/easy/136-single-number)
- [231. 2 的幂](/leetcode/easy/231-is-power-of-two)
:::

## 题目

编写一个函数, 输入是一个无符号整数(以二进制串的形式), 返回其二进制表达式中数字位数为 '1' 的个数(也被称为**汉明重量**)

:::info 示例

```ts
输入: 00000000000000000000000000001011

输出: 3
```

```ts
输入: 00000000000000000000000010000000

输出: 1
```

:::

## 题解

### 使用 `n & (n - 1)`

关于使用 n & (n - 1), 这里不再赘述, 可访问 [位运算的一些技巧](/algorithm-design/bit-manipulation#n--n---1).

```js
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let res = 0

  while (n !== 0) {
    n = n & (n - 1)
    res++
  }

  return res
}
```

### 直接判断二进制最低位的数是不是 1

```js
var hammingWeight = function (n) {
  let ans = 0
  while (n) {
    ans += n & 1
    n >>= 1
  }
  return ans
}
```

### 除 K 取余法

```js
var hammingWeight = function (n) {
  let ans = 0
  while (n) {
    ans += n % 2
    n >>= 1
  }
  return ans
}
```
