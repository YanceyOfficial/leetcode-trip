// (1) 将数组的第一个位置设置为下边界(0)。
// (2) 将数组最后一个元素所在的位置设置为上边界(数组的长度减 1)。
// (3) 若下边界等于或小于上边界，则做如下操作。
// a. 将中点设置为(上边界加上下边界)除以 2。
// b. 如果中点的元素小于查询的值，则将下边界设置为中点元素所在下标加 1。
// c. 如果中点的元素大于查询的值，则将上边界设置为中点元素所在下标减 1。
// d. 否则中点元素即为要查找的数据，可以进行返回。

export function binSearch(arr: any[], el: any) {
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)

    if (arr[mid] < el) {
      low = mid + 1
    } else if (arr[mid] > el) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

// O(log2n)
