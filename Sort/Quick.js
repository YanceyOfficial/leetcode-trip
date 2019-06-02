// <1>.从数列中挑出一个元素，称为 "基准"（pivot）；
// <2>.重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。
// 在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
// <3>.递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort([3, 5, 52, 2, 5, 1, 5, 7, 3, 6, 7]));
// [ 1, 2, 3, 3, 5, 5, 5, 6, 7, 7, 52 ]

// 复杂度 o(nlog(n)) 不稳定