---
id: 58-length-of-last-word
title: 最后一个单词的长度
sidebar_label: 58. 最后一个单词的长度
---

## 题目

给你一个字符串 s, 由若干单词组成, 单词之间用空格隔开. 返回字符串中最后一个单词的长度. 如果不存在最后一个单词, 请返回 0. **单词**是指仅由字母组成, 不包含任何空格字符的最大子字符串.

:::info 示例

```ts
输入: s = 'Hello World'
输出: 5
```

```ts
输入: s = ' '
输出: 0
```

:::

## 题解

### 解法一: API 小能手

先把两边的空格移除掉, 再按中间的空格切分成数组; 找数组的最后一个元素即可, 如果数组为空, 则返回 0. 不过这种方式创建了一个数组, 会导致空间复杂度变成 O(n).

```ts
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const sArr = s.trim().split(' ')
  if (sArr.length > 0) {
    return sArr[sArr.length - 1].length
  }

  return 0
}
```

## 方法二

从后往前遍历, 如果没遇见空格, 就让 `count++`; 如果遇见了空格, 还要判断 count 是否为 0, 因为既然是单词, **至少得有一个字母**, 此时才可以跳出循环. 比起解法一, 该方法的空间复杂度仅为 O(1), 很优雅.

```ts
var lengthOfLastWord = function (s) {
  const n = s.length
  let count = 0

  for (let i = n - 1; i >= 0; i -= 1) {
    if (s[i] === ' ') {
      if (count !== 0) {
        break
      }
    } else {
      count++
    }
  }

  return count
}
```