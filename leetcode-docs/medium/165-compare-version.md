---
id: 165-compare-version
title: 比较版本号
sidebar_label: 165. 比较版本号
---

## 题目

给你两个版本号 version1 和 version2, 请你比较它们.

版本号由一个或多个修订号组成, 各修订号由一个 '.' 连接. 每个修订号由多位数字组成, 可能包含前导零 . 每个版本号至少包含一个字符. 修订号从左到右编号, 下标从 0 开始, 最左边的修订号下标为 0, 下一个修订号下标为 1, 以此类推. 例如, 2.5.33 和 0.1 都是有效的版本号.

比较版本号时, 请按从左到右的顺序依次比较它们的修订号. 比较修订号时, 只需比较忽略任何前导零后的整数值. 也就是说, 修订号 1 和修订号 001 相等 . 如果版本号没有指定某个下标处的修订号, 则该修订号视为 0 . 例如, 版本 1.0 小于版本 1.1, 因为它们下标为 0 的修订号相同, 而下标为 1 的修订号分别为 0 和 1, 0 < 1.

返回规则如下:

- 如果 version1 > version2 返回 1,
- 如果 version1 < version2 返回 -1,
- 除此之外返回 0.

:::info 示例

```ts
输入: version1 = "1.01", version2 = "1.001"
输出: 0
解释: 忽略前导零, "01" 和 "001" 都表示相同的整数 "1"
```

```ts
输入: version1 = "1.0", version2 = "1.0.0"
输出: 0
解释: version1 没有指定下标为 2 的修订号, 即视为 "0"
```

```ts
输入: version1 = "0.1", version2 = "1.1"
输出: -1
解释: version1 中下标为 0 的修订号是 "0", version2 中下标为 0 的修订号是 "1" . 0 < 1, 所以 version1 < version2
```

```ts
输入: (version1 = '1.0.1'), (version2 = '1')
输出: 1
```

```ts
输入: (version1 = '7.5.2.4'), (version2 = '7.5.3')
输出: -1
```

:::

## 题解

```ts
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split('.')
  const v2 = version2.split('.')
  const n = Math.max(v1.length, v2.length)

  for (let i = 0; i < n; i += 1) {
    const a = +v1[i] || 0
    const b = +v2[i] || 0
    if (a !== b) return a > b ? 1 : -1
  }

  return 0
}
```
