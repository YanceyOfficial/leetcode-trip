---
id: 16-my-pow
title: 数值的整数次方
sidebar_label: 16. 数值的整数次方
---

:::success Tips
题目类型: 位运算, 分治

本题和 [50. pow-x-n](/leetcode/medium/50-my-pow) 重复.

:::

## 题目

实现 pow(x, n), 即计算 x 的 n 次幂函数.

:::info 示例

```bash
输入: x = 2.00000, n = 10

输出: 1024.00000
```

```bash
输入: x = 2.00000, n = -2

输出: 0.25000
```

:::

## 题解

### 快速幂

快速幂算法的本质是分治算法, 比如求 x<sup>64</sup>, 每次直接把上一次的结果进行平方, 计算 66 次就可以得到 x<sup>64</sup> 的值,而不需要对 x 乘 63 次.

x → x<sup>2</sup> → x<sup>4</sup> → x<sup>8</sup> → x<sup>16</sup> → x<sup>32</sup> → x<sup>64</sup>

再看下面这个例子, 我们直接把上一次的结果进行平方, x<sup>4</sup> → x<sup>9</sup>, x<sup>9</sup> → x<sup>19</sup>, x<sup>19</sup> → x<sup>38</sup>, x<sup>38</sup> → x<sup>77</sup> 这些步骤中, 我们把上一次的结果进行平方后, 还要额外乘一个 x.

x → x<sup>2</sup> → x<sup>4</sup> → x<sup>9</sup> → x<sup>19</sup> → x<sup>38</sup> → x<sup>77</sup>

从前往后看比较费劲, 从后往前看就有分治的思想了:

1. 计算 x<sup>n</sup>, 可以先递归的计算出 y = x<sup>Math.floor(n / 2)</sup>
2. 根据递归计算的结果, 如果 n 是偶数, 那么 x<sup>n</sup> = y<sup>2</sup>; 否则 x<sup>n</sup> = y<sup>2</sup> \* x
3. 递归的边界为 n = 0, 任意数的 0 次方均为 1

```ts
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 1 || n === 0) return 1
  if (n < 0) return 1 / helper(x, Math.abs(n))
  if (n > 0) return helper(x, n)
}

var helper = function (x, n) {
  if (n === 0) return 1

  if (n % 2 === 1) {
    const half = helper(x, (n - (n % 2)) / 2)
    return x * half * half
  } else {
    const half = helper(x, n / 2)
    return half * half
  }
}
```

### 位运算

```ts
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  let result = 1
  while (n) {
    if (n & 1) result *= x //判断 n 的二进制最后一位是否是 1, 如果是 1 则将结果乘以 x
    x *= x
    n >>>= 1
    //进行无符号右移 1 位, 此处不能使用有符号右移 >>
    //当 n 为 -2^31 转换成正数时的二进制位 10000000000000000000000000000000
    // 如果采用有符号右移时会取最左侧的数当符号即 1, 所以返回的结果是 -1073741824
  }
  return result
}
```
