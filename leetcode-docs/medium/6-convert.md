---
id: 6-convert
title: z-字形变换
sidebar_label: 6. z-字形变换
---

## 题目

将一个给定字符串 s 根据给定的行数 numRows, 以从上往下, 从左到右进行 Z 字形排列. 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时, 排列如下:

```ts
P   A   H   N
A P L S I I G
Y   I   R
```

之后, 你的输出需要从左往右逐行读取, 产生出一个新的字符串, 比如："PAHNAPLSIIGYIR".

:::info 示例

输入: s = "PAYPALISHIRING", numRows = 4

输出: "PINALSIGYAHRPI"

解释:

```ts
P I N
A L S I G
Y A H R
P I
```

:::

## 题解

逐行读取 Z 字形图案相同的顺序访问字符串.

```ts
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const n = s.length
  if (numRows < 2) return s

  const res = Array(n).fill('')
  const cycleLen = (numRows - 1) * 2

  for (let i = 0; i < n; i++) {
    const carry = i % cycleLen
    res[carry < numRows ? carry : cycleLen - carry] += s[i]
  }

  return res.join('')
}
```
