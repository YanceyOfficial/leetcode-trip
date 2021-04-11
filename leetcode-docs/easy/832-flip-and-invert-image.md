---
id: 832-flip-and-invert-image
title: 翻转图像
sidebar_label: 832. 翻转图像
---

## 题目

给定一个二进制矩阵 A, 我们想先水平翻转图像, 然后反转图像并返回结果.

水平翻转图片就是将图片的每一行都进行翻转, 即逆序.例如, 水平翻转 `[1, 1, 0]` 的结果是 `[0, 1, 1]`.

反转图片的意思是图片中的 0 全部被 1 替换, 1 全部被 0 替换. 例如, 反转 `[0, 1, 1]` 的结果是 `[1, 0, 0]`.

:::info 示例

输入: [[1,1,0],[1,0,1],[0,0,0]]

输出: [[1,0,0],[0,1,0],[1,1,1]]

解释: 首先翻转每一行: [[0,1,1],[1,0,1],[0,0,0]]; 然后反转图片: [[1,0,0],[0,1,0],[1,1,1]]
:::

## 题解

### 菜 🐔 解法

最菜的就是按照题目一步一步的照本宣科就好了.

```ts
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  const len = image.length
  for (let i = 0; i < len; i++) {
    let j = 0,
      k = image[i].length - 1
    while (j < k) {
      ;[image[i][j], image[i][k]] = [image[i][k], image[i][j]]
      j++
      k--
    }

    for (let m = 0; m < image[i].length; m++) {
      image[i][m] ^= 1
    }
  }

  return image
}
```

### 一趟排序

其实就是把**水平翻转**和**反转**一块做了.

- 如果这两个数是不同的, 比如说一个是 1, 一个是 0, 那么先 1 0 反转, 则一个是 0, 一个是 1, 再左右翻转, 又变回一个是 1, 一个是 0. 这说明当两个数是不同的时候, 不用做任何事情;
- 当两个数相同的时候, 要同时反转;
- **注意**: 如果 item 长度为奇数, 那么在 while 循环中, left 和 right 相等时是不会对这个值进行任何操作的, 你需要手动为它反转.

```ts
var flipAndInvertImage = function (image) {
  const n = image.length
  for (let i = 0; i < n; i++) {
    let left = 0,
      right = n - 1

    // 当两个数相同的时候, 要同时反转
    while (left < right) {
      if (image[i][left] === image[i][right]) {
        image[i][left] ^= 1
        image[i][right] ^= 1
      }
      left++
      right--
    }

    // 如果 item 长度为奇数, 那么在 while 循环中, left 和 right
    // 相等时是不会对这个值进行任何操作的, 你需要手动为它反转.
    if (left === right) {
      image[i][left] ^= 1
    }
  }
  return image
}
```

时间复杂度: O(n<sup>2</sup>). 其中 n 是矩阵 image 的行数和列数. 需要遍历矩阵一次, 进行翻转操作.

空间复杂度: O(1). 除了返回值以外, 额外使用的空间为常数.

## 扩展: 1 变成 0, 0 变成 1

有两种做法: 分别是:

- 使用异或运算, 即 `i ^= 1`
- `1 - i`
