---
id: 709-to-lower-case
title: 转换成小写字母
sidebar_label: 709. 转换成小写字母
---

## 题目

实现函数 ToLowerCase(), 该函数接收一个字符串参数 str, 并将该字符串中的大写字母转换成小写字母, 之后返回新的字符串.

:::info 示例

输入: "Hello"

输出: "hello"
:::

## 题解

### 解法一: 使用 ASCII

基本上来讲就是 API 的活学活用, 以前写过一个 [JavaScript API 全解析](https://js.yanceyleo.com/docs/String/fromCharCode/)的网站, 可以看看.

要注意英文大写字母的区间是 `charCode >= 65 && charCode <= 90`, 并且某个大写字母与之对应的小写字母差 `32`.

```ts
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let res = ''
  for (let i = 0; i < str.length; i++) {
    const charCode = str[i].charCodeAt()
    if (charCode >= 65 && charCode <= 90) {
      res += String.fromCharCode(charCode + 32)
    } else {
      res += str[i]
    }
  }

  return res
}
```

### 解法二: 使用二进制法

:::success TIPS
大写变小写, 小写变大写: 字符 ^= 32;

大写变小写, 小写变小写: 字符 |= 32;

小写变大写, 大写变大写 : 字符 &= -33.
:::

从评论区看到了这个写法, 不过用 js 貌似不支持, 先留个坑.
