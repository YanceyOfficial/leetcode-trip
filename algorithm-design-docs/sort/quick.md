---
id: quick
title: 快速排序
sidebar_label: Quick
---

## 实现方法

1. 从数列中挑出一个元素, 称为 "基准" (pivot);
2. 重新排序数列, 所有元素比基准值小的摆放在基准前面, 所有元素比基准值大的摆在基准的后面(相同的数可以到任一边). 在这个分区退出之后, 该基准就处于数列的中间位置. 这个称为分区(partition)操作;
3. 递归地把小于基准值元素的子数列和大于基准值元素的子数列排序.

## 实现

```ts
export function quickSort(arr: number[]) {
  if (arr.length <= 1) {
    return arr
  }
  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]
  const low: number[] = []
  const high: number[] = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      low.push(arr[i])
    } else {
      high.push(arr[i])
    }
  }
  return quickSort(low).concat([pivot], quickSort(high))
}
}
```

### 另一种更加细化的实现

```ts
function swap(items: number[], lowIndex: number, highIndex: number) {
  const temp = items[lowIndex]
  items[lowIndex] = items[highIndex]
  items[highIndex] = temp
}

// 快速选择算法
function partition(items: number[], low: number, high: number) {
  let i = low
  const pivot = items[high]
  for (let j = low; j < high; j++) {
    if (items[j] < pivot) {
      swap(items, i, j)
      i++
    }
  }
  swap(items, i, high)
  return i
}

function quickSort1(items: number[], low: number, high: number): number[] {
  if (low >= high) return []
  const i = partition(items, low, high)
  quickSort1(items, low, i - 1)
  quickSort1(items, i + 1, high)

  return items
}
```
