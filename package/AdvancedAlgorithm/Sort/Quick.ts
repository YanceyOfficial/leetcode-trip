/* eslint-disable */

// <1>.从数列中挑出一个元素, 称为 "基准" (pivot)；
// <2>.重新排序数列, 所有元素比基准值小的摆放在基准前面, 所有元素比基准值大的摆在基准的后面 (相同的数可以到任一边).
// 在这个分区退出之后, 该基准就处于数列的中间位置.这个称为分区 (partition)操作；
// <3>.递归地 (recursive)把小于基准值元素的子数列和大于基准值元素的子数列排序.

export function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  const left = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex]
  items[leftIndex] = items[rightIndex]
  items[rightIndex] = temp
}
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right
  while (i <= j) {
    while (items[i] < pivot) {
      i++
    }
    while (items[j] > pivot) {
      j--
    }
    if (i <= j) {
      swap(items, i, j)
      i++
      j--
    }
  }
  return i
}

function quickSort1(items, left, right) {
  var index
  if (items.length > 1) {
    index = partition(items, left, right)
    if (left < index - 1) {
      quickSort1(items, left, index - 1)
    }
    if (index < right) {
      quickSort1(items, index, right)
    }
  }
  return items
}

const arr = [5, 3, 7, 6, 2, 9]

console.log(quickSort1(arr, 0, arr.length - 1)) // [2, 3, 5, 6, 7, 9]

// 复杂度 o(nlog(n)) 不稳定
