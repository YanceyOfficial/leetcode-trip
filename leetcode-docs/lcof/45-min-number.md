---
id: 45-min-number
title: 把数组排成最小的数
sidebar_label: 45. 把数组排成最小的数
---

## 题目

输入一个非负整数数组, 把数组里所有数字拼接起来排成一个数, 打印能拼接出的所有数字中最小的一个.

:::info 示例

```ts
输入: arr = [10, 2]
输出: '102'
```

```ts
输入: arr = [3, 30, 34, 5, 9]
输出: '3033459'
```

:::

## 题解

x 尼玛, 面美团被问到了这题, 不会做. 其实就是一个快排的变体, 直接看注释.

```ts
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]
  const low = []
  const high = []

  for (let i = 0; i < arr.length; i++) {
    // 核心在这里
    // 通过当前值和 pivot 组合, 找出那个小的放在 low 数组
    // 大的放到 high 数组.
    const a = `${arr[i]}${pivot}`
    const b = `${pivot}${arr[i]}`

    if (+a < +b) {
      low.push(arr[i])
    } else {
      high.push(arr[i])
    }
  }

  return quickSort(low).concat([pivot], quickSort(high))
}

function minNumber(nums) {
  return quickSort(nums).join('')
}
```
