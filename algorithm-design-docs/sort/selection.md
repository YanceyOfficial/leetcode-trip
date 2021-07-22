---
id: selection
title: 选择排序
sidebar_label: Selection
---

```ts
function selectionSort(arr) {
  const n = arr.length
  for (let i = 0; i < n; i++) {
    let mun = i
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[mun]) {
        mun = j
      }
    }

    ;[arr[mun], arr[i]] = [arr[i], arr[mun]]
  }
  return arr
}
```
