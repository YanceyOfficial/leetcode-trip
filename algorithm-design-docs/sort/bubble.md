---
id: bubble
title: 冒泡排序
sidebar_label: 冒泡排序
---

1. 比较相邻的元素. 如果第一个比第二个大, 就交换它们两个
2. 对每一对相邻元素作同样的工作, 从开始第一对到结尾的最后一对, 这样在最后的元素应该会是最大的数
3. 针对所有的元素重复以上的步骤, 除了最后一个
4. 重复步骤 1~3, 直到排序完成

```js
function bubbleSort(arr) {
  const len = arr.length
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len - 1 - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
```

## 优化版

时间复杂度: O(n^2)
稳定性: 稳定

```js
function bubbleSort(arr) {
  let low = 0
  let high = arr.length - 1
  let i
  while (low < high) {
    for (i = low; i < high; ++i)
      if (arr[i] > arr[i + 1]) {
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      }
    --high
    for (i = high; i > low; --i)
      if (arr[i] < arr[i - 1]) {
        ;[arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
      }
    ++low
  }
  return arr
}
```
