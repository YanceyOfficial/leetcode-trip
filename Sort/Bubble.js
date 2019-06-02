// <1>.比较相邻的元素。如果第一个比第二个大，就交换它们两个；
// <2>.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
// <3>.针对所有的元素重复以上的步骤，除了最后一个；
// <4>.重复步骤1~3，直到排序完成。

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len - 1 - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// 写这个
function bubbleSort3(arr3) {
  let low = 0;
  let high = arr.length - 1;
  let i;
  while (low < high) {
    for (i = low; i < high; ++i)
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    --high;
    for (i = high; i > low; --i)
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      }
    ++low;
  }
  return arr3;
}

// 复杂度 o(n^2) 稳定
