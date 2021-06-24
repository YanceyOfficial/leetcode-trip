---
id: 168-convert-to-title
title: excel表列名称
sidebar_label: 168. excel表列名称
---

## 题目

给定一个正整数, 返回它在 Excel 表中相对应的列名称.

- 1 -> A
- 2 -> B
- 3 -> C
- ...
- 26 -> Z
- 27 -> AA
- 28 -> AB
- ...

:::info 示例
输入: 701

输出: "ZY"
:::

## 题解

- 如果对 26 取余不等于 0, 说明当前位就是余数所对应的字母 `String.fromCharCode((n % 26) + 64)`
- 如果对 26 取余等于 0, 说明走完一轮了, 前面要补 'Z', 注意此时要对 27 取余, 因为要"翻页"了.

```ts
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let res = ''

  while (n > 0) {
    if (n % 26 !== 0) {
      res = String.fromCharCode((n % 26) + 64) + res
      n = (n / 26) | 0
    } else {
      res = 'Z' + res
      n = (n / 27) | 0
    }
  }

  return res
}
```
