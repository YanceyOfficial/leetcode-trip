function swap(arr: number[], i: number, j: number) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

function maxHeapify(arr: number[], start: number, end: number) {
  // 建立父/子节点
  const dad = start
  let son = dad * 2 + 1
  if (son >= end) {
    // 若子节点 > end 直接返回
    return
  }
  if (son + 1 < end && arr[son] < arr[son + 1]) {
    // 先比较两个子节点大小, 选择最大的
    son++
  }
  if (arr[dad] <= arr[son]) {
    // 如果父节点小于子节点时, 交换父子内容再继续子节点和孙节点比较
    swap(arr, dad, son)
    maxHeapify(arr, son, end)
  }
}

function heapSort(arr: number[]) {
  const len = arr.length
  // 初始化, i 从最后一个父节点开始调整
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) maxHeapify(arr, i, len)
  // 先将第一个元素和已排好元素前一位做交换, 再重新调整, 直到排序完毕
  for (let i = len - 1; i > 0; i--) {
    swap(arr, 0, i)
    maxHeapify(arr, 0, i)
  }

  return arr
}

console.log(heapSort([4, 65, 3, 2, 5, 765, 12, 4, 3, 5, 7, 21]))
