export const merge = (
  arr: number[],
  left: number,
  mid: number,
  right: number,
  temp: number[],
) => {
  let i = left // 左序列指针
  let j = mid + 1 // 右序列指针
  let t = 0 // 临时数组指针
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp[t++] = arr[i++]
    } else {
      temp[t++] = arr[j++]
    }
  }
  while (i <= mid) {
    // 将左边剩余元素填充进 temp 中
    temp[t++] = arr[i++]
  }
  while (j <= right) {
    // 将右序列剩余元素填充进 temp 中
    temp[t++] = arr[j++]
  }
  t = 0
  // 将 temp 中的元素全部拷贝到原数组中
  while (left <= right) {
    arr[left++] = temp[t++]
  }
}

export const sort = (
  arr: number[],
  left: number,
  right: number,
  temp: number[],
) => {
  if (left < right) {
    const mid = Math.floor((left + right) / 2)

    // ****** 分 ******/
    // 对数组的两部分分别排序
    sort(arr, left, mid, temp) // 左边归并排序, 使得左子序列有序
    sort(arr, mid + 1, right, temp) // 右边归并排序, 使得右子序列有序

    // ****** 治 ******/
    // 合并两个排好序的子数组
    merge(arr, left, mid, right, temp) // 将两个有序子数组合并操作
  }
}

export const mergeSort = (arr: number[]) => {
  const n = arr.length
  const temp = new Array<number>(n) // 在排序前, 先建好一个长度等于原数组长度的临时数组, 避免递归中频繁开辟空间
  sort(arr, 0, n - 1, temp)

  return arr
}

console.log(mergeSort([4, 65, 3, 2, 5, 765, 12, 4, 3, 5, 7, 21]))
